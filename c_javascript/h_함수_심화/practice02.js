// ! 단어 필터링
const words = ['apple', 'mokey', 'banana', 'pig', 'grape', 'elephant']

const filteredWords = () => {
  return words.filter(words => words.includes(substring));
}

const containsA = filteredWords(words, 'a');
console.log(containsA);
