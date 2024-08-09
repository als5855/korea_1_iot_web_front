//! f_loop.js

// JS의 제어문
// : 조건문, 반복문
//  ! 반복문(loop)
// : 동일한 코드 블록을 여러번 실행할 수 있도록 하는 제어문

// # 반복문의 종류
// :for반복문, while반복문, do-while반복문 ()
//  +) 배열(Array)
// : 여러 개으 ㅣ변수를 한번에 선어하여 다룰 수 있는 자료형 (참조자료형)

// - 순차적으로 저장 (데이터에 순서가 존재) 
// - 기본은로 부여되는 순서는 Index(인덱스, 시작이 0 붜 1씩 증가하는 수)
// - 배열 내부의 데이터를 요소라고 부름

// 배열 선언 방법
//  '변수' | '상수' 키워드 = [요소1, 요소2, 요소3,.....]
// : 변수명 지정
let fruits = ['apple', 'banana', 'cherry'];
let numbers = [1, 2, 3, 4, 5];
let boolean = [true, false];

let js = ['자바스크립트', 123, true, null, undefined, [1, 2, 3]];

// ? 배열의 요소에 접근
// 배열명[인덱스번호]
console.log(js[2]);

// ? 배열의 기링를 확인 
// length 속성을 사용하여 배열의 길이를 확인
//  배열명.lenth
console.log(js.length); //6

// 마지막 요소의 인덱스 번호 + 1 === 배열의 길이


// # 1. for 반복문
// : 코드를 '정해진 횟수' 만큼 반복 실행할 때 사용

// *for 반복문의 구조(기본 형태)
/*
for(초기화식; 종료조건; 증감식) {
  표현식의 결과가 참인 동안데 실행할 코드
}

? 초기화식
: 반복문이 식작될 때 단 한번만 실행

? 종료조건
: 각 반복 사이클의 시작에서 평가되는 표현식
>> true면 중괄호 코드 실행, false명 반복문 종료

? 증감식
: 각 반복 사이클이 끝날 때 (반복문이 전체 바녹을 거쳤을 때) 마다 실행
>> 초기하식의 변수를 증가 또는 감소시킵
*/
console.log('===for 반복문===');
// 0부터 4까지 숫자(정수)를 콘솔창에 출력
for(let i = 0; i < 5; i++) {
  console.log(i);
}



// for(let i = 1; i<6; i++) {
//   let stars = '*'
//   console.log(' ');
//   //별의개수에 대한 반복 5까지
//   for(let j = 0; j < i; j++){
//     stars += '*';
//   }
//   console.log(starts);
// }


// console.log('===별찍기2===');

// for(let i = 5; i > 0; i--) { // 별에 ㄷㅐ한 반복 54321
//   // 첫 번째 해 (i가 5) >> 0, 1, 2, 3, 4, 5
//   // 두번 째 해 
//   let starts = '';
//   for(let j = 0; j < i; j++)  {
//     starts += "*";
//   }
//   console.log(starts);
// }


// let starts

// for(let i = 5; i > 0 ; i--) {
//   for(let j = 0; j < i; j++) {
//     starts += '*'
//   }
//   console.log(starts);
// }


//행의 대한 반복
for(let i = 1; i<=5; i++) {
  // 왼쪽에 공백
  let spaces = '';
  let starts= ' ';

  for(let j = 1; j <= 5 -i ; j++){//공백: 4, 3, 2, 1, 0 
    spaces += ' ';
  }

  for(let k = 1; k <= i; k++) {
    starts += '*';
  }

  console.log(spaces + starts);
}
