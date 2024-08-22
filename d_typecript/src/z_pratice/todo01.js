"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
exports.tmp = '';
// 할 일 목록(리스트) 타입
// : ItodoItem[]
// >> 배열 메서드
// # 할 일 추가하는 함수
// 매개변수(지역변수): 전체 할 일 목록(리스트)
function addTodo(todos, task) {
    // 새로운 할일 생성
    const newTodo = {
        // 기존의 Todo 항목들 중에서 가장 큰 id에 1을 더해 새로운 ID 생성
        // Math.max(배열을 순회하여 가장 큰 id값을 가져옴)
        id: Math.max(0, ...todos.map(todo => todo.id)) + 1, //0을 지정한 이유는 안에 아무것도 없는 빈배열이기 때문에
        task: task,
        completed: false
    };
    // 기존 할 일 목록에 새로운 할 일 추가
    // : 스프레드 연산자 (기존 리스트의 요소 + 새로운 요소 >> 새로운 배열 생성)
    const newTodos = [...todos, newTodo]; //새로운 주소값이 담긴
    // 배열의 불변성
    // 변경된 할 일 목록 반환
    return newTodos;
}
let changeTod;
// ? 특정 Todo 항목을 완료 상태로 변경하는 함수
function completedTodo(todos, id) {
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
    todo.id /*순회되면서 변경되는 값*/ === id /*매개변수 유지되는 id값*/ ? Object.assign(Object.assign({}, todo), { completed: !todo.completed }) : todo);
    return chanageTodo;
}
function deleteTodo(todos, id) {
    const cancelTodo = todos.filter(todo => todo.id !== id);
    return cancelTodo;
}
// 함수 사용 예시
let todos = [];
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
