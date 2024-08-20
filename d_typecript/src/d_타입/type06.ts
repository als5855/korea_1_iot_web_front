export const tmp = '';

// ! 리터럴 타입(Literal, 문자 그대로의)
// : 특정 '값'만을 가질 수 있는 타입을 정의 할 때 사용
// >> 특정 '값'으로 제한

// ? 리터럴 타입의 종류
//  - 해당 값만을 가지는 상수
//  - 해당 값을 타입으로 지정한 변수
// >> 다른 값을 할당하려고 하면 타입 에러가 발생

// 1) const 키워드를 사용하여 직접 리터럴 값을 할당(초기화)
let str1 = '안녕하세요.';

str1 = 'hello';
str1 = '곤니찌와'

const str2 = '반갑습니다.';
// str2 = 'hi';
// str2 = '니하오';

// ? 2) 
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

