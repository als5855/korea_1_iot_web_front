"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmp = void 0;
//! Todo 할 일 목록
exports.tmp = '';
class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    // 2. 메서드 기능 정의 
    // * 할일 추가 메서드
    // : 할 일 내용(content)
    // 매개변수: 할 일 내용(content)
    addTask(content) {
        let newTask = {
            id: this.nextId,
            content,
            completed: false
        };
        this.tasks.push(newTask);
        // 다음 아이디 값을 증가
        this.nextId++;
        // ? 할 일 개수를 업데이트
        this.updateTaskCount();
    }
    // * 헐일 제거 메서드(출력)
    // 매개변수: 제거할 요소의 id값
    removeTask(id) {
        // task
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.renderTasks('task-list');
        this.updateTaskCount();
    }
    // * 할 일 렌더링 메서드 (출력)
    // : 렌더링할 컨테이너(ul 태그)의 id를 매개변수로 받음
    // >> task-list
    renderTasks(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        this.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = `${task.content}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.style.color = 'white';
            deleteButton.onclick = () => {
                this.removeTask(task.id);
            };
            // <li>content의 값 button삭제button</li>
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.checked = task.completed;
            checkBox.onchange = () => {
                task.completed = !task.completed;
                this.renderTasks(containerId);
            };
            if (task.completed) {
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
            countElement.innerHTML = `할 일 개수: ${this.tasks.length}`;
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    //문자열 타입ㅡ이 할 일 관리자 인스턴스를 생성
    const taskManager = new TaskManager();
    const addButton = document.getElementById('add-button');
    const newTaskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list ');
    addButton.addEventListener('click', () => {
        if (newTaskInput.value.trim() !== '') {
            taskManager.addTask(newTaskInput.value);
            taskManager.renderTasks('task-list');
            newTaskInput.value = '';
        }
    });
});
