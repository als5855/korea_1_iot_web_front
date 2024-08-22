"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
exports.tmp = '';
// ! 타입스크립트의 객체 타입
// ? 1. 객체 타입 지정(명시)
// : {} 중괄호를 사용하여 표현
// >> 각 데이터별 타입 명시의 구분은 세미콜론(;) 사용을 권장
const username = '장지민';
const user = {
    name: '장지민',
    height: 160,
    // hobby: 'exercise' - Error 
    // 객체는 타입명시를 하지 않는 속성은 정의할 수 없다.
    favorite: ['여행', '운동', 1, false, undefined, null, ['안녕', 1]]
};
// ! 객체의 선택 속성
const jjm = {
    name: '장지민',
    height: 160 // >> 생략해도 오류 없다.
};
// ! 읽기 전용 속성
// : 속성명 "앞"에 readonly 키워드를 사용하여 해당 속성의 재할당을 금지
//  >>
const readonlyName = {
    name: '장지민',
    age: 29
};
// 객체의 속서값 수정
// 객체.속성 = 재할당값;
// readonlyName.name = '이지윤'// -Error: 읽기 전용 속성은 재할당 불가
// readonlyName.age = 30; //Error
readonlyName.address = '부산시 연제구';
console.log(readonlyName);
const person = {
    name: '장지민',
    age: 30,
};
const car = {
    model: 'sm6',
    yser: 2015
};
// car.model = '그랜저' // Error: readonly로 인해 값에 재할당이 불가능 하다.
