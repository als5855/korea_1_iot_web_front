//! Todo 할 일 목록
export const tmp = '';

//# 요구사항(비즈니스 로직) 정리

// TaskManager 클래스를 정의
// >> 인스턴스화(할 일 목록을 생성) 
// +) 기능 설계(할 일 목록을 관리)
//   1. 할 일 추가 Create
//   2. 할 일 제거 Delete
//   3. 할 일 렌더링 Read
//   4. 할 일 수정 Update (할 일 목록에 완료 여부의 체크박스 사용)
//   5. 할 일 개수 표시 기능(화면에 현재 등록된 할 일의 총 개수를 표시)

//#  타입 속성 저으이 (로직 내에 쓰일 데이터 타입 정의)
// Task(할 일, 객체) 타입을 제네릭으로 정의

type Task<T> = {
  id: number;
  content: T;
  completed: boolean;
}

class TaskManager<T> {
  // 1. thrtjd
  tasks: Task<T>[];
  nextId: number;

  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  // 2. 메서드 기능 정의 
  
  // * 할일 추가 메서드
  // : 할 일 내용(content)
  // 매개변수: 할 일 내용(content)
  addTask(content: T): void {
    let newTask = {
      id: this.nextId,
      content,
      completed:false
    }
    this.tasks.push(newTask);
    // 다음 아이디 값을 증가
    this.nextId++;

    // ? 할 일 개수를 업데이트
    this.updateTaskCount();
  }

  // * 헐일 제거 메서드(출력)
  // 매개변수: 제거할 요소의 id값
  removeTask(id:number):void {
    // task
    this.tasks = this.tasks.filter(task => task.id !== id);

    this.renderTasks('task-list');

    this.updateTaskCount();
  }

  // * 할 일 렌더링 메서드 (출력)
    // : 렌더링할 컨테이너(ul 태그)의 id를 매개변수로 받음
  // >> task-list
  renderTasks(containerId: string): void {
    const container = document.getElementById(containerId) as HTMLUListElement;

    container.innerHTML = '';

    this.tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = `${task.content}`;
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '삭제';
      deleteButton.style.color= 'white'
      deleteButton.onclick = () => {
        this.removeTask(task.id);
      }
      // <li>content의 값 button삭제button</li>
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.checked = task.completed;
      checkBox.onchange = () => {
        task.completed = !task.completed;

        this.renderTasks(containerId);
      }

      if(task.completed) {
        li.style.textDecoration = 'line-through';
      }

      li.appendChild(deleteButton);
      li.insertBefore(checkBox, li.firstChild);

      container.appendChild(li);
    });

    this.updateTaskCount();

  }

  // * 할일 수정 메서드 (완료 여부 토글)


  // * 할 일 개수 업데이트 메서드
  updateTaskCount() {
    const countElement = document.getElementById('task-count');

    // as 탕비 단언을 통해
    if (countElement) {
      countElement.innerHTML= `할 일 개수: ${this.tasks.length}`
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  //문자열 타입ㅡ이 할 일 관리자 인스턴스를 생성
  const taskManager = new TaskManager<string>();

  const addButton = document.getElementById('add-button') as HTMLButtonElement;
  const newTaskInput = document.getElementById('task-input') as HTMLInputElement;
  const taskList = document.getElementById('task-list ') as HTMLUListElement;

  addButton.addEventListener('click', () => {
    if (newTaskInput.value.trim() !== '') {
      taskManager.addTask(newTaskInput.value);
      taskManager.renderTasks('task-list');
      newTaskInput.value = '';
    }
  })
})