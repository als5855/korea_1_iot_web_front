export const tmp = '';

// ! 인터페이스 정의
// : 객체 구조를 정의하는 타입스크립트의 기능
// +) 함수 타입 정의도 기능
// >> 객체가 어떤 프로퍼티와 메서드를 가져야 하는지 명시

// : 컴파일 시점에 타입 체킹을 위해 사용되는 개념
// >> 다양한 구현체에 동일한 인터퍼에스를 적용하여 일관성과 재사용성 제공

// cf) 타입별칭은(type alias)
// - 다양한 ㄷ이

// ? 인터페이스 구현 방법
// : interface 키워드를 시용하여 명시
// : 인처페이스명은 대문자로 시작
// >> 객체의 문법 체계를 모두 사용 가능(옵셔널, readonly, )

type UserType = {
  name: string;
  age: number;
}

interface IUser {
  // 객체의 속성 타입을 명시
  name?: string;
  readonly age: number;

  // 객체의 케서드 타입을 명시
  // >> 

  greet(): void;
}

let userA: IUser = {
  age: 50,
  greet: () => {
    console.log('반환값이 없는 함수');
  }
}

userA.greet();


// ? 클래스에서 인터페이스 구현
// : implements: 키워드를 사용하여 해당 타입을 가지는 클래스를 정의

class Student implements IUser {
  name: string;
  age: number;

  constructor(name: string, age:number) {
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

// ? 인터페이스 호가장
// : extends 키워드를 사용하여 확장
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
  // color: string;
}

let swuare1: Square= {
  sideLength: 10,
  color: 'red'
}

