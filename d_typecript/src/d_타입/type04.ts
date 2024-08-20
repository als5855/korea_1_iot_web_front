export const tmp = '';

// ! === Union타입 ===
// : 여러 타입중 하나가 될 수 있는 값을 나타내는 방버
// >> 값에 허용된 타일울 두개 이상으로 지정

// >> OR 연산자 (A 또는 B...)
// >> | (vertical bar) 기호를 사용하여 표현

// ? 유니언 타입의 사용
// >> 변수, 함수의 매개변수, 반환갑 등에서 모두 사용 가능
// >> 타입의 유연셩을 제공
// : 무분별한 any 사용을 방지

// ? 유니언 타입이 사용 
//  type UnionType = Type1 | Type2 | Type3

type VariableType = string | number | boolean | string[]

let value:VariableType = '문자';
value = 123;
value = true;
value = ['안녕', '반가워'];

// value = [112, 333] -Error
// value = {}; - Error 

// ? 타입 별칭의 예시

// 관리자 계정 Admin
type Admin = {
  id: string;
  password: string;
}

// 사용자 계정 User
type User = {
  id: string;
  name: string;
}

// 위의 두가지 계정을 가지는 사이트의 계정 타입 
type Person = Admin | User;
//  >> 타입의 별칭이 

/*
type Person = {
id: string;
password?: number;
name?: number;
}
*/  

let  jjm: Person = {
  id: '1234',
  password: 'wldlg'
}

let ljy: Person = {
  id: '1234',
  password: 'wldlg'
}

// ? 타입 별칭에서 union 타입 사용 시
// : 정확한 타입 지정을 위해 타입 가드를 사용
// >> 타입 가ㅡ - 조건문을 통해 타입을 좁혀나가는 방식

type Union = number | string;

function getAge(age: Union) {
  //나이가 입력될 경우
  // - 숫자: 소수점 자리가 없도록 반올림 하여 문자열로 반환 (toFixed())
  // - 문자열: 그대로 반환

  // ? Union 타입의 경우 타입 가트를 지정하지 않을 경우
  // 지정된 모든 타이베 사용할 수 있는 메서드와 속성만 사용 가능
  // age.toFixed()
  // age.toUppercase()
  // >> 어떤 

  if(typeof age === 'number') {
    age = age.toFixed();
    return age;
  } else {
    age = age.toUpperCase();
    return age;
  }
}

console.log(getAge(12.345)); //12
console.log(getAge('12 years old')); // 12


