"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
exports.tmp = '';
let listValue = '문자열';
listValue = 110;
listValue = true;
//! 2. 함수 매개변수에 Union 타입 적용
// number와 string 타입 중 하나를 매개변수로 받아, 해당 값이 number일 경우 숫자를 2배로 증가시키고, string일 경우 그대로 반환하는 함수 doubleOrNothing을 작성
function doubleOrNothing(listValue) {
    if (typeof listValue == 'number') {
        return listValue * 2;
    }
    else {
        return listValue;
    }
}
console.log(doubleOrNothing(10));
console.log(doubleOrNothing('반가워'));
const jjm = {
    id: 112,
    username: '장지민'
};
const iiu = {
    id: 112,
    isAdmin: true
};
// - Person 타입의 객체를 매개변수로 받아 Admin인지 User인지를 구분해 출력하는 함수 identifyPerson을 작성
function identifyPerson(person) {
    if ('isAdmin' in person) {
        console.log('관리자 계정입니다.');
    }
    else {
        console.log('유저 계정입니다.');
    }
}
console.log(identifyPerson(iiu));
console.log(identifyPerson(jjm));
function createCar(vehicle, engine) {
    return Object.assign(Object.assign({}, vehicle), engine);
}
let v1 = {
    make: 'kia',
    model: 'k8'
};
let engine = {
    engineType: '하이브리드',
    horsepower: 200
};
// - createCar 함수를 구현하여, 주어진 Vehicle과 Engine 정보를 받아 Car 객체를 반환하도록 구현
console.log(createCar(v1, engine));
