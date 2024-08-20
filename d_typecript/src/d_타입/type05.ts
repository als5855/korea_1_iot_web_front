// ! ==== Intersection(인터섹션) 타입====
// : 여러 타입을 하나로 결합하여 모든 타입의 기능을 갖춘 안일 타입을 생성
// >> 여러 타입을 모두 만족하는 하나의 타입
// >> And 연산자 (A 그리고 B)
// >> & 기호를 사용하여 구현

// ? 인터섹션 타입 사용 방법
// type 타입별칭 = Type1 & Type2 & ...;

type Employee = {
  name: string;
  startData: Date;
}

type Manager = Employee & { group: string};

let managerA: Manager = {
  name: '장지민',
  startData: new Date(),
  group: '개발부서' //추가된 부분
}

type Admin = {
  isAdmin: boolean;
}

type User = {
  id: string;
  password: string;
}

// 관리 사용자 
type AdminUser = Admin & User

function creatAdminUser(user:User): Admin {
  return {...user, isAdmin: true}
}

let newAdminUser:User = {
  id: 'quel12',
  password: 'dlglrl333!!'
}

let adminUser1 = creatAdminUser(newAdminUser);
console.log(adminUser1);
//{ id: 'quel12', password: 'dlglrl333!!', isAdmin: true }
export const tmp = '';