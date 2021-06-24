import React, { useReducer, useMemo } from "react";
import UserList2 from "./UserList2";
import CreateUser2 from "./CreateUser2";
import produce from "immer";

function countActiveUsers(members) {
  console.log("활성 사용자 수를 세는중...");
  return members.filter(member => member.active).length;
}

const initialState = {
    members: [
    {
      id: 1,
      username: "SHT",
      email: "SHT@gmail.com",
      active: true
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, draft => {
        draft.members.push(action.member);
      });
    case "TOGGLE_USER":
      return produce(state, draft => {
        const member = draft.members.find(user => user.id === action.id);
        member.active = !member.active;
      });
    case "REMOVE_USER":
      return produce(state, draft => {
        const index = draft.members.findIndex(user => user.id === action.id);
        draft.members.splice(index, 1);
      });
    default:
      return state;
  }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { members } = state;

  const count = useMemo(() => countActiveUsers(members), [members]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser2 />
      <UserList2 Aprops={members} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
