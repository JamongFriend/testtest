function Menu(name){
  this.name = name;
}

const coffeeMenu = function(name, price, size){
  this.price = price;
  this.size = size;
  Menu.call(this, name);
}

const breadMenu = function(name, price){
  this.price = price;
  Menu.call(this, name);
}

coffeeMenu.prototype = new Menu();
breadMenu.prototype = new Menu();

const Americano = new coffeeMenu("Americano", 2000, "ragular");
console.log(Americano);

const CheezeBread = new breadMenu("CheezeBread", 4000);
console.log(CheezeBread);

console.log("a");
console.log("b");