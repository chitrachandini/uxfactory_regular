//1
function calculate(a){
    sum = 0;
    for(i = 0;i < a.length; i++){
        sum = sum + a[i];
    }
    console.log("sum is",sum,"average is",sum/4);
}
calculate([10,20,30,40]);

//2
function multiply(a) {
    for (i = 0;i < a.length;i++){
       a[i] = a[i] * a.length;
    }
    console.log(a);
}
multiply([2,3,1,0]);
//3
function create(a){
   var  i=1;
   while(i <= 10)
   {
       console.log(a+  "  X  "  +i+  "  =  "  +i*a+ " ");
       i++;
   }
}
create(5);
//4
function key(str){
     let a = str.split("");
    a.reverse( );
    console.log(a.join('#'));
}
key('HTML');
//5
function read(a,b){
    var arr = a[0]+a[1]+a[2];
    var arr1 = b[0]+b[1]+b[2];
    console.log([arr,arr1]);
}
read([1,2,3],[1,3,4]);
//6
let odd = [];
let even = [];
function splitOddAndEven(numbers){
    for (i = 0;i < numbers.length;i++){
        if(numbers[i] % 2 === 0){
            even.push(numbers[i]);
        }
        else{
            odd.push(numbers[i]);
        }
    }
    const returnObject = {
        odd,
        even,
    };
    return returnObject;
}
console.log(splitOddAndEven([12,5,7,10,1]));
//7
function range([a,b,c]){
    let max=Math.max(a,b,c);
    return max;
 }
 console.log(range([10,98,7]));

 //8
 function small([a,b,c]){
    let min=Math.min(a,b,c);
    return min;
 }
 console.log(small([50,67,45]));
 //9
 function check(a){
    if (a[0]  % 2 === 0){
        return "6 divided by 2";
    }
    return " 6 cant divided by 2";
 }
 console.log(check([6,99,10]));
 function check1(a){
    if (a[1]  % 2 === 0){
        return "99 divided by 2";
    }
    return "99 cant divided by 2";
 }
 console.log(check1([6,99,10]));
 function check2(a){
    if (a[2]  % 2 === 0){
        return "10 divided by 2";
    }
    return "10 cant divided by 2";
 }
 console.log(check2([6,99,10]));
 //10
 function oddNum(a){
     sum = 0;
     for( i = 1; i <= a ; i++){
        if ( i % 2 !== 0){
           sum = sum + i;
        }
    }
    console.log(sum);
}
oddNum(5);
