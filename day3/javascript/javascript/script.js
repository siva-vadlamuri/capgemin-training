var firstName = "Mr";
firstName = 234;

var lastName;
console.log(lastName);

var arr = ['apple','kiwi','bannana','kiwi'];
// includes 
// The return type of include is a boolean 
 console.log(arr.includes('jackfruit'));

//  indexOf ,lastIndexOf 
// indexOf will return the index value of first occurence 
// lastIndexOf will return the index value of last occurence 
console.log(arr.lastIndexOf('kiwi'))

// push and pop 

// slice and splice 
// slice is to extract the some portion of elements 
console.log(arr.slice(0,3))

// shift and unshift 
// shift is used to delete the element from the starting of the array 
// unshift is used to add an element to the starting of the array
console.log(arr);
arr.shift();
console.log(arr);

arr.unshift('papaya')
console.log(arr);

// splice which is delete or add the element in the middle of the array

arr.splice(2,1);
console.log(arr);

// reverse is used to reverse the elements in the array 
console.log(arr.reverse())

var myNumbers = [23,78,12,34,67,12,'apple','kiwii','Apple','Bannana'];

// console.log(arr.sort())
console.log(myNumbers.sort())

console.log(typeof myNumbers)
console.log(myNumbers.toString())
console.log(typeof myNumbers.toString())

// map reduce filter

// String Methods 
var myName = "Mr Sham";
console.log(myName[0]);
// length

// charAt(2)
console.log(myName.charAt(3))
var lastName = " Prasad";

// concat
console.log(myName.concat(lastName))

// charCodeAt

console.log(myName.charCodeAt(myName.length-2))



// trim
// Trim is use to remove the spaces from first and last

var username = " siva127 ";
console.log(username.trim())

// trimStart
// trimEnd
// toUpperCase
// It will convert the all the characters into Upper case
console.log("apPLe".toLowerCase())
// toLowerCase
// It will convert all the character into lower case


// startsWith 

var email = "example@gmail.com";
console.log(email.startsWith('example'));
console.log(email.endsWith('@yahoo.com'));

console.log(email.substring(0,5));
console.log(email)


// Replace 


// endsWith

// length
// include
// indexOf
// lastIndexOf


console.log(10/5); //2
console.log(10%2);  //0
console.log(2**10)

// Difference between == and ===

console.log("1"===1);
// i am comparing a number with a string 

// login system 
// username and password 

var username = "admin";
var password = "admin";

// if, else if, for while, do while 

if(username==="admin" && password==="admin"){
    console.log('Welcome '+ username);
}else{
    console.log('Invalid Creditials')
}

var isLoginedWithGoogle = false;
var isLoginedWithApple = true;

if(isLoginedWithApple || isLoginedWithGoogle){
    console.log('Redirected To Dashboard')
}else{
    console.log('Please Login')
}

// not !
// console.log(!true);


// personAge 
// Step-1 if the person age is less than 18 he is not eligible for vote else he is eligible

var personAge = 12;
if(personAge<18){
    console.log('You are not eligible for vote');
}
else {
    console.log('You are eligible')
}

// temperature API 
var temperatureOfTheDay = 26;
if(temperatureOfTheDay<=18){ //false
    console.log('Its too cool');
}
else if(temperatureOfTheDay>18 && temperatureOfTheDay<=30){ // true
    console.log('Cool')
}
else{
console.log('Temperature is Moderate')
}

// Application 
// Based On the Role We need to switch to different role

// admin --> You have all the right 
// subadmin --> Adding a user or deleting a user 
// test --> They will conduct a test
// user --> Which consumes the content or attending the test
var role = "test";
switch(role){
 case "admin":
     console.log('You have all the permisions');
     break;
case "sub-admin":
    console.log('You can add a user or delete a user');
 case "test" :
     console.log('You can only conduct a test') 
 default:
     console.log('You can consume the content');    

}

// function 
// function is a 
// we can reuse the code 
// public void addTheUser(){}

// How To declare a function 
// function functionName(){

// }
// function declaration or Function Statement
function addTwoNumbers(firstNumber,secondNumber){
console.log(firstNumber + secondNumber);
}

// call the function, invoking the function,

addTwoNumbers(10,20)

// function expression, variable function 
var myFunctionExpression = function(){
 console.log('I am function expression')
}


// ananmous Function 
// Function doesnt have name it is called anonomous function
// function (){

// }

// self execution function 
// It will execute itself 

// (function(){
//     console.log('IIFE Immedialtly Invoked Function expression')
// })();
// (function selfExecution(){
//     console.log('Self Executing Function');
// })()

// (function(){
//     console.log('IIFE function')
//   })();

//   (function () {
//     // some initiation code
//     let firstVariable;
//     let secondVariable;
//   })();

// call back function 
// callback function --> if you pass a function as an argument to another function it is called as call back function 

function greetTheUser(name){
    console.log('Welcome'+ name);
}

function welcomeText(callback){
    // var username = prompt("Enter your name");
    // If user is did some thing after that you want to execute a piece of code 
    callback(username);
}
welcomeText(greetTheUser);



// function callTheCallBack(cb){
//   var a = 20;
//   if(a==10){
//       cb();
//   }
// }
// callTheCallBack(function(){
//     console.log('I am a callback function')
// })



// function with return statement 
 
function calculateTheTotal(first,second,third){
    var result = first+ second+ third;
    return result;
   
}

var finalValue = calculateTheTotal(236,789,512);
console.log(finalValue)


// function with default parameters 

function calculateGST(ammont,gst=18){
    // console.log(ammont,gst);
    
     var totalValue =   ammont + (ammont * gst/100)
     console.log(totalValue);
}
calculateGST(100000);
calculateGST(200000,22);








