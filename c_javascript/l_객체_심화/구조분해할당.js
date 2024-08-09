// ! 구조 분해 할당(다중 할당)
// : 배열과 객체의 값을 한 번에 여러 개의 변수에 해당

// ? 다중 할당의 형태
// 식별자: 변수를 나열한 형태
// [식별자, 식별자, 식별자, ...] = 배열;

let array = [1, 2, 3];
let [a, b] = array;

// let a = array[0]
// let b = array[1]



console.log(a);
console.log(b);

// >> 배열의 크기는 같을 필요가 없고 초과하는 것은 생략된다.

const arrayA = [1, 2, 3, 4, 5];
const [aa, bb, cc] = arrayA;

// const aa = 1;
// const bb = 2;
// const cc = 3;

console.log(aa, bb, cc);

const bookObject = {
  name: 'JS공부하기',
  price: 25000,
  publisher: '코리아'
}

// const {  price, name, publisher } = bookObject; : 각각 연결된 속성명으로 값이 자동 전달 객체 배열의 순서가 상관없다.
const { name, price, publisher, author } = bookObject;
console.log(name, price, publisher, author); // JS공부하기 25000 코리아

// 새로운 이름에 저장
const { aaa=name, bbb= price} = bookObject;
console.log(aaa, bbb);
