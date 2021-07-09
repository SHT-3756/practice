# 리덕스 미들웨어 공부하기

## 리덕스 프로젝트 준비

1. 라이브러리 설치

```bash
    yarn add redux react-redux
```

2. 리덕스 모듈 준비하기
   `Ducks 패턴` 사용(액션타입, 액션 생성함수, 리듀서를 한파일에 작성하는 방법)
   원래 액션이름이 중복 될까봐 접두사를 작성해주는데 이번에는 그럴 이유가 없으니 생략해주겠다.
   ```javascript
   //액션 타입(원래 작성법)
   const INCREASE = "counter/INCREASE";
   const DECREASE = "counter/DECREASE";
   ```
3. 루트 리듀서 만들어주기
   `루트 리듀서`는 리듀서가 두개 이상일 때에 하나로 합쳐서 사용하기 위한 편의 방법 redux의 내장함수 `combineReducers` 를 사용하면 된다.

4. 프로젝트에 리덕스 적용해주기

   ```javascript
       //index.js
       ...
       import { createStore } from 'redux';
       import { Provider } from 'react-redux';
       import rootReducer from './modules';

       const store = createStore(rootReducer);

       ReactDOM.render(
           <Provider store={store}>
                <App />
           <Provider>,
           document.getElementsById('root')
       );

   ```

5. `프리젠테이셔널` 컴포넌트 만들기
   리덕스 스토어에 직접적으로 접근하지 `않고` 필요한 값 또는 함수를 `props로만` 받아와서 사용하는 컴포넌트이다.
   `주로 UI를 선언`하는 것에 집중한다.

6. `컨테이너` 컴포넌트 만들기
   리덕스 `스토어의 상태를 조회`하거나, `액션을 디스패치` 할 수 있는 컴포넌트를 의미한다.
   그리고 HTML태그들을 사용하지 `않고` 다른 `프리젠테이셔널 컴포넌트`들을 불러와서 사용한다.

## 미들웨어 만들어보기

실제 실무에서는 `리덕스 미들웨어`를 직접 만드는 일은 없지만 직접 만들어보고 어떤 역할인지 이해해보자!

`미들웨어`는 결국 함수다. 함수를 연달아서 `두번 리턴하는 함수`

```javascript
function middleware(store) {
  return function (next) {
    return function (action) {
      // 하고 싶은 작업...
    };
  };
}
```

- 첫번째 store 는 리덕스 `스토어 인스턴스`이다, `dispatch`, `getState`, `subscribe` 내장함수들이 있다.

- 두번째 next 는 액션을 `다음 미들웨어에 전달`하는 함수이다, `next(action)` 이런 헝태이고, 만약 `다음 미들웨어가 없다면` 리듀서에게 액션을 전달해준다.
  만약, `next 를 호출하지 않는다면` 액션이 무시처리되어 리듀서에게 전달되지 않는다.

- 세번째 action 은 현재 처리하고 있는 `액션 객체`이다.

1.  미들웨어를 직접 작성해보고 이해하기

    - middlewares/myLogger.js 를 만들고 index.js에 적용해보자.

      ```javascript
      //middlewares/myLogger.js
      const myLogger = (store) => (next) => (action) => {
        console.log(action);
        const result = next(action);
        return result;
      };
      export default myLogger;
      ```

      ```javascript
      //index.js
      ...
      import myLogger from './middlewares/myLogger';

      const store = createStore(rootReducer, applyMiddleware(myLogger));
      ```

    - 적용한 미들웨어를 수정해보자

           ```javascript
           ...
           console.log('\t',store.getState());
           ...
           ```

이렇게 미들웨어를 직접 만들어보면서 `객체와 상태를 로깅하는 작업`을 해보았다.
리덕스 관련 값들을 콘솔에 로깅하는건 `직접 만드는 것보단 redux-logger라는 미들웨어를 사용`하는게 더욱 좋다.

## redux-logger 와 DevTools 사용하기

위에는 미들웨어를 직접 작성해봤지만, 위에거는 주석처리하고 라이브러리를 설치해서 사용해보자!

1. 라이브러리 설치

```bash
   yarn add redux-logger
```

2. index.js 에 적용하기

```javascript
   ...
   import logger from 'redux-logger';

   const store = createStore(rootReducer, applyMiddleware(logger));
   ...
```

1. Redux DevTools 사용하기
   프로젝트에 리덕스 데브툴을 사용할 수 있게 만들어주는 라이브러리이다.
   우리는 이 도구로 손쉽게 state안의 상태, action이 어떻게 실행되었나를 확인해볼 수 있다.

- `메뉴얼적인 사용법`

  ```javascript
  import { createStore, applyMiddleware } from "redux";
  import { composeWithDevTools } from "redux-devtools-extension";

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  ```

- 라이브러리 설치
  ```bash
     yarn add redux-devtools-extension
  ```
- index.js 에 적용하기

  ```javascript
     ...
     import logger from 'redux-logger';
     import {composeWithDevTools} from 'redux-devtools-extension';

     const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(applyMiddleware(logger)));
  );
  ```

# redux-thunk

리덕스에서 비동기 작업을 할때 가장 많이 사용하는 미들웨어이다.
redux-thunk를 사용하면 액션객체가 아닌 함수를 디스패치 할 수 있다.

- 그 전 미들웨어 만들때 사용한 코드
  ```javascript
  const thunk = (sotre) => (next) => (action) =>
    typeof action == "function"
      ? action(store.dispatch, sotre.getState)
      : next(action);
  ```
- redux-thunk 코드, 실제 로 많이 비슷하다.

  ```javascript
  const getCommits = () => (dispatch, getState) => {
    // 이 안에서는 액션을 dispatch 할 수도있고
    // getState 를 사용해서 현재 상태도 조회할 수 있다.
    const id = getState().post.activeId;

    //요청이 시작했음을 알리는 액션
    dispatch({ type: "GET_COMMITS" });

    //댓글을 조회하는 프로미스를 리턴하는 getCommits 가 있다고 가정해보자
    api
      .getComments(id) //요청하고
      .then((comments) =>
        dispatch({ type: "GET_COMMENTS_SUCCESS", id, comments }) //성공시
          .catch(
            (e) => dispatch({ type: "GET_COMMENTS_ERROR", error: e }) //실패시
          )
      );
  };
  ```

  1. 라이브러리 설치

  ```bash
   yarn add redux-thunk
  ```

  2.  적용하기

  ```javascript
  //index.js
  ...
  import ReduxThunk from "redux-thunk";
  const stroe = createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk, logger)));
  ...
  ```

  3. redux-thunk 는 함수도 디스패치할수 있는데, 카운터 딜레이 함수 만들어서 적용해보자

  ```javascript
   //modules/counter.js
   ...
   //추가해주고, thunk함수인 increaseAsync, decreaseAsync를 만들었다.
   export const increaseAsync = () => dispatch=> {
      setTimeout(()=> dispatch(increase()), 1000);
   }
   export const decreaseAsync = () => dispatch=> {
      setTimeout(()=> dispatch(decrease()), 1000);
   }
   ...
  ```

  ```javascript
   //containers/CounterContainer.js
   import {increaseAsync, decreaseAsync} from '../modules/counter';
   ...
   const onIncrease = () => {
      dispatch(increaseAsync());
   }
   const onDecrease = () => {
      dispatch(decreaseAsync());
   }
   ...
  ```

# redux-thunk로 프로미스 다루기

1. 가짜 API 함수 만들기
   Promise를 사용해 데이터를 반환하는 가짜API 를 만들어 보겠다.
