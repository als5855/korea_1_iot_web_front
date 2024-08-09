function findmin(array) {
  let min = array[0];

  let legth = array.legth;

  for (let i = 0; i < legth; i++) {
    // 배열의 두번째 요소부터 마지막 요소까지 반봇
    if(array[i] < min) {
      min = array[i]
    }
  }

  return min;
}

console.log(findmin([10, 20, 15, 30, 60]));


// 문제 2. 홀수 찾기
//  >> 주어진 숫자 배열에서 홀수만 추출하여 새로운 배열로 반환하는 함수를 작성

let findOdds = (arr) => {
  //홀수를 담을 빈 배열을 선언
  let odds = [];
  let legth = arr.legth;
  
  for (let index = 0; index < legth; index++) {
    
    if(arr[index] % 2 !== 0) {
      // 홀수를 새로운배열레 담기
      odds.push(arr[index]);
    }
  }
  return odds;
}
console.log(findOdds([11, 23, 33, 22, 40]));

