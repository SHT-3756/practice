//배열 내장 함수

//forEach 함수
const array = ["이름1", "이름2", "이름3"];
array.forEach((name) => {
  console.log(name);
});
/*
이름1
이름2
이름3 
*/

//map 함수
//push 함수를 사용해 배열을 수정할 수 있다.
const array1 = [1, 2, 3, 4, 5];
const newArray = [];

array1.forEach((n) => newArray.push(n * n));
console.log(newArray); // [1, 4, 9, 16, 25]

//위의 forEach 함수를 map 함수로 바꿀 수 있다.
const array1 = [1, 2, 3, 4, 5];
const newArray = array1.map((n) => n * n);
console.log(newArray); // 결과는 같다. [1, 4, 9, 16, 25]

//indexOf
// 이 함수는 원하는 항목이 배열에서 몇번째 원소인지 찾아주는 함수이다.
const dog = ["잡종", "시베리안", "푸들"];
const index = dog.indexOf("시베리안");
console.log(index); // 1

//findIndex
// 만약 배열에 숫자, 문자열, 불리언일때 몇번째 원소인지 알고 싶다면? 이함수를 사용하면 된다.
// 하지만 배열 안의 값이 객체이거나 배열이라면 indexOf로 찾을수 없다.
const todos = [
  { id: 1, text: "자바스크립트 배우기", done: true },
  { id: 2, text: "함수 공부", done: true },
  { id: 3, text: "내장 함수공부", done: false },
];
const index = todos.findIndex((todo) => todo.id === 3);
console.log(index); // 2

//find
// 이 함수는 findIndex 랑 비슷한데, 값이 몇번째인지가 아니라, 값 자체를 반환한다.
const todos = [
  { id: 1, text: "자바스크립트 배우기", done: true },
  { id: 2, text: "함수 공부", done: true },
  { id: 3, text: "내장 함수공부", done: false },
];
const todo = todos.find((todo) => todo.id === 3);
console.log(todo); // {id: 3, text: "내장 함수공부", done: false }

//filter
// 이 함수는 배열에서 특정 조건을 만족하는 값들만 따로 추출해 새로운 배열을 만든다.
// todos 배열에 done 값이 false 인 것만 추출해서 배열에 넣어보자!
const tasksNotDone = todos.filter((todo) => !todo.done);
console.log(tasksNotDone); // [{id: 3, text: "내장 함수공부", done: false}]

//splice
// 이 함수는 배열에서 특정 항목을 제거할 때 사용한다.
// 아래의 배열에서 3을 지울거다. 몇 번째 index 인지 알아내고 splice지울거다.
const numbers = [1, 2, 3, 4, 5];
const index = numbers.indexOf(3);
console.log(index); // 2 : 3은 인덱스 2번에 위치해있다.
numbers.splice(index, 1); // numbers.splice(2, 1) // 인덱스 2번부터 1번째만 지운다.
console.log(numbers); // [1, 2, 4, 5]

//slice
//이 함수는 splice와 비슷하다.
// 배열을 잘라낼때 사용하는데, 중요한 점은 기존 배열은 건들지 않는다는 점이다.
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); //인덱스 0부터 2 전까지

console.log(sliced); //[10, 20]
console.log(numbers); // [10, 20, 30, 40];

// shift 와 pop
// shift 와 pop은 비슷하지만 다르다.
// shift 는 첫번째 원소를 배열에서 추출해준다.(추출과정에서 배열에서 해당 원소는 사라진다.)
const numbers = [1, 2, 3, 4];
const value = numbers.shift();
console.log(value); // 1
console.log(numbers); // [2, 3, 4]
// pop 은 push 의 반대이다. push 는 배열의 맨 마지막에 추가하고 pop은 맨마지막 항목을 추출한다.
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value); // 40
console.log(numbers); // [10, 20, 30 ]

//unshift
// unshift 는 shift 의 반대이다 맨 앞의 원소를 추가한다.
const numbers = [1, 2, 3, 4];
numbers.unshift(5);
console.log(numbers); // [5, 1, 2, 3, 4]

//concat
// 이 함수는 여러개의 배열을 하나의 배열을 합쳐준다.
// arr1 과 arr2 는 변화를 주지않는다.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concat = arr1.concat(arr2);
console.log(concat); // [1, 2, 3, 4, 5 , 6]

//join
// 이 함수는 배열의 값들을 문자열 형태로 합쳐준다.
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(" ")); // 1 2 3 4 5
console.log(array.join(", ")); // 1, 2, 3, 4, 5

//reduce
// 이 함수는 아주 유용한 함수이다. 배열의 총합을 구해야하는 상황
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((n) => {
  sum += n;
});
console.log(sum); // 15
//위의 방법은 forEach를 통해서 반복해 sum에 담아주는 방식이다.
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15
//reduce(누적된값, 현재값, 초기값);
// 이렇게 수정 가능하다.
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  /*
  {accumulator: 0, current: 1} 
  {accumulator: 1, current: 2}
  {accumulator: 3, current: 3}
  {accumulator: 6, current: 4}
  {accumulator: 10, current: 5}
  */
  return accumulator + current;
}, 0);
console.log(sum); // 15
// 평균 계산 해보자
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    // 만약 인덱스 4라면? 실행해라
    return (accumulator + current) / array.length; // 15 / 5;
  }
  return accumulator + current;
}, 0);
console.log(sum); // 3
