"use strict";
//! 유니언 타입과 제네릭
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
exports.tmp = '';
// 유니온 타입(OR, |) 
// : 여러 타입 중 하나가 될 수 있는 값을 의미
// ? 유니온 타입을 제네릭의 타입 변수에 적용
//  extends 키워드를 사용 (확장)
// 
function unionGeneric(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    return value; //숫자 데이터
}
const result1 = unionGeneric('sTrinG');
const result2 = unionGeneric(1000);
console.log(result1, result2);
const user01 = {
    1: {
        name: '장지민',
        age: 30
    },
    2: {
        name: '이지윤',
        age: 29
    }
};
function updateUSER(id, changes) {
    const user = user[id];
    if (!user) {
        console.log(`해당 id의 상용자는 없다.`);
    }
    user[id] = Object.assign(Object.assign({}, user), changes);
    // {name: 이지우},
}
updateUSER(1, { name: '장지민' });
updateUSER(2, { name: '이지윤', age: 30 });
updateUSER(3, { name: '쵷성' });
let user = {
    name: '장지민',
    age: 50
};
const newEmployee = {
    name: '이지윤',
    age: 28,
    position: '개발자'
};
const totalData = {
    id: 3,
    name: '이미진',
    age: 20,
    position: '총무'
};
