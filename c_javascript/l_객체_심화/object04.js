// ! 객체의 소것ㅇ 조내 여부 확인
// : 객체에 없는 속성에 접근 -undefinded 자료형


let object = {
  name: '장지민',
  age: 30,
  job: 'developer'
}

// # 1. 객체 내부에 해당 속성 여부 확인
if (object.name !== undefined) {
  console.log('name 속성 O');
} else {
  console.log('name 속성 X');
}
// name 속성 O 

// # 2. 조건문을 연산자로 간단하게 표시
// object.name
// object.hobby

// 1) 논리연산자(and, or, not)
// or 연산자
// >> 둘 중 하나라도 true면 true

console.log('=== or 연산자 ===');
object.name || console.log('name 속성이 없습니다.');
object.hobby || console.log('hobby 속성이 없습니다.');

!object.name || console.log('name 속성이 있습니다.');

console.log('=====and 연산자');

object.name && console.log('name 속성이 있습니다.');


// ! 기본 속성 지정
// : 삼합 연산자
//  객체의 소성값 재할당 & 송성 생성
// 

console.log('===삼합연산자==');
  object.name !== undefined ? object.name : '이름을 알수 없는 고객입니다.';

console.log(object);

object.height = object.height || '키를 알수 없음'
object.name = object.name || '이름을 알수 없음'
