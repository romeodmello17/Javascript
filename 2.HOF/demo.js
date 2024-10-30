let m = 200;
let n = 300;
let o = 400;
function add(x,y){
    console.log("I am add function");
    console.log(x+y);
}
function sub(x,y){
    console.log(x-y);
}
function mul(x,y){
    console.log(x*y);
}
function demo(a,b,c){
    console.log(a,b,c);
    a(b,c);
}

// demo(10,20,30);
demo(add,n,69);

demo(sub,m,200);

demo(mul,o,69);

//Generator

function* genFun(){
    console.log("hii");
    yield 100;
    console.log("Hello");
    yield 200;
    console.log("Bye");
}
let genObj = genFun();

console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());