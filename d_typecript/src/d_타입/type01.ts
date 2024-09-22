export const tmp = '';

// ? 타입 명시 방법
// : 타입 어노테이션 (type annotation)

// ? 타이스크립트 타입 종류
// # 1.기본 타입(원시 타입 - string, number, boolean 등 )
// : 변수명 뒤에 콭론 사용
// : typeOf 연산자 사용시 나타내는 변환값과

  let name: string = '장지민';
  // 권자) let 변수명: 타입명 = 값;
  let age: number = 29;
  let isStudent: boolean = true;

  let anyData = '문자열' ; // 타입 명시 생략 가능 >> 타입 체킹을 생략 X

// name = 123; - Error (타입 체킹)
//anyData = 123; //- 타입을 명시하지 않아도 토기 할당하는 데이터로 타입 지정

//# 2. 배열 (list, array) 타입
// : 순서가 있는 요소의 모음을 나타내는 자료 구조

//  - 변수명 뒤에 콜론 사용
// : 기본타입명 뒤에 배열을 나타내는 []를 첨부
let list1:string[] = ['1', '2', '3'];


// - 제너릭 타입
// : Array<기본타입>
let list2: Array<number> = [4, 5, 6];

// # 3. void 타입
// :  아무런 값이 없다는 의미
// >> 주로 함수에서 반환 값이 없거나 return 키워드가 있더라도 반환 하는 값이 없을 때 사용되는 타입
function voidType(parameter:number): void {
  // 함수의 타입 정의
  // >> 파라미터(매개변수)와 반환값(retrun값) 정의 가능
  // >> TS에서 "파라미터"에 타입을 명시하지 않으면 오류 발생
  // : 함수 내에서 사용할 변수에 대한 안정성 요구
  // : 변수의 타입 명시와 동일

  // >> 반환값의 타입 명시는 파라미터를 정의하는 ()소괄호 뒤에 콜론을 붙여 정의
  console.log(parameter);
  return;
}

console.log('voidType 선언');
voidType(10);

function stringReturn(): string {
  return '안녕하세요.'
}

console.log(stringReturn());

//# 4. null & undefinded 타입

// null 타입 
// : 아무것도 없음, 데이터가 잘못된 경우

// undefined 타입
// : 변수 생성은 했지만 

let nullType: null;
// nullType = 3;
// nullType = '안녕하세요';

let undefindedType: undefined;
// undefindedType = 4;
// undefindedType = '노란';

//# 5. any 타입(모든)
// : 모든 타입에 대해 허용하는 타입
// >> 타입 검사 오류가 발생하는 것을 방지 (모든 타입과 호환 가능)
// >> ts를 js처럼 사용

// >> 사전에 오류 타입을 계산할 수 없다.

let anyType: any = 3;
anyType = '문자열';
anyType = false;
anyType = {};
anyType = [];

let unknownData; // let unknownData: any
// >> 타입을 직접적으로 명시하지 않을 경우 값이 할당되기 전까지 자동으로 any탑입으로 인식

// # 6. never 타입
// : 절대 발생하지 않는 값의 타입
// >> 함수가 예외를 발생시키거나 끝나지 않을 때 사용

  function error(message: string) {
    throw new Error(message);
  }

  error('에러 발생!!')


//? 문제 1: 기본 타입 정의하기
// username은 문자열, userAge는 숫자, isSubscribed는 불리언 값으로 타입을 정의
let username: string = '장지민';
let userAge: number = 29;
let isSubscribed: boolean = false;
//? 문제 2: 배열 타입 정의하기
// 문자열 배열 fruits와 숫자 배열 numbers를 정의

//? 문제 3: void 타입을 사용하는 함수 정의하기
// 아무런 값을 반환하지 않고, 매개변수로 받은 메시지를 콘솔에 출력하는 함수 printMessage를 정의