"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
exports.tmp = '';
let value = '문자';
value = 123;
value = true;
value = ['안녕', '반가워'];
//  >> 타입의 별칭이 
/*
type Person = {
id: string;
password?: number;
name?: number;
}
*/
let jjm = {
    id: '1234',
    password: 'wldlg'
};
let ljy = {
    id: '1234',
    password: 'wldlg'
};
function getAge(age) {
    //나이가 입력될 경우
    // - 숫자: 소수점 자리가 없도록 반올림 하여 문자열로 반환 (toFixed())
    // - 문자열: 그대로 반환
    // ? Union 타입의 경우 타입 가트를 지정하지 않을 경우
    // 지정된 모든 타이베 사용할 수 있는 메서드와 속성만 사용 가능
    // age.toFixed()
    // age.toUppercase()
    // >> 어떤 
    if (typeof age === 'number') {
        age = age.toFixed();
        return age;
    }
    else {
        age = age.toUpperCase();
        return age;
    }
}
console.log(getAge(12.345)); //12
console.log(getAge('12 years old')); // 12
