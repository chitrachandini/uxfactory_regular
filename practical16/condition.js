//if condition
var age=30;
if(age >=18) {
    console.log("eligible for voting");
}
else {
    console.log("not eligible");
}

var Name="aadhya";
if(Name == 'chandini' || Name == 'rajesh' ||Name=='anil' | Name=='jagadesh')
{
    console.log("student of uxfactory");
}
else{
    console.log("not student of ux factory");
}

//switch
switch(Name){
    case 'chandini':
    case 'rajesh':
    case  'anil':
    case 'jagadesh':
        console.log("student in uxfactory");
        break;
     default:
         console.log("not student of uxfactory");   
}

//for loop
var array=[1,2,3,4,5,6,7];
var sum=0;
for(var i=0;i<array.length;i++){
    sum=sum+array[i];
}
console.log("sum is:",sum);

//while loop
var sum=0;
var i=1;
while (i <= 10) {
    console.log("sum","=",sum, "+",i);
    sum += i;
    i++; 
}
//do-while loop
var i=0;
sum=0;
do {
    sum=sum=array[i];
    i++;
    console.log(sum);
}while(i<array.length);


