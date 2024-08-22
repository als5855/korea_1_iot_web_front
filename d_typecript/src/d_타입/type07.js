"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
exports.tmp = '';
// ! 타입스트립트의 함수
// ? 함수의 선언과 호출
// : 매개변수와 봔환값에 타입 지정 가능
function greet(name) {
    return `Hello ${name}`;
}
const arrowFunc = (name) => {
    return `Hi ${name}`;
};
console.log(arrowFunc('장지민'));
console.log(arrowFunc('이지윤'));
// ? 선택적 매개변소와 기본매개변수
// 1) 
function select(name, greeting = '안녕') {
    if (name) {
        console.log(`${greeting}, ${name} `);
    }
    else {
        console.log(`${greeting}, guest`);
    }
}
select('장지민'); //안녕, 장지민
select('반가워'); //안녕, 반가워
// 선택저매개변수와 기본매개변수 사용 시
// : 선택적 매개변수는 반드시 필수 매개변수(인자로 전달) 뒤에 작성
// : 기본 매개변수는 필수와 선택적 매개변수 양쪽에 작성 가능 (어디든)
// : 기본 매개변수가 앞서는 경우 생략하려면 반드시 undefinded를 전달
select(undefined, '반가워');
select('이지윤', '반가워'); // 반가원 이지윤
// Rest 매개변수
function sum(a, b, ...c) {
    return c.reduce((c1, c2) => c1 + c2, 0); //c1 += c2
}
console.log(sum(1, 2, 4, 5, 6, 7, 78));
console.log(sum(1, 2, 3));
console.log(sum(10, 11, 23, 44));
