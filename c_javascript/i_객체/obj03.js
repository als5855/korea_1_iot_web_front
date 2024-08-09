// ! 자바스크립이 객체 "프로토타입"
// : 객체의 원형(프로토타입)을 사용하여 새로운 객체를 생성
// >> 객체의 속성과 메서드 재사용 가능

// cf) 프로토타입: 시제품
//  >> 프로토타입 기반 언어
//  : 객체를 원형(프로토타입)으로 하는 복제 과저을 통해 객체 동작을 재사용하게 하는 로직
//  : 모든 객체들이 메서드롸 속성을 상속받기 위한 템플릿(틀)으로써 프로토타입 객체를 가짐

// # 1. 생성자 함수를 사용한 객체 생성
//  : new 키워드를 사용하여 함수 호출
//  : 관례적으로 함수명을 UpperCamelCase 사용

function Person(firtName, lastName, age, gender) {
  this.name = {
    firt: firtName,
    last: lastName
  };
  this.age = age;
  this.gender = gender;

  this.greeting = function() {
    console.log(`Hello, ${this.name.last}`);
  }
}

let person1 = new Person('지민', '장', 30, 'female');

person1.greeting();

console.log(person1);


// # 2. 클래스를 사용한 객체 생성 방법
// : 새로운 객체를 생성하는 템플릿 역할

// ! 클래스의 생성자
// : 크래스에서 객체를 생성하고 초기화하기 위한 '특별한 메서드'
// : new 키우드로 클래스의 객체를 생성할 때 자동 호출
// >> 각 크래스는 하나의 constructor


// ! 클래스 메서드
// : 클래스를 기반으로 생성된 객체가 공통적으로 가지는 함수 
// >> 클래스 내부에서는 function 키워드 사용 X

class Human {
  name;
  age;
  job;

  // 생성자 
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  greet() {
    console.log(`안녕하세요. ${this.name}님`);
  }
}

//클래스가 호출 X / 생성자 함수가 호출
let human1 = new Human('이지영', 29, 'c');
let human2 = new Human('강서영', 29, 'b');

human1.greet();
human2.greet();

console.log(human1);


