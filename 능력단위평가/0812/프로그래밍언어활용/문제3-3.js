let numbers = [1, 2, 3, 4, 5];

let sum = alert(calculateSum(numbers));

function calculateSum(numbers) {
  let sum = 0;

  let lenght = numbers.length
  for( let i = 0; i < lenght; i++) {
    sum += numbers[i];
  }

  return sum;
}

