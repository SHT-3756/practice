import React from "react";
import { UserDispatch } from './App3';

// Context API 사용
const User = React.memo(function User({ user1 }) {
  const dispatch = useDispatch(UserDispatch);

  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user1.active ? "green" : "black" }}
        onClick={() => {
          dispatch({ type: 'TOGGLE_USER, id: user1.id'});
        }}
      >
        {user1.username}
      </b>
      &nbsp;
      <span>({user1.email})</span>
      <button onClick={() => {
        dispatch({ type: 'REMOVE_USER', id: user1.id});
      }}>삭제</button>
    </div>
  );
});

function UserList1({ AProps }) {
  return (
    <div>
      {AProps.map((Bprops) => (
        <User user1={Bprops} key={Bprops.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList1);
