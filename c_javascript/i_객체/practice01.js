// practice01.js

//! 객체, 배열, 함수 복습 문제

//? 문제 1
// 1. 객체 생성
// : person 객체 생성 - name (문자열), age (숫자), isStudent (불리언) 속성을 추가


// cf) nffldjs xkdlqdml qutnaud wlwjd
// : true(참), false(거짓) -2가지의 값만을 가짐
// >> is, has와 같이 동사와 명사를 결합한 변수명을 주로 사용

// is: 명사 >> isStudent? : 학생이니?
// has: 동사 >> hasEatLunch? : 점심먹었니?

// function person(name, age, isStudent) {
//   this.name = name;
//   this.age = name;
//   this.isStudent = isStudent;
// }

let person = {
  name: '장지민',
  age: 29,
  isStudent: false
}

// 객체의 속성값에 접근
// 객체명.속성키
// 객체명[속성키]

console.log(person.age); // 50

// const person1 = new person('장지민', 29, true);
// console.log(person1);

// 2. 배열 사용
// : fruits 배열을 생성하고, 여러 가지 과일 이름을 문자열로 추가(3가지)
// : 두 번째 과일을 콘솔에 출력

let fruits = ['apple', 'banana', 'orange'];

console.log(fruits[1]);//banana

// 3. 함수 정의
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수 add를 작성
// >> 매개변수 0, 반환값 0

function add(value1,value2) {
  return value1 + value2 ;
}

console.log(add(10, 33)); //43

//? 문제 2
console.log('========');
// 1. 객체 탐색
// : 초급에서 작성한 person 객체의 모든 속성과 값을 순회하며 콘솔에 출력하는 코드를 작성
// >> for in 반복문 사용

let array = [1, 2, 3, 4, 5];

for (let num in array) {
  console.log(array[num]);
}

// // 객체
// for (let key in object) {
//   console.log(`${key}: ${object}`);
// }

// // cf) for in 반복문 사용시
// // : 객체의 값 접근의 경우 '대괄호 표기법을 사용'
// for(let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

for (let key in person) {
  // for 반복에서 객체에 접근을 하기 위해 [] 대괄호 연산자를 사용
  console.log(`${key}: ${person[key]}`);
}


//& 2. 배열 메서드 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력

// cf) 배열 메서드 & 콜백함수 (함수에 인자로 전달하는 함수)
// - forEach: 반환 X /전체 요소에 동일한 기능을 적용 
// - map: 새로운 배열을 반환/ 전체 요소에 동일한 기능을 적용
//  - filter: 새로운 배열을 반환 / 해당 조건식을 참으로 통과하는 요소만 새로운 배열로 반한

const fruitsUpper = fruits.map(fruit => fruit.toUpperCase());
console.log(fruitsUpper);

let UpperCaseFruits = fruits.map(function(value, index, array) {
  return value.toUpperCase;
})

fruits.map(value => {
  return value.toUpperCase();
})

// 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성

// [1, 2, 3]
// [4, 5, 6]
// >> [5, 7, 9]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function combineArrays(arr1, arr2) {
  let result = arr1.map((element, index) => {
    return element + arr2[index]// 동일한 인덱스 번호를 가진 요소끼리 더해져서 반환
  });
  return result;
}

console.log(combineArrays(arr1, arr2)); //실제 데이터가 담긴 배열 변수 - [5, 7, 9]

//? 문제 3
// 1. 객체 깊은 복사
// : person 객체를 깊은 복사하는 함수를 작성
// +) 객체의 깊은 복사는 JSON 자료형을 사용
// >> JSON.stringy(객체데이터)
// >> JSON.parse(JSON데이터)

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let personCopy = deepCopy(person);

person.name = '이지윤';
console.log(personCopy);
console.log(person);


// 2. 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링하고, 필터링된 사용자의 이름을 새 배열로 만들어 반환하는 함수를 작성
// : 메서드 체이닝 사용

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 18 }
];

// const users = [
//   { name: "John", age: 25 },
//   { name: "Doe", age: 18 }
// ];

// const users = ['John', 'Doe']

function adultUserNames(users) {
  return users.filter(user => user.age >= 18).map(user => user.name);
}

console.log(adultUserNames(users));



