export const tmp = '';

// ! 제네릭의 제약 조건

// ? 제약 조건(constraints) 
// : 타입 매개변수가 특정 조건을만족해야한다는 것을 명시하는 방법
//  >> 제네릭 탕ㅂ의 사용 범위를 제한

// ? 제약 조건의 예시
interface ILength {
  length: number;
}

// T라는 타입 변수는 ILength 인터페이스를 포함하는 타입이어야 한다.
// : 타입 변수 extends(확장) 
function constraints<T extends ILength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

let data01 = constraints({
  length: 10,
  // length 속성을 반드시 포함하는 객체르르 인자로 전달~
  // >> 추가로 다른 속성 명시 가능(확장)
  value: 3,
  addedOption: '안녕하세요.'
})

console.log(data01);

// +) 최소한의 속성을 가진 객체 찾기
//  keyof

type Type = {
  name: string;
  age: number;
}

type Union = keyof Type;
// Union = name | age;

// ? 조건부 타입
// : 타입 매개변수에 대한 조건 표현식을 사용하여 타입을 결정하는 방식
// > if문과 유사한 기능

type Check<T> = T extends string ? 'String' : 'Not a String';

type Type1 = Check<string>;//
type Type2 = Check<string>;//

function CheckType<T>(value: T): Check<T> {
  let rusult = typeof value === 'string' ? ('String' as Check<T>): ('Not a String' as Check<T>) ;
  return rusult;
}

console.log(CheckType('안녕하세요.')); //string
console.log(CheckType(500)); // Not a string