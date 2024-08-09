
// x = 10;

// x++;


// console.log(x++);
// console.log(x);

// x = 10;
// console.log(x++);//10
// console.log(x++);//11
// console.log(x);//12
// console.log(x++);//12
// console.log(x);//13

// console.log(`====전위연산자====`);

// x= 10;
// console.log(--x);//9
// console.log(x);//9
// console.log(--x);//8
// console.log(--x);//7
// console.log(x);//7
// console.log(--x);//6

// console.log(`====연산자 연습====`);
// x = 10;
// x++;//10
// x++;//11
// --x;//11
// x++;//11
// x;//12
// x++;//12
// ++x;//14
// --x;//13
// console.log(x);

// x= 14;
// y = x-- + 5 + --x;
// // 13 + 5 + 13 = 31
// console.log(y);



// let num = Number(prompt(`숫자를 입려해주세요.`));

// console.log(num % 2 === 0 ? '짝수' : '홀수');



// let total = 0;

// total += 5;
// total *= 3;
// total -= 2;

// console.log(total);



let randomYear = 2200;

if(randomYear % 4 === 0 && randomYear % 100 !== 0 || randomYear % 400 === 0) {
  console.log(`${randomYear}는 윤년입니다.`);
} else{
  console.log(`${randomYear}는 윤년이 아닙니다.`);
} 