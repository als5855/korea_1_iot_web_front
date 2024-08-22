export const tmp = '';

// ! 비동기 처리 프로그래밍

// # 1. 정의
// : 앞선 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 실행하는 것
// : 프로그램의 메인 흐름과 병렬적으로 작업 할 수 있는 프로그래밍 방식
// >> 작업이 완료되면 결과를 받음

// # 2. 특징
// - 응답성 향상
// : 사용자 응답이 블로키이되지(막히지)않고, 긴 작업은 백그라운드에서 수행

// # 3. 장단점
// 장점: 병렬처리와 효율성 응답성 향상
// 단점: 복잡성 증가, 디버깅 어려움


// * 콜백함수
// >> setTimeout()
function syncFunc01() {
  setTimeout(() => {
    let sum = 0;

    for (let i = 0; i < 99999999; i++) {
      sum += i; //sum = sum + i 
    }
    console.log(`시간이 오래 걸리는 계산식 결과: ${sum}`);;
  }, 10); //비동기 처리를 위한 setTimeout 사용
  
}
function syncFunc02() {
  setTimeout(() => {
    let sum = 0;
  
    for (let i = 0; i < 100; i++) {
      sum += i; // sum = sum + i 
    }
    console.log(`두번째 작업 (첫 번째 작업을 기다리지 않음): ${sum}`);
  }, 0)
}

function example() {
  console.log(`첫 번째 작업 시작`);
  syncFunc01();
  
  console.log(`두 번째 작업 시작`);
  console.log('메인 프로세스 (비동기 처리)');
  syncFunc02();
}

example();