"use strict";
{
    // ! 타입 단언(Type Assertion)
    // : 개발자가 타입스크립트 컴파일러 보다 해당 값의 타입의 주도권을 가지는 방법
    // >> 컴파일러에게 '이 데이터의 타입을 내가 지정한 차입으로 간주해라!'라는 지시
    // ? 타입 단언 방법
    // as 키워드를 사용
    let someValue = 'this is  a string';
    // someValue = true; // 해당 변수에 할당은 가능하지만 길이를 구하는 로직에 실질적인 이용 X
    let length = someValue.length; // length 속성의 경우 문자열, 배열에서 주로 사용
    console.log(length); // 17
    // # ============타입 단언을 활용하는 예시===========
    // 1) HTMLButtonElement 단언
    // 웹 문서에 이베트를 등록하여
    // 
    document.addEventListener('DOMContentLoaded', () => {
        // 버튼요소 가져오기 
        const button = document.getElementById('myButton');
        // button.disabled = true;
        // >> 'button'은(는) 'null'일수 있습니다.
        // 
        if (button) {
            button.disabled = true;
            // : bool속성인 disabled 속성은 버튼 태그에만 존재
        }
    });
    // #
    const jsonString = '{"name": "LSA", "age": 30, "hobby": "exercise"}';
    const userData = JSON.parse(jsonString);
    console.log(userData);
}
