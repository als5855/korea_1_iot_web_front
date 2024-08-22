"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
// ! 타입 별칭 (Type Alias)
exports.tmp = '';
// >> 타입 별칭은 다른 코드와의 식벼를 우해 대문자로 시작!
let text = '텍스트 문자열입니다.';
let num = 1923;
const user1 = {
    name: '장지민',
    height: 160
};
// user1.height = 170; //Error
const user2 = {
    //name: '장지민'
    height: 160
};
const isValidUser = (user) => user.id !== '';
let userA = {
    id: 'queibn33',
    password: 'ddddeee11'
};
let userB = {
    id: '',
    password: 'ddddddgggg1212'
};
console.log(isValidUser(userA)); //true
console.log(isValidUser(userB)); //false
// ProductType 타입을 사용하여 product라는 이름의 변수를 선언하고, 적절한 값을 할당
const product = {
    id: 'wkdwlals',
    name: '풍선',
    price: 300
};
// product 객체의 내용을 콘솔에 출력
console.log(product);
