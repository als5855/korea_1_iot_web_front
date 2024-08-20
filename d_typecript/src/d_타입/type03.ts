// ! 타입 별칭 (Type Alias)
export const tmp = '';

// : 새로운 타입 이름을 생성햐여 기존 타입을 참조할 수 있게 하는 기능
// >> 코드의 재사용성과 가독성 ㅎㅇ상

// ? 기본 사용 방법
// : type 키워드를 사용하여 저의
// >> type 타입별칭 = 타입;

// # 1. 변수 타입 별칭

type TextType = string;
// >> 타입 별칭은 다른 코드와의 식벼를 우해 대문자로 시작!

let text: TextType = '텍스트 문자열입니다.';

type NumberType= number;
let num: NumberType = 1923;

// >> 변수의 경우 별칭 사용을 거의 하지 않는다.

// # 2. 객체 타입 별칭
// : 타입 별칭 내에서 선택적 프로퍼티 & 읽기 전용 속성 사용 가능

type UserType = {
  name?: string;
  readonly height: number;
}

const user1:UserType = {
  name: '장지민',
  height: 160
}

// user1.height = 170; //Error

const user2:UserType = {
  //name: '장지민'
  height: 160
}

// # 3. 함수 타입 별칭
// : User xkdlqldls aoroqustnfmf qkxdk

type User ={
  id: string;
  password: string;
}

type VaildUser = (user: User) => boolean;



const isValidUser: VaildUser = (user) => user.id !== '';

let userA:User = {
  id: 'queibn33',
  password: 'ddddeee11'
}

let userB: User = {
  id: '',
  password: 'ddddddgggg1212'
}

console.log(isValidUser(userA)); //true
console.log(isValidUser(userB)); //false


// type FucType = (num: number) => number;

// const exampleFunc: FucType = (num) => {
//   num *= 2; // num = num * 2;
//   return num;
// }


// function exampleFunc2 = (num: number): number[] => {
//   num *= 2; //num = num *2;
//   return [num, num];
// } 



// === 타입 별칭 사용 ===


//! 문제 2: 타입 별칭 사용
// ProductType이라는 타입 별칭을 생성
// 객체, id (문자열 타입), name (문자열 타입), price (숫자 타입) 속성 포함
type ProductType = {
  id: string;
  name: string;
  price: number;
}

// ProductType 타입을 사용하여 product라는 이름의 변수를 선언하고, 적절한 값을 할당
const product: ProductType = {
  id: 'wkdwlals',
  name: '풍선',
  price: 300
}

// product 객체의 내용을 콘솔에 출력
console.log(product);