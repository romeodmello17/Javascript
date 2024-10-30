//!types of functions
//& Named function
//if a function having a name is known  as named function
//function demo

function abc(a, b) {
  console.log(a, b);
}
abc("hii", null);
abc("bye", 40);

//odd even function

function oddoreven(givenNumber) {
  if (givenNumber % 2 == 0) {
    console.log("it is even");
  } else {
    console.log("it is odd");
  }
}

oddoreven(16);

//printing numbers with function

function print(first, last, One, two) {
  for (let i = first; i <= last; i++) {
    console.log(i);
  }
  for (let i = two; i >= One; i--) {
    console.log(i);
  }
}

print("", "", 1, 9);

function demo(a) {
  console.log("hii");
  console.log(a);
}

console.log(demo());

function demo1(b) {
  console.log("bye");
  console.log(b);
  return 500;
}

let variable1 = demo1;
console.log(variable1);
let variable2 = demo1();
console.log(variable2);
let variable3 = demo1(100);
console.log(variable3);

function triple(a) {
  return a * 3;
}
console.log(triple(699));

//! Anonymous Function
// Anonymous function is a function without a name.
// It is used when we need to use a function only once.

// function (){
//     console.log("hii");

// }

//! function with  express
//if we declare a function inside a variable i.e. known as function with expression

let express = function () {
  console.log("hii");
  4;
  return 500;
};

express();

let funWithExpress = function abc() {
  console.log("i am function with expression");
  return 500;
};

funWithExpress();
console.log(funWithExpress());

//! IIFE (Immediately Invoke function express)
// IIFE is a function that is invoked immediately after it is defined.
//if we  invoke the function immediately after the declaraction i.e known as IIFE.
//it is represented by  two parenthesis ()()
//first parenthesis for declaration
//second parenthesis for invocation

(function () {
  console.log("IIFE");
})();

//! Nested function
// A function defined inside another function is known as a nested function.
// The nested function has access to the variables of the outer function.

let a = 100;
function outer() {
  // let a = 10;
  let b = 20;
  console.log("I am Outer Fucntion");
  inner();
  function inner() {
    // let a = 500;
    console.log(a + b);
    console.log(a);
    console.log("I am Inner Fucntion");
  }
}
outer();

//* Scope chaining :
// it is a mechanism in javascript how it looks for a variable.
// it is also known as scope resolution.
// first it will start searching from inner most scope , And end by global scope.
// if the variable is not present in any scope then it will give reference error.

//* Closure :
// Closure is a scope. It will be created in inner function for outer function variable.
// The advantage of the closure is , we can access outer function variable even though outer function stops executing.
// Closure is not for all the outer function variables , only for which ever the variable is accessed in inner function.

//! Arrow Function :
// In place of function keyword we can use FAT ARROW (=>) to declare a function.
// Advantge of arrow function is to reduce the syntax.

// (x,y) => {
//     ------------
//     ------------ multiline code
//     return value;
// }

// (x,y) => x+y; single line code
// x => value -> single line with single parameter with return value.

let arrow = () => {
    console.log("I Am a Arrow Function");
};
arrow();

let arrow2 = () => console.log("I am also a Arrow Function for single line code");
arrow2();

let arrow3 = () => 10;
console.log(arrow3());

let arrow4 = (x,y) => x+y;
console.log(arrow4(10,40));

let arrow5 = x => x;
console.log(arrow5(69));