const myLogger = (store) => (next) => (action) => {
  console.log(action); // 먼저 액션을 출력한다.
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달한다.

  // 업데이트 이후의 상태를 조회한다.
  console.log("\t", store.getState());
  return result; // 여기서 리턴 값은 dispatch(action)의 결과값이 된다. 기본은 undefinded
};
export default myLogger;
