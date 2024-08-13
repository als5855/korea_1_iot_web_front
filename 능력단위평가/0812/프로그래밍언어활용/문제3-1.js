const button = document.querySelector('button');
const p = document.querySelector('p')

button.addEventListener('click', () => {
  if(button.classList.contains('click')) {
    p.textContent = '"버튼이 클릭되었습니다!"';
    button.classList.remove('click');
  } else {
    p.textContent = '"이 버튼을 클릭해 보세요!"';
    button.classList.add('click');
  }
  
  console.log('Button clicked!');
})