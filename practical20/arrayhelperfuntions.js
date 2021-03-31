//for each
var n=["apple","mango","banana"];
n.forEach(val => {
    console.log(val);
});

//map
let p = n.map(str => str.toUpperCase());
console.log(p);

//filter
var s = [1,10,30,18,6];
var path = s.filter(val => val>=10);
console.log(path);

//find
var names = [
    { name:"chandini",age : 10},
    { name:"eswari",age:20},
    {name:"anil",age:18},
    {name:"rajesh",age:40},
    {name:"jagadesh",age:35},

];
var firstName = names.find(person => person.age ==20  );
console.log("firstName",firstName.name);

//every
var path=names.every(person => person.age ==20);
console.log(path);

//some
var get= names.some(person => person.age ==20);
console.log(get);

//reduce
var items=[20,10,40,50];
function deduct(a,b){
    console.log(a,b);
    return a - b;
}
var elements=items.reduce(deduct,0);
console.log('deduct of ${items} is' ,elements);