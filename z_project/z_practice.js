// while문 조건식 내으ㅔ true에 대한 boolean값 사용시: 무한 루프

while(true) {
// 구구단 출력기
// 사용자로 부터 1~9 사이의 숫자를 입력 받기(propmt)
// const number = Number(prompt('출력할 구구단의 숫자를 입력하세요. (1~9)'));
const input = prompt('출려할 구구단의 숫자를 입력하세요. (1~9)// "exit"를 입려하시면 종료됩니다.');

if(input.toLowerCase() === 'exit') {
  console.log('프로그램을 종료합니다.');
  // ? while문의 무한 루프의 경우 break; 키워드를 만나면 종료
  break;
}
// -입력받은 데이터 값을 숫자 자료형으로 변한(Number())
const number = Number(input)
// -숫자로 변환한 새당 값이 1에서 9 사이의 수가 아닌 경우, 콘솔창에 안내 메시지를 출력
// - 1에서 9사이의 수인 경우
//  , 1에서 9를 반복하여

if(number >= 1 && number <= 9) {
    for(let i = 1; 1 <= 9; i++) {
      console.log(`${number} X ${i} = ${number * i}`);
    }
} else {
  console.log('1에서 9사이의 숫자를 입력해주세요.');
}
}
