import React, { useRef } from "react";
import { IoIosChatboxes } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../../firebase";
import mime from "mime-types";
import { setPhotoURL } from "../../../redux/action/user_action";

function UserPanel() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const inputOpenImageRef = useRef();

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };
  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    const metadata = { contentType: mime.lookup(file.name) };
    try {
      // 스토리지에 파일 저장하기
      const uploadTaskSnapshot = await firebase
        .storage()
        .ref()
        .child(`user_image/${user.uid}`)
        .put(file, metadata);

      const downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();
      // console.log("downloadURL", downloadURL);

      // 프로필 이미지 수정
      await firebase.auth().currentUser.updateProfile({
        photoURL: downloadURL,
      });
      dispatch(setPhotoURL(downloadURL));

      //데이터베이스 유저 이미지 수정
      await firebase
        .database()
        .ref("users")
        .child(user.uid)
        .update({ image: downloadURL });

      // console.log("uploadTaskSnapshot", uploadTaskSnapshot);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      {/* logo */}
      <div style={{ color: "white" }}>
        <IoIosChatboxes />
        Chat App
      </div>
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <Image
          src={user && user.photoURL}
          style={{ width: "30px", height: "30px", marginTop: "3px" }}
          roundedCircle
        />
        <Dropdown>
          <Dropdown.Toggle
            style={{ background: "transparent", border: "0px" }}
            id="dropdown-basic"
          >
            {user && user.displayName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* 클릭을 하게 되면  handleOpenImageRef 이벤트 실행하고 */}
            <Dropdown.Item onClick={handleOpenImageRef}>
              프로필 사진 변경
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <input
        type="file"
        accept="image/jpeg, image/png" // 선택할 수 있는 폭을 img의 jpeg, png만 가능하게설정
        ref={inputOpenImageRef} // 화면으론 보이지 않지만! ref 를 사용해서  이 부분을 클릭하게 도와준다.
        style={{ display: "none" }} // 화면상으로 보이지 않게 none으로 설정
        onChange={handleUploadImage} //사진을 클릭하면 파이어베이스로 저장하는 이벤트실행
      />
    </div>
  );
}

export default UserPanel;
