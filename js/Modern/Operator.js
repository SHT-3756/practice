//연산자
let value = 1; // 변수 선언
value = 2; // 대입 연산자

//연산의 종류
// = : 대입연산자
//  +, -, *, / : 산술연산자

// 논리연산자
// ! : NOT, && : AND, || : OR ||
// NOT
const a = !true;
console.log(a); // false
const b = !false;
console.log(b); // true
// AND
const a = true && true;
console.log(a); // true
let b = false && false; // false
b = false && true; // false
// OR
let t = true || false; // true
t = false || true; //true
t = true || true; //true
t = false || false; //false

//연산 순서
// NOT, AND, OR 순이다.

//비교연산자
// === 는 두값이 일치하는지 확인 (true, false)
const a = 1;
const b = 1;
const equals = a === b;
console.log(equals); // true
// == 는 ===랑 비슷한데! 타입검사를 안한다는 것이다.
const a = 1;
const b = "1";
const equals = a == b;
console.log(equals); // true
const a = 0;
const b = false;
const equals = a == b;
console.log(equals); // false
const a = null;
const b = undefined;
const equals = a == b;
console.log(equals); // true

// 문자열 붙이기
const a = "안녕";
const b = "하십니까!";
console.log(a + b + equals); // 안녕하십니까!
