let obj = {
    title : "iPhone",
    price : 125500,
    rating : 4,
};

console.log(obj.title);
console.log(obj["title"]);
console.log(obj["price"]);

let obj2 = {
    title : "samsung",
    "price" : 75000,
    1:4.4,
};

console.log(obj2.title);
console.log(obj2.price);
console.log(obj2["price"]);
console.log(obj2["1"]);

let obj3 = {
    title : "vivo",
    available : function (){
        console.log("currently available");
    },
    abc(){
        console.log("i am function inside a object");
    },
};

obj3.available();
obj3.abc();



let abc = Symbol();
let obj4 = {
    title : "redmi",
    price : 250000,
    ["abc"] : "Realme",
}

console.log(obj4["abc"]);

//for in loop
for(let property in obj4){
    console.log(property +":"+ obj4[property]);
}

let iphone = {
    title : "iphone",
    price : 250000,
    rating : 3.3,
    stock : 1000,
}

console.log(Object.keys(iphone));
console.log(Object.values(iphone));
console.log(Object.entries(iphone));

iphone.title = "iphone16";
iphone.charger = "Not Available";
delete iphone.stock;

console.log(Object.keys(iphone));
console.log(Object.values(iphone));
console.log(Object.entries(iphone));

let samsung = {
    title : "iphone",
    price : 250000,
    rating : 3.3,
    stock : 1000,
}

// Object.freeze(samsung);

// samsung.charger = "NASASAS";
// samsung.rating = 4.6;

// console.log(samsung);

Object.seal(samsung);
samsung.charger = "NASASAS";
delete samsung.price;
samsung.rating = 4.6;

console.log(samsung);

Object.freeze(iphone);

console.log(Object.isFrozen(samsung));
console.log(Object.isFrozen(iphone));
console.log(Object.isSealed(iphone));
console.log(Object.isSealed(samsung));

let obj1 = {
    title : "iphone",
}
let extra = {
    price : 24555555,
}

console.log(Object.assign(obj1,extra));
console.log(obj1);
console.log(extra);