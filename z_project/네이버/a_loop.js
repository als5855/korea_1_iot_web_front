let fruits = ['apple', 'banana', 'orange'];

console.log('===for===');

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('==while==');


let i = 0;
while(i < fruits.length) {
  console.log(fruits[i]);
  i++
}

console.log('==do whiel==');

let index = 0;
do{
  console.log(fruits[index]);
  index++
} while(index < fruits.length)