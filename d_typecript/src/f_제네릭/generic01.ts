// ! ㅈ네릭 (Generic, 일반적인)
export const tmp = '';

// # 1. 제네릭 정의
// : 재사용 가능한 컴포넌트(코드단위)를 만드는데 사용
// : >> 해당 컴포텉드가 처리할 데이터타입을 미리 지정하니 안고
// , 해당 컴포넌트를 사용하는 시점에서 원하는 데이터 타입 지정

// # 2. 제네릭 필요성
// - 코드의 중복을 줄임
// - 재사용 가능한 컴포넌트를 생성
// - 타입 안정성 보장
//   >> 컴파일 시점에서 타입을 체크 ('런타임' 환경에서 발생할 수 있는 에러를 방지) 

// ? 컴파일 타임
// : 소슷코드를 ㅏㄱ성

// # 3. 제네릭 기본 문법
// : 사용할 컴포넌트(변수, 함수, 클래스 등)의 이름 뒤에 꺽쇠괄호(<>) 안에 '타입 변수'를 지정
// >> 함수나 클래스 등을 사용할 때 활용할 타입 명시

// "타입 변수"
// : 임의의 키워들르 사용하여 명시
// : 일반적으로 대문자 알파벳 하나를 사용(T: type, U,...)
// >> 해당 타입 변수는 컴포넌트 내에서 실재 데이터 타입의 자리를 대신

function generic<T>(arg: T):T { // 함수 정의 시 타입 변수 지정
  //현재 타입 변수 T (단일 타입 변수)
  return arg;
}

let str01 = generic<string>('안녕하세요.');//함수 호출시 타입 변수에 활용할 타입을 명시
let str02 = generic('hello'); // 오류X - 제네릭의 경우 타입 변수에 값을 유츄 가능
// let str03 = generic<string>(100); -Error

generic<number>(123); //함수 호출시 타입 변수에 활용할 타입을 명시
generic<boolean>(true); //함수 호출시 타입 변수에 활용할 타입을 명시

// ? +) 여러 제네릭 탑입 벼눗 지정
// ㅣ 여러개의 독립적인

function pair<T, U>(first: T, second:U):[T, U] {
  return [first, second];
}

let pariOutput01 = pair<string, number>('안녕', 234);
let pariOutput02 = pair<number, string>(345, '안녕');

function pair2<T, U>(first:T, second:T):U {
  return [first, second] as U;
}

let pair2OutPut = pair2<string, string[]>('hello', 'hi');

let a;

a = 10;
a = '안녕';

// 2) 제네릭 함수
// : 주로 매개변수의 타입을 지정하는 경우가 많음

function generic01<T>(args: T[]):T[] {
  console.log(`배열의 길이: ${args.length}` );
  return args;
}

let resultFunc = generic01<boolean>([true, false, false]);
console.log(`함수의 반환갑 ${resultFunc}`);

interface IGeneric<T> {
  (key: T): T; //인터페이스 내부의 속성타입을 명시
}

function example<T>(arg: T):T {
  return arg
}

let myGeneric: IGeneric<number> = example;

console.log(example(5));
console.log(myGeneric(5));

// 4) 제네릭 클래스
class GenericClass<T> {
  value: T;
  add: (x:T, y:T) => T;

    constructor(value: T, addFunc: (x: T, y: T) => T) {
      this.value = value;
      this.add = addFunc;
    }
}
  
class BasicClass {
  value: string;

  constructor(value: string, addFunc: (x: string, y:string) => string) {
    this.value = value;
    this.add = addFunc;
  }
  add:(x: string, y: string) => string;
}

  let myGenericNumber = new GenericClass<number>(0, function(x, y) { return x + y });
  console.log(myGenericNumber.add(4, 5));

  let myGenericString = new GenericClass<string>('', function(x, y) {return `${x},${y}`});
  console.log(myGenericString.add('wl','als'));
