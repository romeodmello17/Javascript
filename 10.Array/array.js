let array = [1, 2, 3, 4, 5];
let array2 = ["a", "b", "c", "d", "e"];

console.log(array);
console.log(array2);
//Modifying an Array

console.log("PoP()");
array.pop();
let removeElementFromLast = array2.pop();

console.log(removeElementFromLast);

console.log(array);
console.log(array2);

console.log("shift()");
array.shift();
let removeElementFromTop = array2.shift();
console.log(removeElementFromTop);
console.log(array);

console.log("push()");
array.push(100);
console.log(array);

console.log("unshift()");
array2.unshift("i am a String");
console.log(array2);

console.log("splice()");
array.splice(2, 1);
console.log(array);

array2.splice(2, 1, "i am String 2");
console.log(array2);

array2.splice(array2.length, 0, "I am last String");
console.log(array2);

console.log("reverse()");
array.reverse();
console.log(array);

console.log("sort()");
let array3 = ["t", "a", "d", "p", "c", "e"];
console.log(array3);
array3.sort();
console.log(array3);

//iterating array:

let array4 = [1, 2, 3, 4, 5];

console.log("forEach()");
array4.forEach((e, i, a) => {
  console.log(e, i, a);
});

array4.forEach(function (e, i) {
  console.log(e, i);
});

let array5 = ["a", "b", "c", "d"];

console.log("map()");
array5.map((e, i, a) => {
  console.log(e, i, a);
});

console.log("find()");
array5.find((e, i, a) => {
  console.log(e, i, a);
});

console.log("filter()");
array5.filter((e, i, a) => {
  console.log(e, i, a);
});

let valueOfforEach = array.forEach((e) => {
  console.log(e);
  if (e % 2 == 0) {
    return e;
  }
});

console.log(valueOfforEach);

let valueOfmap = array.map((e) => {
  if (e % 2 == 0) {
    return e;
  }
});

console.log(valueOfmap);

let valueOffind = array.find((e) => {
  if (e % 2 == 0) {
    return e;
  }
});

console.log(valueOffind);

let valueOffilter = array.filter((e) => {
  if (e % 2 == 0) {
    return e;
  }
});

console.log(valueOffilter);

let array6 = [1,2,3,4,5];

let valueOfreduce = array6.reduce((a,e,i,ar)=>{
    console.log(a,e);
    return a * e;
});

console.log(valueOfreduce);

let valueOfreduceright = array6.reduceRight((a,e,i,ar)=>{
    console.log(a,e);
    return a * e;
});

console.log(valueOfreduceright);