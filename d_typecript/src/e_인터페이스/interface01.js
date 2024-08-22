"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
exports.tmp = '';
let userA = {
    age: 50,
    greet: () => {
        console.log('반환값이 없는 함수');
    }
};
userA.greet();
// ? 클래스에서 인터페이스 구현
// : implements: 키워드를 사용하여 해당 타입을 가지는 클래스를 정의
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const sudent1 = new Student('장지민', 30);
const sudent2 = new Student('김지인', 50);
sudent1.greet();
sudent2.greet();
let swuare1 = {
    sideLength: 10,
    color: 'red'
};
