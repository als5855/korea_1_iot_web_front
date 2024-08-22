export const tmp = '';

// ! 리터럴 타입(Literal, 문자 그대로의)
// : 특정 '값'만을 가질 수 있는 타입을 정의 할 때 사용
// >> 특정 '값'으로 제한

// ? 리터럴 타입의 종류
//  - 해당 값만을 가지는 상수
//  - 해당 값을 타입으로 지정한 변수
// >> 다른 값을 할당하려고 하면 타입 에러가 발생

// 1) const 키워드를 사용하여 직접 리터럴 값을 할당(초기화)
let str1 = '안녕하세요.';// string 타입
str1 = 'hello';
str1 = '곤니찌와'

const str2 = '반갑습니다.'; // "반갑습니다." 타입
// str2 = 'hi';
// str2 = '니하오';

// >> 해당 값을 자동으로 리터럴 값으로 유추

//? 2) 변수에 타입 명시를 리터럴 값으로 명시
let num1:123 = 123; //타입 123
// num1 = 456;
// num1 = 789;


let bool: true = true; //true 타입
// bool = false;


// ! 리터럴 타입의 활용
// : 주로 type 티웓(타입별칭)와 함께 사용
// >> 유니언 타입과 함께 사용하여 다야한값을 표현함과 동시에 재한 가능

// ? 리터럴 타입 예시
// Directions(방향) 타입 정의
type Directions = 'up' | 'down' | 'left' | 'right';

let moveUp: Directions;
moveUp = 'up';
// moveUp = '위'; -Error 정해진 타입 외의 범위

// 2) 함수의 인자로 리터럴 타입 지정
function setAlignment(align: 'left' | 'center' | 'right') {
  // 함수 내용
  // document.querySelector('#container');
  // contianer.style,textAlign = align;
}

setAlignment('center');
// setAlignment('중앙'); 해당 값은 지정되 타입에 없는 타입이다.

//  3) IoT
type Students = '장지민' | '이지윤' | '이미진' | '안소영';

let students: Students;
// students = '김안영'; -Error

type mixedType = 'yes' | 'no' | 1 | 2 | 3;

let gameState: mixedType;
gameState = 'yes';
gameState = 3;
gameState = 2;
gameState = 1;

// ! 객체 리터럴 타입 
// : 실제 객체 데이터 정의

type UserType = {
  name: '장지민';
  height: 160;
}

let user: UserType = {
  name: '장지민',
  height: 160
}

// user.name = '이지윤';

// !객체의 구조적 타이핑()

type Person ={
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// Person 타입이 명시적으로 구현되지 않은 객체 생성
const p1 = {
  name: '이지윤',
  age: 30
}

const p2 = {
  name: '김은혜',
  age: 40,
  bobby: '배구보기'
}

const p3 = {
  name: '강지영'
}

greet(p1); // Person과 구조가 일치하기 때문에 Person 취급
greet(p2); // 구조적 타이핑에 의해 Person 취급 (hobby속성을 무시)
// greet(p3); // Person 타입 속성 구조가 일치하지 않음

type Address = {
  street: string;
  readonly city: string;
  zipCod?: string; //선택적 프로퍼티 (옵셔널)
}

type UserProfile = {
  username: string;
  email: string;
  address: Address;
}

let userA: UserProfile = {
  username: '장지민',
  email: 'wlaet5855',
  address: {
    street: '123.5 ST',
    city: '부산'
  }

  
}
// userA.address.city = '대전';
// userA.address.street = '중아대로';

type UserDataType = {
  name: string; // - 일반적인 객체 속성 타입 명시

  // ? 인텍스 서명 사용 방법
  // 
  [key: string] : string | number | boolean; // 키는 string 사용을 권장
  // >> 
}

let user1: UserDataType = {
  name: '장지민',
  height: '123',
  age: 50,
  isTeacher: true
}

// user1.email = [123, 234];
user1.email = 'wlsllt';


console.log(user1);

