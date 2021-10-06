"use strict";

var firstName = "Mr";
var phone = 766171621;
var hobbies = ["Sports", "Coding", "Dance"];
var isLoggined = false;
var data = 1234;
var addTwoNumber = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};
addTwoNumber(12, 34);
var obj = {
    firstName: 'Mr',
    lastName: 'Rishab',
    hobbies: ["Sports", "Coding", "Dance"]
};
obj.hobbies.map(function (value) {
    console.log(value.toUpperCase());
});
