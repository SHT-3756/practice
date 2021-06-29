import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };

    default:
      throw new Error(`action type : ${action.type}`);
  }
}

function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    //여기가 loading 상태이기 때문에 loading시 실행할 함수를 실행하면 된다.
    try {
      const data = await callback();
      //여기가 함수를 실행하면 서버로부터  데이터를 잘받아올 경우 실행하게된다.
      dispatch({ type: "SUCCESS", data }); //요청이 성공하면 성공상태로 바뀌는 부분
    } catch (e) {
      dispatch({ type: "ERROR", error: e }); //요청이 실패하면 성공상태로 바뀌는 부분
      //여기는 서버로의 요청결과가 에러일시 실행되는 부분이다. 요청실패시 실행될 함수 써도 된다.
    }
  };
  useEffect(() => {
    if (skip) return;
    fetchData();
    //eslint 설정을 다음줄에서만 비활성화
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}
export default useAsync;
