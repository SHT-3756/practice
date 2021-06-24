import React, { useContext } from 'react';
import { UserDispatch } from './App5';

const User = React.memo(function User({ user1 }) {
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user1.active ? 'green' : 'black'
        }}
        onClick={() => {
          dispatch({ type: 'TOGGLE_USER', id: user1.id });
        }}
      >
        {user1.username}
      </b>
      &nbsp;
      <span>({user1.email})</span>
      <button
        onClick={() => {
          dispatch({ type: 'REMOVE_USER', id: user1.id });
        }}
      >
        삭제
      </button>
    </div>
  );
});

function UserList2({ Aprops }) {
  return (
    <div>
      {Aprops.map(bProps => (
        <User user1={bProps} key={bProps.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList2); // 두번째 파라미터를 지웠습니다
