// todoList 만들기

// Todo (할 일 목록 관리 시스템)

// # Todo 객체

//  - id: 각 할일의 고유 식별자, 주로 숫자나 문자열로 표현
//  - content: 할 일의 내용을 문자열로 저장
//  - completed: 할 일의 완료 상태를 나타내는 boolean 데이터

/*
# todo 객체 예시
let todo = {
  id: 1,
  content: 'sqld',
  completed: false
}
*/ 

// # 프로젝트 구조
// 1. 할일 목록을 추가: 객체를 사용하여 할 일으 저장하고 배열에 객체를 추가
// >> 새로운 할 일(객체)을 목록에 추가

// 2. 할일 수정: 완료된 할 일의 completed값을 전환(토글, toggle)
// >> 할 일의 완료 상태를 변경

// 3. 할 일 삭제: 원하는 할 일 목록에서 제거

// 4. 할 일 목록 출력: 현재 목록의 상태를 콘솔에 출력

// >> 'CRUD' 프로그램의 기본 기능
// Creat(생성, 1), Read(읽기, 4), Update(수정, 2), Delete(삭제, 3) 

// # 프로젝트 구현

let todos = []; //할 일 목록을 저장할 배열

// ? 1. 할일 추가
// : 고유ID, 내용, 완료 상태를 가지는 객체를 생성
//  >> 배열에 추가
function addTodo(content) {// 함수 호출시 인자로 할 일의 내용을 전달받음
  // 새로운 할 일 생성
  const newTdo = {
    id: todos.length + 1, //이전 배열의 길이 === 마지막 인덱스 번호 + 1
    content: content,
    completed: false
  };

  todos.push(newTdo)
  displayTodos(); //
}

// ? 할일 완료상태를 변경하는 변수 
// : 주어진 id를 가진 할 일의 완료 상태를 전환(토글)
function toggleTodo(id) {
  todos = todos.map((todo) => {
    //순회되는 todo의 할 일을 id와 매개변수로 전달받은 매개 변수가 일치 한다면
    if(todo.id === id) {
      //해당 할일의 완료 상태를 토글시키고 새로운 객체로 반환
      // >> 스프레드 연산자(...)

      // let array = [1, 2, 3];
      // let array2 = [...array]; >> array의 요소만 가져와서 새로운 배열을 생성 (메모리 주소가 다름)

      // completed: false
      // 객체명.속성키 = 속성값; >> 객체 속성값 재할당
      // 속성키: 속성값; >> 객체 내부에서 속성값 재할당
      return {...todo, completed: !todo.completed} //: todo는 현재 순회되는 객체(할 일)값
    }
    return todo; //id가 일치하지 않는 데이터는 기존 데이터를 그대로 반환
  });
  displayTodos();
}

// ? 할일 삭제
// : 주어진 id를 가진 할일을 todos 배열에서 제거
// >> 배열 내부 요소의 개수 변화 O (filter)
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  displayTodos();
}

// ? 현재의 할 일 목록을 출려하는 함수 
function displayTodos() {
  console.log(`현재의 할일 목록`);
  todos.forEach(todo => {
    console.log(`${todo.id}: ${todo.content} - ${todo.completed ? '완료됨' : '완료되지 않음'}`);
  });
}

// # 프로젝트 실행 
displayTodos();

addTodo('sqld 공부하기');
addTodo('기술 블로그 작성하기');
addTodo('자소서 작성하기');

deleteTodo(2);
toggleTodo(1);


