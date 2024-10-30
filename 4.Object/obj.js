let obj1 = {
  title: "iPhone",
  price: "123400",
  rating: 3,
};
let obj2 = {
  title: "Samsung",
  price: "14400",
  rating: 2,
};
let obj3 = {
  title: "infinix",
  price: "20000",
  rating: 1,
};

function TocreateObject(a, b, c) {
  this.title = a;
  this.price = b;
  this.rating = c;
}

let obj4 = new TocreateObject("Motorola", 649000, 2);
console.log(obj4);
let obj5 = new TocreateObject("asus", 50000, 3.4);
console.log(obj5);

class ObjectinClass {
  constructor(title, price, rating) {
    this.title = title;
    this.price = price;
    this.rating = rating;
  }
}
let obj6= new ObjectinClass("Vivo",2340000,0.7);
let obj7= new ObjectinClass("Redmi",24000,5.7);
let obj8= new ObjectinClass("Nothing",40000,0);

console.log(obj6);
console.log(obj7);
console.log(obj8);