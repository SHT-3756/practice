// 변수와 상수

// 변수는 바뀔수 있는 값을 말한다. 한번 선언하고 바꿀수 있다.
let value = 1;
console.log(value); //1
let value = 2;
console.log(value); //2

//똑같은 이름으로 선언 불가능
let a = 1;
let a = 2; //에러발생

//상수는 한번 선언하고 값이 바뀌지 않음.
const a = 1;
a = 2; // Error: "a" is read-only
//같은 이름으로 선언 불가
const a = 2;
const a = 2;

//var, 더이상 사용하지 않는 var
var a = 1;
//var 는 이제 몰라도 된다.

// 데이터 타입
// 숫자
let value = 1;
// 문자열
let text = "hello";
let name = "자바스크립트";
// 참/거짓
let good = true;
let loading = false;
// null, undefined
const me = null;
//undefined 는 아직 값을 설정 하지 않은것이다.
let you;
console.log(you); // undefined
