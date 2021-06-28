import React from "react";
import axios from "axios";
import useAsync from "./useAsync";

// useAsync 에서는 Promise 의 결과를 바로 data에 담기 때문에,
// 요청한 이후에 response에서 data추출해 반환하는 함수 따로 만들었다.

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}
function Users() {
  const [state, refetch] = useAsync(getUsers, [], true);

  const { loading, data: users, error } = state; //state.data를 users키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시불러오기</button>
    </>
  );
}

export default Users;
