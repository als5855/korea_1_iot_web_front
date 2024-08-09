// 자바스크립트 함수

// 1.함수의 정의
// : 특정 작업을 수행하거나 값을 계산하는 데 사용되느 코드이 묶음(집합)

// 2.함수의 상ㅇ 요도 / 예제

//? 1) 코드 재사용 

// ex) 두 수의 합을 계산하는 자바스크립트 함수
//  : f(x) = y
function sum(a, b) {
  return a + b;
}

let result = sum(1,2);
console.log(result);
console.log(sum(1235,2345));

// 2) 모듈화 & 추상화
// :복잡한 작업을 수애하는 코드를 함수로 분리
// >> 각 함수가 수애하는 작업에 집중

// 모듈성
// : 로직(코드흐름) 단위로 작어을 나누어 관리할 수 있는 특성

// 3) 이벤트 처리 

// let button = document.querySelector('button');
// function message() {
//   console.log('버튼이 클릭되었습니다.');
// }

// button.addEventListener('click', message);