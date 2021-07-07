import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";
/*컨테이너 컴포넌트 만들기
리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트를 의미한다.
그리고 HTML태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트들을 불러와서 사용한다.

*/
function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 값과 같다.
  /* useSelector 훅을 통해 매번 렌더링 될때 마다 새로운 객체 {number, diff}를 만드는것이여서 상태가 바뀐지 아닌지 확인이 불가해서 렌더링 낭비이다.
  해결할 수 있는방법은 
  첫번째, useSelector를 여러번 사용하기, const number = useSelector() const diff = useSelector() 이러면 값이 하나라도 바뀌면 컴포넌트가 렌더링이 되어진다.
  두번째, redux의 내장함수 shallowEqual 함수를 사용해서 인자로 넘겨주는 것이다. 객체 안의 가장 겉에 있는 값들을 모두 비교해준다. */
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual //shallowEqual
  );

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 이다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수 생성
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      // 상태, 액션을 디스패치 하는 함수들을 props로 넣어준다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
