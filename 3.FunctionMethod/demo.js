let obj1 = {
    title : "JavaScript",
    knowledge : "HTML,CSS",
};
let obj2 = {
    title : "React",
    knowledge : "HTML,CSS,JS",
};
let obj3 = {
    title : "HTML",
    knowledge : "not needed",
};

function abc(){
    console.log("For Learning " + this.title + " Prior knowledge " + this.knowledge);
};

abc();

abc.call(obj1);
abc.call(obj2);
abc.call(obj3);

function demo(time,day){
    console.log("Class of " + this.title + " on " + time + " " +day);
};

demo("5pm","tuesday");
demo.call(obj1 , "6pm","Friday");
demo.apply(obj2,["7pm","Monday"]);
let bindFunc = demo.bind(obj3, "8pm","Sunday");
bindFunc();
