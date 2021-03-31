//template string
var x=5;
console.log(`the value of a is =${x}`);

//class
class ArithmaticOperators {
    constructor(a,b,name) {
        this.input1=a;
        this.input2=b;
        this.operation = name;
    }
    getSum() {
        return `the sum is ${this.input1 + this.input2}`;
    }
    getSub() {
        return `the sub is ${this.input1 - this.input2}`;
    }
}
var object = new ArithmaticOperators(10,10,"chandini");
console.log(object.getSum());

//object literals
function studentDetails(name,number) {
    return {
        name,
        number
    }
}
let studentObj1 = new studentDetails("chandini",12);
console.log(studentObj1.name);

let studentObj2 = new studentDetails("chitra",12);
console.log(studentObj2.number);

//method in objects
function getstudentDetails(name,age,job) {
    return {
        getName() {
            return `student name:${name}`;
        },
        getAge() {
            return `student age:${age}`;
        },
        getJob() {
            return `student job:${job}`;
        }
    }
}
let obj = getstudentDetails("chandini",12,"developer").getName();
console.log(obj);

//destucturing
let collegeDetails = {
    sName:"BWEC",
    branch:"cse",
    id:"y16cs2612"
};
let {sName,id} = collegeDetails;
console.log(sName,id);

let {sName:s,branch:y} = collegeDetails;
console.log(s,y);