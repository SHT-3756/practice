//객체
/*객체는 변수 혹은 상수 사용할 때 하나의 이름으로 여러 종류를 넣을 수 있다.*/
const cat = {
  name: "냥냥이",
  age: 3,
};
console.log(cat.name); // 냥냥이
console.log(cat.age); // 3

//객체를 선언할 때 {} 안에 키와 값을 넣어주면 된다. ker : value
//만약 공백이 들어가야한다면?
const dog = {
  "name of dog": "멍멍이",
  age: 3,
};
console.log(dog); // Object {name of dog : "멍멍이", age: 3}
//함수에서 객체를 파라미터하기
const a = {
  name: "김씨",
  age: 10,
};
const b = {
  name: "박씨",
  age: 20,
};
function print(example) {
  const text = `${example.name}는 나이가 ${example.age}살이다.`;
  console.log(text);
}
print(a); // 김씨는 나이가 10살이다.
print(b); // 박씨는 나이가 20살이다.

//객체의 비구조화 할당
function printa(example) {
  const { name, age } = example; //객체 구조 분해
  const text = `${name}는 나이가 ${age}살이다.`;
  console.log(text);
}
printa(a); // 김씨는 나이가 10살이다.
printa(b); // 박씨는 나이가 20살이다.

//파라미터로 객체 비구조화 할당 가능하다.
// function printb({ name, age }) {}

// 객체안에 함수 넣기
const dog = {
  name: "멍멍이",
  sound: "멍멍!",
  say: function () {
    console.log(this.sound);
  },
};
dog.say(); // 멍멍!

//Getter , Setter 함수
// 객체를 만들고 나서 객체안의 값을 수정가능하다.
const number = {
  a: 1,
  b: 2,
};

number.a = 5;
console.log(number); // Object { a: 5, b: 2 }

const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum 함수 실행!");
    return this.a + this.b;
  },
};

console.log(numbers.sum); // sum 함수 실행! 3
numbers.b = 5;
console.log(numbers.sum); // sum 함수 실행! 6
