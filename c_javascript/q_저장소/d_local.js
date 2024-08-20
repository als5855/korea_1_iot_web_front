// ! 로컬 스토리지
// : 웹브라우저가 제공하는 저장 고안
// >> 사용자의 컴퓨터에 영구적으로 데이터를 저장 가능

// HTML5 웹 스토리지 사양의 일부 도입으로 
// , 쿠키의 한계를 보완한 큰 저장용량과 보안을 제공
// ? 1. 로컬 스토리지 데이터 저장
// : 

localStorage.setItem('key', 'value');
localStorage.setItem('username', '장지민');
// cf) username, userName (name만)명사 userAge

// # 로컬 스토리지의 데이터 저장
// : 기본적으로 문자열 데이터만 저장
// >> 기본 자료형의 경우 저자 가능(문자열 인식)
localStorage.setItem('userAge', 50);
localStorage.setItem('isStudent', false);

//  cf) 로컬 스
// >> JSON.stringfy() 메서드 사용

let userInfo = {
  name: '장지민',
  age: 50
}

localStorage.setItem('userInfo', JSON.stringify(userInfo));

// ? 로컬스토리지 데이터 불러오기(읽어오기)
// localStorage.getItem(key)
// >> 해당 Key 

let keyValue = localStorage.getItem('key');
let usernameValue = localStorage.getItem('username');
let userAgeValue = localStorage.getItem('userAge');


if(keyValue || userAgeValue || usernameValue) {
  console.log(keyValue);
  console.log(userAgeValue);
  console.log(usernameValue);
}

// 2) 참조
let stroedData = localStorage.getItem('userInfo');
let userInfoValue = localStorage.getItem(stroedData);
console.log(userInfoValue);
// console.log(userInfoValue.name);
console.log(stroedData);


// # 로컬 스토리지에서 데이터를 가져오는 경우
// : 

// ? 로컬스토리지 데이터 삭제
// : localStorage.removeItem(key);
// : localStorage.clear()

localStorage.removeItem('userAge');
localStorage.removeItem('isStudent');

localStorage.clear();
