let a = 50.467;
let b = new Number(100);

console.log(a,b);

console.log(typeof a);
console.log(typeof b);

console.log(a.valueOf());
console.log(b.valueOf());

console.log(a.toString());
console.log(b.toString());

console.log(a.toPrecision(3));

console.log(a.toFixed(2));

console.log(a.toExponential(1));

// console.log(window);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

console.log(90071992547409798);
console.log(90071992547409798n);

console.log("isFinite");
console.log(Number.isFinite(10.56)); //true
console.log(Number.isFinite(10)); //true
console.log(Number.isFinite("Rahul")); //false
console.log(Number.isFinite("10")); //false

console.log("isNaN");
console.log(Number.isNaN(10.6)); //false
console.log(Number.isNaN(10)); //false
console.log(Number.isNaN(NaN)); //true

console.log("isInteger");
console.log(Number.isInteger(20.5)); //false
console.log(Number.isInteger(20)); //true
console.log(Number.isInteger("Rahul")); //false

console.log("isSafeInteger");
console.log(Number.isSafeInteger(1234)); //true
console.log(Number.isSafeInteger(9007199254740991)); //true

console.log("parseFloat");
console.log(Number.parseFloat("10.2355")); //10.2355
console.log(Number.parseInt("10.48")); //10

console.log(isFinite(10.23)); //ture
console.log(isFinite("Rahul")); //false


console.log(isNaN(10)); //false
console.log(isNaN("Rahul")); //true

console.log(parseFloat("10.2355")); //10.2355
console.log(parseInt("10.48")); //10