//if문
// if(조건) {
//     코드
// }
const a = 1;
if (true) {
  const a = 2;
  console.log("if문 안의 a 값은 " + a);
}
console.log("if문 밖의 a 값은 " + a);
// "if문의 안의 a 값은 2"
// "if문 밖의 a 값은 1"

//if else 문
const a = 5;
if (a > 10) {
  console.log("if 출력");
} else {
  console.log("else 출력");
}
("else 출력");

//if else if 문
// if(){
// }else if() {
// }else{
// }

//switch case 문
const device = "iphone";

switch (device) {
  case "iphone":
    console.log("아이폰!");
    break;
  case "galexy":
    console.log("아이패드!");
    break;
  default:
    console.log("몰라");
} //아이폰!
