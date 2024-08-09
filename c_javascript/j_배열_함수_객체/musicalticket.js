// ! 티켓 예약사이트


// 보유 티켓 저장할 배열
let ticketBox = [];

// ? 고객이 구매할 구매할 티켓 추가(관리자)
const addTicket = (id, title, point, quantity) => {
  const index = ticketBox.findIndex(ticket => ticket.id === id);

  // 티켓추가
  if(index > -1) {
    ticketBox[index].quantity += quantity;
  } else {
    ticketBox.push({id, title, point, quantity})
  }
  displayTicket();
}


// ? 남은 티켁 내역 출력
const displayTicket = () => {
  console.log('===Ticket-Box===');

  ticketBox.forEach(ticket => {
    console.log(`${ticket.id} - Title: ${ticket.title}, Quantity: ${ticket.quantity}`);
  })
}

// ? 티켓 구매
const buyTicket = (id, quantity) => {
  const ticketIndex = ticketBox.findIndex(ticket => ticket.id === id);

  if (ticketIndex > -1 && ticketBox[ticketIndex].quantity > quantity) {
    ticketBox[ticketIndex].quantity -= quantity;
  } else {
    console.log('구매수량 초과');
  }
  displayTicket();
}

// const updateTicket = () => {
//   const ticketIndex = ticketBox.findIndex(ticket => ticket.id === id);

//   ticketBox.map(ticket => ticket.id === id ? );
// }

const totalpoint = () => {
  const ticketIndex = ticketBox.findIndex(ticket => ticket.id === id);
  let pointTotal = 10000;
  if(pointTotal > ticketBox[ticketIndex].point) {
    return pointTotal -= ticketBox[ticketBox].point;
  } else {
    console.log('포인트 한도초과 입니다.');
  }
  // console.log(`남은 포인트:, ${pointTotal} -= ${ticket[ticketIndex].price}`);
}

// ? 매진 확인
const alretTicket = (id) => {
  const ticketIndex = ticketBox.findIndex(ticket => ticket.id === id);
  console.log('===Ticket 남은 수량 확인====');
  if(ticketBox[ticketIndex].quantity <= 0) {
    console.log(`${ticketBox[ticketIndex].title}은 현재 매진입니다.`);    
  } else {
    console.log(` 현재 ${ticketBox[ticketIndex].title} 남은 티켓수량: ${ticketBox[ticketIndex].quantity}`);
  }
}

//  ? 구매 취소
const returnTicket = (id, quantity) => {
  console.log('===Ticket cancel====');
  const ticketIndex = ticketBox.findIndex(ticket => ticket.id === id);
  if(5 >= ticketBox[ticketIndex].quantity + ticketBox.quantity) {
    console.log(`${ticketBox.title} : ${ticketBox[ticketIndex].quantity += quantity}`);
  } else {
    console.log('구매취소 할 수 없습니다.' );
  }
  displayTicket();
}

// # 관리자 영역
addTicket(1, '레미제라블', 300, 4)
addTicket(2, '일러스트전시회', 100, 1)
addTicket(3, '특별전', 50, 2);
addTicket(1, '레미제라블', 300, 1)


// 구매자 영역

displayTicket();

buyTicket(1, 2);

returnTicket(1, 1)

alretTicket(1);




