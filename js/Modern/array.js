//배열
// 이전의 객체는 하나의 변수 혹은 상수에 여러가지 정보를 담는다면, 배열은 여러개의 항목을 담는 리스트이다.
//숫자배열
const array = [1, 2, 3, 4, 5];

const objects = [{ name: "이름1" }, { name: "이름2" }];
//배열 n 번째
console.log(objects); // [{name: '이름1'}, {name: '이름2'}]
console.log(objects[0]); // {name: '이름1'}
console.log(objects[1]); // {name: '이름2'}

//배열에 새항목 추가
const objects = [{ name: "이름1" }, { name: "이름2" }];
objects.push({ name: "이름3" });
console.log(objects); // [{name: '이름1'},{name: '이름2'},{name: '이름3'}]
//배열의 크기
console.log(objects.length); //3
