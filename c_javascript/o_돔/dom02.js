// ! 문서 객체 가져오기

// ? head, body, title
// document.head
// document.body
// document.title

// ? body 요소 내부에서 만든 다른 요소들
// querySelcetor(), querySelcetorAll()

// # 1) 글자 조작하기
// 문서객체.textcontent
// : 입력된 문자열 그대로 넣기

// 

document.addEventListener('DOMContentLoaded', () =>{
  const a = document.getElementById('textContent');
  const b = document.getElementById('innerHTML');

  a.textContent = '<h2>textContent 속성</h2>'
  // : 텍스트 그 자체가 내용으로 삽입
  b.innerHTML = '<h2>innerHTLM 속성</h2>'
  // : HTML 문서구조를 인식하고 해석한 뒤 내용만 삽입
});

// +) JS에서 글자를 조작 시  문서 구조는 HTML, 기능적인 텍스트는 JS가 담당
// >>texContent 사용을 권장

// # 2) 속성 조작하기
// : 문서 객체의 속성(attribute)을 조작

// ? 문서객체.setAttribute(속성이름, 값)
// : 특정 속성에 값을 지정
// ? 문서객체.getAttribute(속성이름)
// : 특정 속성을 추출

// cf) HTML 표준에 정의된 속성은 위의 메서드 사용 없이 사용가능
// >> 내장된 속성들은 .연산자(온점)을 상ㅇ하여 속성 읽기 또는 지정이 가능

document.addEventListener('DOMContentLoaded', () => {
  const dogs = document.querySelectorAll('.dogs');

  dogs.forEach((dog, index) => {
    const width = (index + 1) * 100;
    
    // dog.setAttribute('width', width);
    // dog.setAttribute('height', '250px');
    dog.style.width = width + 'px';
    dog.style.height = '250px';

    const source = '../../images/dog01.jpg';
    const alter = '강아지이미지';

    dog.src = source;
    dog.alt = alter; 
  })
})

// # 3) 스타일 조작하기
// : 문서 객체의 스타일 조작 시 style 속성을 사용

// ? style 속성은 JS에서 객체로 인식
// : JS문법 체계에서는 식별자 -(하이픈) 기호 사용 X
// >> LowerCamelCase 사용권장
// text-align = textAlign
//  font-size = fontSize

document.addEventListener('DOMContentLoaded', () => {
  //  id 값이
  const divs = document.querySelectorAll('#container div');//자손 선택 가능


  // div 개수만큼 반복 출력
  divs.forEach((div, index)=> {
    const gradation = index * 10;

    div.style.height = '10px';
    div.style['backgroundColor'] = 'rgba(${gradation},${gradation},${gradation},${gradation})';
  })
})



