//! 문제 1: prompt()함수 사용, 형 변환, typeof 연산자 사용

// 여러 개의 데이터 타입 출력
// 사용자로부터 이름과 나이를 입력받아 각각의 데이터 타입을 콘솔에 출력

// : 출력 결과
// 이름의 타입: string
// 나이의 타입: number

let username;
let age;
// let username = prompt('이름을 입력하세요: ');
// let age = Number(prompt('나이를 입력하세요: '));

// input창과 동일하게 prompt의 값의 문자열로 인식
// : 숫자에 대한 자료 활용을 위해 형변환이 필요
console.log('이름의 타입: ', typeof username);
console.log('나이의 타입: ', typeof age);

//! 문제 2: 형 변환, prompt()함수 사용, 템플릿 문자열
// 사용자로부터 받은 두 숫자의 합을 계산하여 출력하는 프로그램을 작성 
// >> 두 숫자를 저장하는 변수는 변하지 않는 값이므로 상수로 선언
// >> 두 숫자의 합은 템플릿 문자열 내에서 계산

// : 출력결과
// 8, 2 입력 시
// 두 수의 합은 10입니다.

// 데이터 타입: typeof 연산자를 통한 값은 소문자로 시작
// 형 변환: 대문자로 시작하는 타입명()

const NUM_1 = 0;
const NUM_2 = 0;
// const NUM_1 = Number(prompt('첫 번째 숫자를 입력해주세요.'));
// const NUM_2 = Number(prompt('두 번째 숫자를 입력해주세요.'));

console.log(`두 수의 합은 ${NUM_1 + NUM_2}`);

//% ===== 연산자 예제 ===== %//
//! 문제1
const PI = 3.14;
let radius = 10; // 원의 반지름
let area = PI * radius * radius; // 원의 넓이

// : 원의 넓잇값을 계산하여 출력
console.log(`원의 넓이: ${area}`);

//! 문제2
// 1 inch = 2.54 cm
// : 단위 변환기 프로그램
let inch = 10;
let cm = inch * 2.54;

// : inch값을 변수에 대입하면 cm값으로 변환하여 해당 값을 출력
console.log(`${inch}inch의 값은 ${cm}cm입니다.`);

//! 문제 3 - prompt창 활용 시 형 변환 주의!

// : 사용자로부터 숫자값을 입력받아 해당 숫자가 짝수인지 홀수인지를 결정하여 콘솔에 출력
//   짝수일 경우 "짝수" 출력
//   홀수일 경우 "홀수" 출력
// -결과-------------------------------------------------------//
let number;
number = Number(prompt('숫자를 입력하세요.'));
let message = number % 2 === 0 ? '짝수' : '홀수';
console.log(message);

//! 문제 4

// 변수 total이 0으로 시작
// : 아래의 연산 후 total의 값을 콘솔에 출력

// 1) 5를 추가하세요.
// 2) 결과값에 3을 곱하세요.
// 3) 결과값에서 2를 빼세요.

// -결과--------------------------------------------------------//
let total = 0;
total += 5; // 5
total *= 3; // 15
total -= 2; // 13

console.log('최종결과: ', total);

//% === 조건문 예제 === //
//! 윤년 계산기

let randomYear = 2024;
// 윤년의 조건
// - 연도가 4로 나누어 떨어지는 해는 윤년입니다.
// - 그 중에서 100으로 나누어 떨어지는 해는 윤년이 아닙니다.
// - 하지만 400으로 나누어 떨어지는 해는 다시 윤년이 됩니다.

// 윤년일 경우 : randomYear년은 윤년입니다.
// 윤년이 아닐 경우 : randomYear년은 윤년이 아닙니다.

let isLeapYear = (randomYear % 4 === 0 && randomYear % 100 !== 0) || (year % 400 === 0);

if (isLeapYear) {
  console.log(`${randomYear}년은 윤년입니다.`);
} else {
  console.log(`${randomYear}년은 윤년이 아닙니다.`);
}