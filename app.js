var num1 = 100;
var num2 = 200;

console.log(num1 + num2); // 100200

console.log(num1 - num2); // -100

console.log(num1 * num2); // 20000

console.log(num1 / num2); // 0.5

console.log(num1 % num2); // 100

console.log(num1 ** num2); // 1e+200

console.log(num1 + num2 + 100); // 400

console.log(num1 - num2 + 100); // 0

console.log(num1 * num2 + 100); // 20100

console.log(num1 / num2 + 100); // 100.5

console.log(10+10+"20"); // 2020

var balance = 100;
if(balance >50 && balance < 100){
    console.log('You have enough balance');
}
if(balance >= 100){
    console.log('You have enough balance');
}
 else if(balance >= 50){    
    console.log('You have enough balance');
 }
else{
    console.log('You do not have enough balance');
}


var num3 = 100;
if(num3 >= 150 || num3 <= 100){
    console.log('Number is between 150 and 100');
}


var hena ="india";

if(hena == "india"){
    console.log('I am from India');
}
else if(hena == "USA"){
    if(hena.length==4){
        console.log('I am from USA');
    }
    else{
        console.log('I am not from USA');
    }
}


const fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];


fruits.slice(2, 0, "kiwi", 'watermelon');
console.log(fruits); // ['apple', 'banana', 'mango', 'orange', 'strawberry']


var lol = "iBangladesh";

lol== "India" ? console.log('I am from India'):console.log('I am not from India');