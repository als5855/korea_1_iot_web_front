export const tmp = '';

type ProductType = {
  id: string;
  name: string;
  price: number;
}

// ProductType 타입을 사용하여 product라는 이름의 변수를 선언하고, 적절한 값을 할당
const product: ProductType = {
  id: 'wkdwlals',
  name: '풍선',
  price: 300
}

// product 객체의 내용을 콘솔에 출력
console.log(product);