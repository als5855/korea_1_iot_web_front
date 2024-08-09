// ! 비동기 프로그래밍 
// : 아닐 비, 같은 동, 시기 기 => 시간이 같지 않음
// : 특정 코드의 실행 완료를 기다리니 않고 다음 코드를 실행하는 프로그래밍 방식

// >> 프로그램으 실행 흐름을 차단하지 않고, '시간이 오래 소요'되는 작업처리에 사용
// EX) '네트워크 요청(서버와의 통신)', 파일 I/O 등에 주로 사용

// ? 비동기 프로그래밍 예시

// * == 동기 프로그래밍 //
function work() {
  const start = Date.now(); //현재 날짜, 시간을숫자 형태로 반환

  for(let i = 0; i < 999999999; i++) {
    ;  }
    const end = Date.now();
    console.log(end - start + 'ms');
  }

  work();// 792ms

  // work 함수 호출 시 for문 작업 중 다른 작업을 도시 처리 안함

console.log(object);

// * 비동기구현
console.log('===비동기 구현;===');

// function anotheWork() {
//   setTimeout(() => {
// const start = Date.now();
// for(){
//   const end =Da
// }
//   }
// };
// console.log('비동기 작업 시작');
// anotheWork();
//   console.log('비동기작업 완료 후 실행');

//   set

  // & another  함수 작업 완료 수 수행할 코드 설정
  // >> 함수를 파라미터 인자로 전달: 콜백함수

  function callbackWork() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 199999999; i++) {
        const end = Date.now();
        console.log(end - start + 'ms');
      }
    }, 0);
    callback();
  }

  function afterWork() {
    console.log('작업이 완료되었습니다!');
  }