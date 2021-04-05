//1
function myFunction(hours) 
{
    return Math.floor(hours*60*60);
}
console.log(myFunction(1)); 
console.log(myFunction(10)); 


//2
function arithmeticOperators(num1,num2,operator){
    switch(operator) {
        case "-":
           return num1-num2;
        default:
            break;
    }
}
console.log(arithmeticOperators(10,20,"-"));
function operators(num1,num2,operator){
    switch(operator) {
        case "+":
           return num1+num2;
        default:
            break;
    }
}
console.log(operators(6,4,"+"));


//3
function statement(a)
{
    if(a % 3 == 0) {
        return true;
    }
    return false;
}
var p = statement(9);
console.log(p);
var q = statement(13);
console.log(q);


//4
function add(birds,animals){
    return birds + animals;
}
console.log(add(6,0));
console.log(add(2,7));


//5
function odd(n){
    return (2*n-1);
}
console.log(odd(1));
console.log(odd(3));


//6
function validate(age) {
    if(age > 18){
        return true;
    }
    return false;
}
console.log(validate(17));
console.log(validate(19));


//7
const a="Tim";
const b="Tom";
const c="Tony";
const d="JS";
console.log(`"${a} knows ${d} which ${b} dosen't that ${c} knew about"`);


//8
function simple(str){
   let c = str.length;
   if(c % 2 == 0 ){
       return true;
   }
   return false;
}
console.log(simple("javascript"));
console.log(simple("css"));


//9
function word(str){
    let p = str.slice(1);
    return p;
}
console.log(word('uxfactory'));


//10
function digit(n) {
    if ( n %2 ==0 && n < 10 ){
        return "even and less than 10";
    }
    else if(n > 10){
        return "even and not less than 10"
    }
    return false;
}
console.log(digit(12));
console.log(digit(7));
console.log(digit(6));

//11
function num(a,b) {
    if (a % b == 0){
        return true;
    }
    return false;
}
console.log(num(2,3));
console.log(num(21,3));
//12
function program(a,b){
    let c = (a+b);
    let p = Math.pow(c,2);
    if ( p % 2 == 0){
        return "even";
    }
    return "odd";
}
console.log(program(2,3));
console.log(program(1,3));
//13
function isPalindrome(str){
    return str == str.split("").reverse().join("");
}
console.log(isPalindrome("eye"));
console.log(isPalindrome("abc"));
//14
function check(a){
   Math.abs(a);
   return (-a);
}
console.log(check(3));
console.log(check(-7));
//15
function range(a,b,c){
   let max=Math.max(a,b,c);
   return max;
}
console.log(range(2,1,6));