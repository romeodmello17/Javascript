let a;
console.log(a);
let b = null;
console.log(b);
let c = 12345n;
let d = BigInt(187654321);
console.log(c, d);
let e = Symbol();
let obj = {
  ["e"]: "i am a Symbol",
};
console.log(obj.e);
let f = Boolean(null);
console.log(f);
