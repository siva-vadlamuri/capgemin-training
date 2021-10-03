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


// endsWith

// length
// include
// indexOf
// lastIndexOf