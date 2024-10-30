function Student(a,b){
    this.name = a;
    this.age = b;
    this.std = function(){
        console.log("i am in 2nd std");
    }
    return 2;
};

Student.prototype.owner = "QSP";
console.log(Student.owner);

let student1 = new Student("Ashlesha",18);
let student2 = new Student("Rahul",19);

console.log(student1);
console.log(student2);

console.log(student1.name);
console.log(student1.age);
console.log(student1.std());
console.log(Object.keys(student1));
console.log(student1.owner);
console.log(student1.toNumber);