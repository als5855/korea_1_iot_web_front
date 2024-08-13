class User {
  name;
  age;
  email;

  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  printInfo() {
    console.log(`Name: ${this.name} Age: ${this.age} Email: ${this.email}`);
  };
}

class Product {
  name;
  price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  printProduct(){
    console.log(`Product name: ${this.name} Price: ${this.price}`);
  }
}

class Order {
  user;
  product;
  quantity;

  constructor(user, product, quantity) {
    this.user = user;
    this.product = product;
    this.quantity = quantity;
  }

  printOderSummagry() {
    console.log(`주문자: ${this.user}, 상품이름:${this.product}, 주문수량: ${this.quantity}`);
  }
}

let user1 = new User('장지민', 29, 'wlals5855@naver.com');

user1.printInfo();

let product1 = new Product('마우스', 5000);
product1.printProduct();

let order1 = new Order(user1.name, product1.name, 3);

order1.printOderSummagry();


