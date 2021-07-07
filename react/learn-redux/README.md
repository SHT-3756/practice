# 리덕스 사용법 공부

## 3개의 규칙

1. 하나의 애플리케이션에는 하나의 스토어가 있다.
   - 여러개 스토어 사용가능하지만 `하나만 사용하기를 권장한다.` 특정 업데이트가 너무 빈번하게 일어나거나, 애플리케이션 특정 부분을 완전히 분리시키게 될 때 여러개의 스토어 만들수있지만 그렇게 되면 개발도구를 활용하지 못하게 된다.
2. 상태는 읽기 전용이다.
   - 리액트에서는 state를 업데이트 할 때 setState를 사용하고, 배열 업데이트는 직접 push 가 아닌 concat함수를 사용해서 새로운 배열을 만들어서 교체하는 방식으로 한다. 엄청 깊은 구조로 되있는 객체업데이트 할 때도 기존 객체 그대로 두고 `Object.assign` 이나 `spread 연산자 (...)`를 사용한다.
   - 불변성을 유지하는 이유는 ?? 내부적으로 데이터 변경되는 것을 감지하기 위해서이다. [shalow equality](https://redux.js.org/faq/immutable-data#how-redux-uses-shallow-checking) 이를 통해 깊숙히 비교하는게 아니라 겉핥기식으로 비교를 해 좋은 성능을 유지할 수 있다.
3. 변화를 일으키는 함수, 리듀서는 순수한 함수여야 한다.
   - 리듀서 함수는 이전 상태와, 액션 객체를 파라미터로 받는다.
   - 이전 상태는 절대로 건들이지 않고, 변화를 일으킨 새로운 상태의 객체를 만들어서 반환한다.
   - 똑같은 파라미터로 호출된 리듀서 함수는 `언제나` 똑같은 결과값을 반환해야만 한다.

# 리덕스 사용 준비

1. 리덕스 설치

```bash
    yarn add redux
    npm i redux
```

2. 리덕스 필수 코스
   - 리덕스 관리 상태 정의
   - 액션 타입 정의
   - 액션 생성함수 정의 (`type은 필수`, 추가적인 필드는 `마음대로` 넣을수 있다)
   - 리듀서 만들기 (위의 액션 생성함수들을 통해 만들어진 객체 참조해서 새로운 상태를 만드는 함수를 만든다. 주의 : 리듀서에서는 `불변성`을 `꼭` 지켜야한다.)
3. 스토어 만들기
   - 스토어 안의 상태는 액션이 디스패치됨에 따라 업데이트가 된다.
   - console.log(store.getState()); 로 현재 상태 조회 가능하다.

# 리덕스 모듈 만들기

리덕스를 사용할때 파일들을 각각 다른 파일에 저장할 수 있는데, `꼭 분리할 필요없다.` 오히려 서로 다른 디렉토리에 분리가 되어있으면 개발하는데 불편하다. 그래서 리듀서와 액션관련 코드를 하의 파일에 몰아서 작성하는데 이 방법을 `Ducks 패턴` 이라고 부른다.

1. 필요한 리덕스 모듈을 만든다.
   - todos 모듈, counter 모듈 (주의: `액션타입을 선언할 때는 앞에 접두사를 추가해 겹치는 걸 미리방지, 알기 쉽게 해준다. `)
2. 루트 리듀서 만들기
   - 두가지의 리덕스 모듈을 만들었는데 하나로 합치는 방법을 사용한다. 그 합친 리듀서를 `루트 리듀서`라 부른다.
   - 합치는 작업은 redux의 내장함수 `combineReducers`함수를 사용한다.

# 리액트 프로젝트에 리덕스 적용하기

1. 리덕스 적요 할 때는 라이브러리를 설치해야한다.

```bash
    yarn add react-redux
    npm i react-redux
```

2. App.js 에 Privider을 import 해주고 App 컴포넌트를 감싸준다.

```javascript
...
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';

const store = createStore(rootReduer); //스토어 만들어준다.
    ReactOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
```

- `provider에 store`을 넣어서 App을 감싸면 우리가 어떤 컴포넌트를 렌더링하더라도 `리덕스 스토어에 접근`이 `가능`하다.

# 프리젠테이셔널 컴포넌트와 컨데이너 컴포넌트 알아보기

`프리젠테이셔널 컴포넌트란?` 리덕스 스토어에 직접적으로 접근하지 않고 `필요한 값 또는 함수를 props로만 받아 사용하는 컴포넌트`, 주로 UI를 선언하는 것에 집중한다.

`컨테이너 컴포넌트란?` 리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트를 의미한다. `HTML 태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트들을 불러와서 사용한다.`

# 리덕스 개발자 도구 적용하기

리덕스 개발자 도구를 사용한다면?  
현재 스토어의 상태를 개발자 도구에서 조회할 수 있고 지금까지 어떤 액션들이 디스패치 되었는지, 액션에 따라 상태가 어떻게 변화했는지 확인 가능하다. 추가적으로 액션을 직접 디스패치도 가능하다.

1. [크롬 웹스토어](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)에서 확장 프로그램을 설치해준다.
   (참고로 [파이어폭스](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)도 가능하다.)
2. 프로젝트에 [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)을 설치해준다.

```bash
   yarn add redux-dev-tools-extenstion
   npm i redux-dev-tools-extenstion
```

3. index.js 수정

```javascript
   ...
   import { composeWithDevTools } from 'redux-devtools-extension';

   const store = createStore(rootReducer, composeWithDevtools());
   // composeWithDevtools 를 사용하여 리덕스 개발자 도구 활성화
```

4. `npm start`, 크롬 개발자 도구 Redux 탭 클릭 후 확인한다.
