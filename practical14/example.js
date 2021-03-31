//localeCompare
const a='10';
const b='20';

console.log(a.localeCompare(b));

var sum='20';
console.log(sum.localeCompare(10));

console.log('a'.localeCompare(b));
console.log('20'.localeCompare(20));

//slice
var str="extract part of string";
console.log(str.slice(8,13));

var str="use the start and end parameters";
console.log(str.slice(14));

var str="extract part of string";
console.log(str.slice(-10,-5));

var str="extract part of string";
console.log(str.slice(-10));
//split
var str="extract part of string";
console.log(str.split(""));
console.log(str.split(" "));
var arr=str.split(" ");
console.log(arr[2]);
//splice
var months=['jan','march','april','june'];
months.splice(1,0,'feb');
console.log(months);


//search
var str="use the start and end";
console.log(str.search("start"));

var str="color the image";
console.log(str.search("back"));


//replace
var str="a paragraph is a group of words put together to form a sentence ";
console.log(str.replace('put',"combine"));

var str="mr john  has a blue  car and blue house";
console.log(str.replaceAll('blue',"red"));

var str="mr blue  has a blue  car and blue house";
console.log(str.replace(/blue/gi,"red"));


//repeat
var str="how are you";
console.log(str.repeat(5));

//padEnd
var str="bread";
console.log(str.padEnd(7,'bread'));

var str="100";
console.log(str.padEnd(5,'12'));


//padStart
var str="bread";
console.log(str.padStart(6,'bread'));

var str="100";
console.log(str.padStart(5,'12'));


//match
var str="rain rain go away";
console.log(str.match(/ain/g));

//substring
var str="hello world";
console.log(str.substring(1,4));

//substr
var str="hello world";
console.log(str.substr(1,4));