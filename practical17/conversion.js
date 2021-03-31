/*//implicit conversion;
let n;
n="a" +"b";
console.log(n,typeof n);

n="2" * "4";
console.log(n,typeof n);

//explicit
n=Number('2');
console.log(typeof n);

n=Number(true);
console.log(typeof n);

n=String(2+4);
console.log(n,typeof n);

//try and catch statements
function myFunction(){
    console.log("myFunction");
}
try {
    myFunction();
}
catch(error) {
    console.error(error);
}
finally {
    console.log('hi');
}

//throw
var num=50;
if (num>10){
    throw "number should not exceed 10";
}
else {
    console.log("num is more than 10");
}*/

/*//scoping
var someString="declared outside function";
function exmapleFunction(){
    var someString="delared inside function";
    console.log(someString); //inside
}
console.log(someString); //outside
exmapleFunction();
console.log(someString);  //outside

//hoisting
console.log(hoist);
var hoist;
hoist="hoisted variable";

animal();
function animal(){
    let animalName="elephant";
    console.log("animals name:" +animalName);
}*/

//this keyword
var role='50';
function testThis(){
    var role='100';
    console.log('role:',role);
    console.log('role using this',this.role);
}

testThis();

//debugger
var x=10*20;
debugger;
console.log(x);
