// >> asynchronous: 비동기적인

// ! 비동기 프로그래밍
// : 다른 함수에 인자로 전달되어, 해당 함수에 의해 어느 시점에 호출되는 함수

// ? 콜백함수
function greet(name) {
  console.log(`Hello, ${name}`);
}

// 사용자 입력처리하는 함수
function getUserInput(callback) {
  let name = prompt('이름을 입력해주세요.');
  callback(name);
}

getUserInput(greet);

// # 콜백 함수를 사용하는 비동기 요청 예시
// : 서버와의 통시

// cf) fetch (가져오다)
// : 데이터르 가져오다.

function fetchUserData(userId, callback) {
  // 시간에 대한 소요: setTimeout() 함수를 사용 구현
  setTimeout(() => {
    // 서버로 부터 가져온 데이터 (가정)
    const userData = {
      id: userId,
      name: '장지민',
      email: 'wlals5855'
    };
    // 사용자의 데이터를 받아온 후에 작업할 콜백함수
    callback(userData);
  }, 3000);
}

//  사용자 데이터처리 함수 (콜백함수) 
function handleUserData(user) {
  console.log(`User Data: ${user.name}`);

  // 콜백함수 내에서 함수 실행 후 동작 시킬 코드
  // : 중첩된 콜백함수
  callback();
}

// fetchUserData 함수 호출
fetchUserData(1, handleUserData);
console.log('비동기적인 출력');

// # 콜백 함수의 중첩: 콜백 지옥(callback hell)
// >> Promise 기반의 비동기 처리 프로그래밍을 통한 방지

function a() {
  console.log('a');

  function b() {
    console.log('b');

    function c() {
      console.log('c');
    }
  }
}