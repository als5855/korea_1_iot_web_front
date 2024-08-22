export const tmp = '';

//! 타입스크립트 TODO 리스트 구현

/*
# 데이터 구조
배열 >> 객체
EX) 회원들 >> 

! 요구사항 (기능정리)
- Todo(할 일, 객체) 항목의 인터페이스 정의(ITodoItem)
  : id(number), task(string), completed(boolean)
>> 각각의 할 일을 todos 배열로 관리

- 할 일 리스트를 관리할 수 있는 함수 구현
  1. addTodo: 새로운 할 일을 추가
  2. completedTodo: Todo 항목의 completed 상태를 true로 변경
  3. deleteTodo: Todo 항목을 삭제

  >> 각 함수는 Todo 항목 배열(todos)를 입력받고, 변경된 배열을 반환
*/

//? 할 일 객체의 인터페이스 명시
interface ItodoItem {
  id: number;
  task: string;
  completed: boolean;
}

// 할 일 목록(리스트) 타입
// : ItodoItem[]
// >> 배열 메서드

// # 할 일 추가하는 함수
// 매개변수(지역변수): 전체 할 일 목록(리스트)
function addTodo(todos:ItodoItem[], task:string):ItodoItem[] {//반환값 타입
  // 새로운 할일 생성
  const newTodo:ItodoItem = {
    // 기존의 Todo 항목들 중에서 가장 큰 id에 1을 더해 새로운 ID 생성
    // Math.max(배열을 순회하여 가장 큰 id값을 가져옴)
    id: Math.max(0,...todos.map(todo =>todo.id)) + 1, //0을 지정한 이유는 안에 아무것도 없는 빈배열이기 때문에
    task: task,
    completed: false
  }

  // 기존 할 일 목록에 새로운 할 일 추가
  // : 스프레드 연산자 (기존 리스트의 요소 + 새로운 요소 >> 새로운 배열 생성)
  const newTodos = [...todos, newTodo];//새로운 주소값이 담긴

  // 배열의 불변성


  // 변경된 할 일 목록 반환
  return newTodos;
}

let changeTod;
// ? 특정 Todo 항목을 완료 상태로 변경하는 함수
function completedTodo(todos:ItodoItem[], id:number):ItodoItem[] {
  // 현채 할 일 목록을 순회 (map 배열 메서드)
  // : 매개변수로 전달받은 id값이 할 경우
  // : 해당 요소의 completed 속성을 변경

  // map((value, index, array) => {}) 메서드
  const chanageTodo = todos.map((todo) => 
    // 순회되는 각 요소의 id === 매개변수의 id가 같을 경우 
    // >>순회되는 요소의 completed 속성만  변경
    // >> 다를 경우 변경없이 반환

    // 화살표 함수를 콜백함수로 사용 시 (함수의 인자로 전달할 경우)
    // : 한 줄의 코드는 return 키워드와 중괄호를 함께 삭제 기능
    todo.id/*순회되면서 변경되는 값*/ === id/*매개변수 유지되는 id값*/ ? {...todo,completed: !todo.completed} : todo
  );
  return chanageTodo; 
}

function deleteTodo(todos:ItodoItem[], id:number):ItodoItem[] {
  const cancelTodo = todos.filter(todo => todo.id !== id);

  return cancelTodo;
}



// 함수 사용 예시
let todos: ItodoItem[] = [];

todos = addTodo(todos, '타입스크립트 공부');
todos = addTodo(todos, '자바스크립트 공부');
todos = addTodo(todos, 'SQLD공부');

console.log(todos);

todos = completedTodo(todos, 1);
todos = completedTodo(todos, 3);
console.log(todos);

todos = deleteTodo(todos, 1);
console.log(todos);

/*
forEach
>> 모든 요소에 같은 기능 적용

map
>> 모든 요소에 같은 기능 적용 + 적용 후 새로운 배열로 반환

filter
>> 모든 요소를 순회하면서 해당 조건에 맞는 요소만 새로운 배열로 반환
*/