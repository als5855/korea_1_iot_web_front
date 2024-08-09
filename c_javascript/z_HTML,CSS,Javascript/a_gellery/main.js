// 기능 구현

/*
! 1) thumb-bar의 이미지 클릭
>> 해당 이미지로 full-img 변경

! 2) button 태그에 틀릭 이벤트 발생시

- Darken 버튼 클릭시
  : 버튼의 class 속성을 dark로 지정
  : 버튼의 textContent을 'Lighten'
*/ 

// & 1) HTML 요소 선택

const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const button = document.querySelector('button');
const overlay = document.querySelector('.overlay');

thumbBar.addEventListener('click', (e) => {
  // 클리된 요소가 이미지인 경우
  if (e.target.tagName === 'IMG') {
    const imgSrc = e.target.scr;
    displayedImage.src = imgSrc;
  };
});

thumbBar.addEventListener('click', (e) => {
  // 클릭된 요소가 이미지인 경우
  if (e.target.tagName === 'IMG') {
    const imgSrc = e.target.src;
    displayedImage.src = imgSrc;
  };
});

button.addEventListener('click', () => {
  if (button.classList.contains('dark')) {
    button.textContent = 'Lighten';
    overlay.style.backgroundColor= 'rgba(0, 0, 0, 0.5)';
    button.classList.remove('dark');
  } else {
    button.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    button.classList.add('dark');
  }
})