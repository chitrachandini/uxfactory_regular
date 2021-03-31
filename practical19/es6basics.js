//keywords
function add(){
    var a =10;
    let b=20;
    const c=30;
    {
        var a =40;
        let b=50;
        const c=60;
        console.log("a=",a);
        console.log("b=",b);
        console.log("c=",c);
    }
    console.log("a=",a);
    console.log("b=",b);
    console.log("c=",c);
}
add();

//Arrow function
/*let add=(a=10,b=20,c=30,d)=>{
    return a+b+c+d;
}
let sum=add(20,30,40,50);
console.log(sum);*/

//const sum=(a,b)=>a+b;
//var value=sum(10,20);
//console.log(value);

let product=(a,b,c,d=10)=>{
    return a*b*c*d;
}
var result=product(2,3,4,);
console.log("product is:",result);