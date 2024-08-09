//  # 4. Math 내장 객체
// : 수학과 관련된 기본 연산의 객체

// 속성: PI
console.log(Math.PI); // 3.141592653589793

//메서드
// 1) Math.random()
// : 0이상 1미만의 난수 생성
console.log(Math.random());
console.log(Math.random() * 10);

// 2) Math.floor()
// : 숫자를 가장 가까운 정수로 내림
console.log(Math.floor(Math.random() * 10));//0 부터 9까지의 정수

//3) Math.sqrt() // square 
console.log(Math.sqrt(14));
console.log(Math.sqrt(121));

// # 5. Date() 객체
// : 자바스크립트에서 날짜와 시간을 관리하기 위해 사용되는 내장 객체

// 현재 날짜와 시간을 반환
let now = new Date();
console.log(now); // 2024-08-08T02:36:02.756Z

// getMonth(): 현재 '월'
// >> 1월이 0부터 시작
console.log(now.getMonth()); // 7 >> + 1 필요
console.log(now.getMonth() + 1 + '월'); // 8 월

// getDate(): 현재 '일'
console.log(now.getDate() + '일'); // 8일

// getDay(): 현재 '요일'
// >> 일요일 0으로 시작 ~ 토요일 6일 표기
console.log(now.getDay()); //4

// getFullYear: 현재 '년'
console.log(now.getFullYear());

// getHours(): 0 ~ 23
// getMinutes(): 0 ~59
// getSound(): 0 ~ 59

console.log('==시간==');
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// 현재 날짜 표기법 & 시간 표기법
console.log('===========');
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());