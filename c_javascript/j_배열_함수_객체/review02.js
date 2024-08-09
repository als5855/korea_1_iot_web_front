// ! 장바구니 상품객체

// # 1 장바구니 기능

// 1) 추가: 장바구니에 상품을 추가
// >> 이미 존재하는 상품이면 수량을 업데이트

// 2) 조회: 현재 장바구니의 상품 목록을 조회

// 3) 수정: 특정 상품의 수량을 변경

// 4) 삭제: 장바구니에서 특정 상품을 제거

// # 2. 장바구내의 상품 객체 정의

// 1) id - 상품의 고유 식별자 (number)
// : 상품을 구분하는 용도
// 2) name - 상품의 이름 (string)
// : 상품을 사용자데게 표시하기 위한 용도

// 3) price - 상품의 가격 (number)
// : 상품의 단위 가격 ($)

// 4) quatity - 사용자가 선택한 해당 사품의 수량 (number)

// ===추가 기능===

// +) 장바구니 상품의 통 가격을 계산

// +) 전체 장바구니 상품 제거

// ? 상품객체 예시 
let product = {
  id: 1,
  name: 'banana',
  price: 1.5,
  quatity: 2
}

// # 3. 장바구니 시스템 구현

// 상품을 저장할 배열 초기화 (장바구니)
let cart = [];

// ? 1.장바구니에 상품을 추가
function addTocart(id, name, price, quatity) {
  // 장바구니 내에 해당 상품이 있는지 검색 (findIndex: 배열 내에 동일한 요소가 있는지 찾고 index를 반환 / 없으면 -1 반환)
  const index = cart.findIndex(item =>item.id === id);

  // 상품이 이미 장바구니에 있을 경우 
  if (index > -1) {
    cart[index].quatity += quatity; // 해당 상품의 수량을 업데이트
  } else { // 상품이 장바구니에 없을 경우
    cart.push({id, name, price, quatity})
  }
  displayCart();
}

// ? 2. 장바구니 내의 모든 상품을 조회하는 함수
function displayCart() {
  console.log('===Cart Content===');
  cart.forEach(item => {
    console.log(`${item.id} - Price: ${item.price}, Quantity: ${item.quatity}`);
    console.log(`TotalPrice ${item.name}: $${item.price * item.quatity}`);
  })
}

// ? 3. 특정상품의 수량을 변경하는 함수
function updateQuantity(id, quatity) {
  const index = cart.findIndex(item => item.id === id);

  // 상품이 존재하고 수량이 0보다 큰 경우: 상품 업데이트
    if (index > -1 && quatity > 0) {
      cart[index].quatity += quatity; // (a += b === (a = a + b))
    } else {
      console.log('Invalid Quantity OR item not found');
    }

    displayCart();// 장바구니 내역 출력
}

// ? 4. 장바구니에서 상품을 삭제하는 함수
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  displayCart();
}

// ? 장바구니의 총합을 계산하는 함수
// : reduce.() 메서드
// 배열.reduce((acc, value, index, array) => { })
function calculateTotal() {
  let total = cart.reduce((sum, item) => sum + (item.quatity * item.price), 0);
  console.log(`Cart Total Price: $${total}`);
}

// ? 6. 장바구니 전체 상품을 삭제하는 함수
function clearCart() {
  cart = [];
  console.log('Cart is empty!');
  displayCart();
}


// # 4. 장바구니 시스템 사용 

addTocart(1, 'banana', 1.5, 3);
addTocart(2, 'apple', 2, 3);
addTocart(3, 'mango', 3, 2);

removeFromCart(2);

updateQuantity(1, 4);
updateQuantity(2, 4);


addTocart(1, 'banana', 1.5, 3);
addTocart(2, 'apple', 2, 3);
addTocart(3, 'mango', 3, 2);

calculateTotal();
clearCart();