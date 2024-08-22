"use strict";
// ! ==== Intersection(인터섹션) 타입====
// : 여러 타입을 하나로 결합하여 모든 타입의 기능을 갖춘 안일 타입을 생성
// >> 여러 타입을 모두 만족하는 하나의 타입
// >> And 연산자 (A 그리고 B)
// >> & 기호를 사용하여 구현
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
let managerA = {
    name: '장지민',
    startData: new Date(),
    group: '개발부서' //추가된 부분
};
function creatAdminUser(user) {
    return Object.assign(Object.assign({}, user), { isAdmin: true });
}
let newAdminUser = {
    id: 'quel12',
    password: 'dlglrl333!!'
};
let adminUser1 = creatAdminUser(newAdminUser);
console.log(adminUser1);
//{ id: 'quel12', password: 'dlglrl333!!', isAdmin: true }
exports.tmp = '';
