let str = "I am STRING";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str1 = "                  I am      a String      ";

console.log(str1);
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());

console.log(str1.length);
console.log(str1.trim().length);
console.log(str1.trimStart().length);
console.log(str1.trimEnd().length);

let str2 = "i am a String";

console.log(str2.replace("i","j"));
console.log(str2);
let replaceString = str2.replace("i","j");
console.log(replaceString);

console.log(str2.replaceAll("i","j"));

console.log(str2.indexOf("m"));
console.log(str2.lastIndexOf("m"));

console.log(str2.indexOf("a"));
console.log(str2.indexOf("a",3));
console.log(str2.indexOf("a",7)); //-1  
console.log(str2.lastIndexOf("a"));

console.log(str2.includes("x"));
console.log(str2.includes("a"));

console.log(str2.startsWith("i am"));
console.log(str2.endsWith("ngg"));

let str3 = "i am String";
console.log(str3[2]);

let oneChar = str[2];
console.log(oneChar);

console.log(str3.charAt(2));
console.log(str3.substring(5,11));

let subStr = str3.substring(0,4);

console.log(subStr);

let sliceStr = str3.slice(0,4);

console.log(sliceStr);

console.log(str3.substring(0,-1));
console.log(str3.slice(0,-1));
console.log(str3.substring(4,0));
console.log(str3.split("a"));
console.log(str3.split(""));
console.log(str3.split(" "));