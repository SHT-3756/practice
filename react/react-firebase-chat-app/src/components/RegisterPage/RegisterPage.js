import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";
import md5 from "md5";

function RegisterPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const createUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      console.log("createUser", createUser);

      await createUser.user.updateProfile({
        displayName: data.name,
        photoURL: `http:gravatar.com/avatar/${md5(
          createUser.user.email
        )}?d=identicon`,
      });

      //Firebase Database 에 저장
      await firebase.database().ref("users").child(createUser.user.uid).set({
        name: createUser.user.displayName,
        image: createUser.user.photoURL,
      });

      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  // console.log(watch("email"));

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: "center" }}>
          <h3>Register</h3>
        </div>
        <label>Email</label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>이메일 형식으로 채워주세요</p>}

        <label>Name</label>
        <input
          name="name"
          {...register("name", { required: true, maxLength: 10 })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>이름을 채워주세요</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>최대 10자리입니다.</p>
        )}
        <label>Password</label>
        <input
          name="password"
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>패스워드를 채워주세요</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>최소 6자리 이상입니다.</p>
        )}

        <label>Password Confirm</label>
        <input
          name="password_confirm"
          type="password"
          {...register("password_confirm", {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        {errors.password_confirm &&
          errors.password_confirm.type === "required" && (
            <p>패스워드를 채워주세요</p>
          )}
        {errors.password_confirm &&
          errors.password_confirm.type === "validate" && (
            <p>패스워드가 일치하지 않습니다.</p>
          )}
        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" disabled={loading} />
        <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
          이미 아이디가 있다면...
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
