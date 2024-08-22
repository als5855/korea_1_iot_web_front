//! 유니언 타입과 제네릭

export const tmp = '';

// 유니온 타입(OR, |) 
// : 여러 타입 중 하나가 될 수 있는 값을 의미

// ? 유니온 타입을 제네릭의 타입 변수에 적용
//  extends 키워드를 사용 (확장)

// 
function unionGeneric<T extends string | number>(value: T) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  } 

  return value; //숫자 데이터
}

const result1 = unionGeneric('sTrinG');
const result2 = unionGeneric(1000);

console.log(result1, result2);

// # 
// 1) partial(부분적인, 선택적인)
// >> 

interface User {
  name: string;
  age: number
}

const user01 = {
  1: {
    name: '장지민',
    age: 30
  },
  2: {
    name: '이지윤',
    age: 29
  }
}

function updateUSER(id: number, changes: Partial<User>) {
  const user = user[id];
  
  if(!user) {
    console.log(`해당 id의 상용자는 없다.`);
  }

  user[id] = {...user, ...changes};

  // {name: 이지우},

}

updateUSER(1, {name: '장지민'});
updateUSER(2, {name: '이지윤', age: 30});
updateUSER(3, {name: '쵷성'});

interface Human {

}

let user: Readonly<Human> = {
  name: '장지민',
  age: 50
}

// user.name = '서호영';

// : Omit<T, K>

interface Employee {
  id: number;
  name: string;
  age: number;
  position: string;
}

type EmployeeWithoutId = Omit<Employee, 'id'>;

const newEmployee: EmployeeWithoutId = {
  name: '이지윤',
  age: 28,
  position: '개발자'
}

const totalData: Employee = {
  id: 3,
  name: '이미진',
  age: 20,
  position: '총무'
}
