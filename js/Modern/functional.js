// 함수
// 함수 만들때 function 키워드 사용, 어떤 값을 받을지는(파라미터,매개변수)라 부른다.
function add(a, b) {
  return a + b;
}
const sum = add(1, 2);
console.log(sum); // 3

// ES6 는 ECMAScript6 이며, 자바스크립트 버전이다.
// 브라우저 버전마다 지원되는 자바스크립트 버전이 다르다.
// Babel 을 사용해 최신 버전 JS가 구버전의 브라우저에서도 실행되도록 할 수 있다.

//리터럴 사용 가능
function hi(name) {
  console.log(`Hello, ${name}!`);
}
hi("heetae"); // Hello, heetae!

//화살표 함수
// function 키워드 대신 => 사용해 함수 구현, return 을 생략 가능!
const a = (a, b) => a + b;
console.log(a(1, 2)); // 3
