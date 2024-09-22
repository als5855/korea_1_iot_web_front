export const tmp = '';
/**/ 
let count:number = 0;

function updateDisplay() {
  const countElement = document.getElementById('countValue');

  if(countElement) {
    // 숫자 자료형에 toString()
    // : 문자로 변환 메서드
    countElement.textContent = count.toString();

  }
}

function increment():void  {
  count++;
  updateDisplay();
}

function decrement():void {
  count--;
  updateDisplay();
}

document.addEventListener('DOMContentLoaded', () =>{
  const incrementBtn = document.getElementById('incrementBtn');
  const decreamentBtn = document.getElementById('decreamentBtn');

  if(incrementBtn) {
    incrementBtn.addEventListener('click', increment)
  }

  if(decreamentBtn) {
    decreamentBtn.addEventListener('click', decrement);
  }
})