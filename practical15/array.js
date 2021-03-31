//concat
var n=["orange","mango","apple","banana"];
var p=["pineapple","strawberry"];
console.log(n.concat(p));

//flat
var array1=[0,1,2,[3,4]];
console.log(array1.flat());
console.log(array1.flat(1));

var array2=[0,1,2,[[3,4]]];
console.log(array2.flat(1));
console.log(array2.flat(2));

//includes
var n=["orange","mango","apple","banana"];
console.log(n.includes("orange"));
console.log(n.includes("strawberry"));

//join
var n=["orange","mango","apple","banana"];
console.log(n.join());
console.log(n.join(""));

//sort
var n=['jan','feb','mar','apr','may'];
console.log(n.sort());

//indexOf
var n=["orange","mango","apple","banana"];
console.log(n.indexOf("mango"));
console.log(n.indexOf("pineapple"));


//lastIndexOf
var n=["orange","mango","apple","banana","apple"];
console.log(n.lastIndexOf("apple"));
console.log(n.lastIndexOf("pineapple"));
console.log(n.lastIndexOf("orange"));

//unshift
var n=[4,9,16,25];
console.log(n.unshift(1,2));


//pop
var n=["orange","mango","apple","banana"];
console.log(n.pop());
console.log(n);

//reverse
var n=["orange","mango","apple","banana"];
console.log(n.reverse());



