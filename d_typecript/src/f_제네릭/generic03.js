"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
exports.tmp = '';
// T라는 타입 변수는 ILength 인터페이스를 포함하는 타입이어야 한다.
// : 타입 변수 extends(확장) 
function constraints(arg) {
    console.log(arg.length);
    return arg;
}
let data01 = constraints({
    length: 10,
    // length 속성을 반드시 포함하는 객체르르 인자로 전달~
    // >> 추가로 다른 속성 명시 가능(확장)
    value: 3,
    addedOption: '안녕하세요.'
});
console.log(data01);
function CheckType(value) {
    let rusult = typeof value === 'string' ? 'String' : 'Not a String';
    return rusult;
}
console.log(CheckType('안녕하세요.')); //string
console.log(CheckType(500)); // Not a string
