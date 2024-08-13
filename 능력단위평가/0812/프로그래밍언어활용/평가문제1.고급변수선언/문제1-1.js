let num1 = Number(prompt('첫 번째 숫자를 입력하세요.'));
let num2 = Number(prompt('두 번째 숫자를 입력하세요.'));
let num3 = Number(prompt('세 번째 숫자를 입력하세요.'));

// 세 숫자의 합
let sum = num1 + num2 + num3;
let average = (num1 + num2 + num3) / 3;
let maxNum = Math.max(num1 , num2, num3);
// 콘솔창 출력
console.log(sum);
console.log(average);
console.log(maxNum);