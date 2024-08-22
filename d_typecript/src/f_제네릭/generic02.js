"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
exports.tmp = '';
// union 보다 generic이 보다 유연하다.
function reverseArray(array) {
    // 배열 메서드: reverse()
    // >> [1, 2, 3].reverse() === [3, 2, 1]
    let reverseArr = array.reverse();
    return reverseArr;
}
let stringArr = reverseArray(['1', '2', '3']);
console.log(stringArr); // ['3', '2', '1']
let booleanArr = reverseArray([true, false, false, false]);
console.log(booleanArr); //[false, false, false, true]
let KeyValue = {
    key: '장지민',
    value: 123
};
let anotherKeyValue, { key: , true: , value: , 200:  };
