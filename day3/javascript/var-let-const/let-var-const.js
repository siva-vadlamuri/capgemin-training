// 1st draw back you redeclare the variable 
debugger;
x();
console.log(firstName);
var firstName = "Mr";

var firstName = "Mrs";
console.log(firstName);

if(true){
    var userEmail = "example@example.com";
}
console.log(userEmail);
// console.log(lastName);
let lastName;
lastName =  "Sharma";
// let lastName = "Varma";

// let and const are block scoped variables 

if(true){
    let phoneNumber = 777777777;
    console.log(phoneNumber);
}

// const 
// Once  You declare the value you  cannot change the value
const PI = 3.14;
// PI = 3.142;

// var scope 
//  if you declare the variable with var keyword outside the function then it will be global scope 
// If you declare the variable with var keyword inside the function then it will be function scope 


function getTheTotal(firstNumber,secondNumber){
    var result = firstNumber + secondNumber;
    console.log(result);
}

getTheTotal(121,134)
console.log(result);


// Hoisting --> We can access the functions before its declaration

function x(){
    console.log('I am x');
}






