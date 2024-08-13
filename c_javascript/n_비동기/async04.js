// ! 자바스크립트 비동기 프로그래밍 - async(비동기적인) / await(기다리다)

// ? async 함수 구조
// : 함수 자체를 비동기 함수로 정의하는 키워드
// : async function 함수명() {}
// >> 항상 Promise 객체 반환

// - async 함수 내부에서 await 키워드를 사용
// >> Promise의 결과를 기다림

async function fetchData() {
  // 비동기 작업을 수행
}

// # async await 비동기 예시
// : 사용자의 정보를 가져오는 함수

// async function fetchData() {
//   // fetch('url')함수
//   // : 해당 url을 통하여 서버와 통신을 하는 메서드
//   // >> Reponse 객체를 반한

//   let data = await fetch('https://api.example.come/data'); // 시간이 걸리는 작업
//   let jsonData = await data.json();
//   console.log(jsonData);
// }

// : await 키워드는 async 내부에서만 사용 가능
// >> Promise가 완료될 때까지 기다림


// # 비동기 작업가 예외 처리
// : 예외 처리 코드와 함께 사용 "권장"
async function fetchCustomerData() {
  try{
    // ? 실제 로직이 구현되는 블록
    let data = await fetch('url');

    if(!data.ok) {
      throw new Error('네트워크 응답이 실패했습니다.');
      // 에러 발생 후에는 해당 함수 실행이 종료
    }
  
    // .json(메서드)
    // .json 형식으로파싱
    // >> 
    let jsonData = await data.json();
    console.log(jsonData);

  } catch (error) { // try블록에서 에러 발생 시 해당 에러르 매개변술 받아 처리
    console.error(error.message);
  }
  // 
}

fetchCustomerData();