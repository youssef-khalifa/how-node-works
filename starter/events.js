const EventEmitter = require("events");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("there is new sale");
});
myEmitter.on("newSale", () => {
  console.log("customer name is youssef");
});
myEmitter.on("newSale", (stock) => {
  console.log(`there is now ${stock} itemsleft in stock.`);
});
myEmitter.emit("newSale", 9);
