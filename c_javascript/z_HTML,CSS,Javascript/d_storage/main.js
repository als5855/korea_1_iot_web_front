/*
! 프로그램 로직 정의
1) 할 일을 추가
>> 로컬 스토리지에 샐운 데이터 추가

2) 할 일 목록을 렌더링
>> 로컬 스토리지에 데이터가 있을 경우 불러오기 

3) 할 일을 삭제
>> 로컬 스토리지에 해당 데이터 삭제

*/ 

// 할일 저장할 빈 배열
let todos = [];


// 문서로딩 완료 시 콜백 함수 실행
document.addEventListener('DOMContentLoaded', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  renderTodos(todos); 
});

// # 2)
function addTodos() {
  const input = document.getElementById('todo-input')
  const newTodo = input.value.trim();

  if(newTodo) {
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
    input.value = '';
  }
}

function renderTodos(todos) {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  todos.forEach((todo,index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    const deletBtn = document.createElement('button');
    deletBtn.textContent = '삭제';
    deletBtn.onclick = () => removeTodo(index);

    deletBtn.classList.add('deleteBtn');
    
    li.appendChild(deletBtn);
    list.appendChild(li);


  })
}

// # 
function removeTodo(index) {
  todos.splice(index, 1) ;
  localStorage.setItem('todo', JSON.stringify(todos));
  renderTodos(todos);
}

