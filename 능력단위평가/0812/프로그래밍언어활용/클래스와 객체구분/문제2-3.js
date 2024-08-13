class Ticket {

  id;
  title;
  quantity;
  
  constructor() {
    this.ticketBox = [];
  }

  addTicket(id, title, quantity) {
    const index = this.ticketBox.findIndex(ticket => ticket.id === id);

    if(index > -1) {
      this.ticketBox[index].quantity += quantity;
    } else {
      this.ticketBox.push({id, title, quantity})
    }

    this.ticketBox.forEach(ticket => console.log(`${ticket.id} - Title: ${ticket.title}, Quantity: ${ticket.quantity}`));
  }
  
  buyTicket(id, quantity) {
    const index = this.ticketBox.findIndex(ticket => ticket.id === id);

    if (index > -1 && this.ticketBox[index].quantity > quantity) {
      this.ticketBox[index].quantity -= quantity;
    } else {
      console.log('구매수량 초과');
    }

    this.ticketBox.forEach(ticket => console.log(`${ticket.id} - Title: ${ticket.title}, Quantity: ${ticket.quantity}`));

  }

  }
  


const ticket1 = new Ticket();

ticket1.addTicket(1, '레미제라블', 3);

ticket1.buyTicket(1, 2);

