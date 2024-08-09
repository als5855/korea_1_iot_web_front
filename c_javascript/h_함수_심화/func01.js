// ! 콜백 함수(고차 함수)
// 자료형: 기본자료형 VS 참조자료형(배열, "함수", 객체)
// >> JS에서 함수는 "자료형"
//  , 변수에 할당 가능 & 함수의  매개변수로 전달 가능(인자로 사용)

// #1. 콜백함수
// : 다른 함수에 인자로 전달되어, 그 함수의 내부에서실행되는 함수

function callback1(callbackFunc) {//매개변수 (함수를 데이터로 전달 받음)

  // 함수 내부에서 다양한 기능, 동작 작성 가능

  for (let i = 0; i < 3; i++) {
    callbackFunc(i); //callbackRunc(print 함수)의 인자로 i값을 전달
  }
}
// cf) let callbackFunc = () => {
    // console.log(`#{index}번째 호출`);
  // }

function print(index) {
  console.log(`${index}번째 호출`);
}

callback1(print)
