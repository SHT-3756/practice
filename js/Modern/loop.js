//반복문
//특정 작업을 반복하는 구문

//for : 가장 기본적인 반복문
for (let i = 0; i < 10; i++) {
  console.log(i);
} //0,1,2,3,4,5,6,7,8,9

// 배열의 for
const names = ["멍멍이", "냥냥이"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]); // 멍멍이 냥냥이
}

// while문 조건이 참이라면 계속 반복한다.
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
//for...of 문은 배열에 관한 반복문이다. 잘사용하지는 않는다.
let numbers = [1, 2, 3, 4, 5];
for (number of numbers) {
  console.log(number);
  /*
    1
    2
    3
    4
    5
     */
}

//for...in : 객체를 위한 반복문, 객체를 배열 형태로받아오는 함수
const dog = {
  name: "냥냥이",
  sound: "냥",
  age: 3,
};

console.log(Object.entries(dog)); // [Array(2), Array(2), Array(2)]
console.log(Object.keys(dog)); // ["name", "sound", "age"]
console.log(Object.values(dog)); // ["냥냥이", "냥, 3"]
/*
Object.entried : [[키, 값],[키,값]] 형태의 배열로 변환 
Object.keys : [키, 키, 키] 형태의 배열로 변환
Object.values : [값, 값, 값] 형태의 배열로 변환
*/

//break continue
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 다음 루프를 실행
  console.log(i);
  if (i === 5) break; // 반복문 끝
}
