Array.prototype.lastElement = function () {
    return this[this.length-1]; 
 }

function User(firstName,lastName,email){
    // Properties 
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    // method

    this.login = function(userName,password) {
        if(userName=="user123" && password=="123456"){
            console.log('Successfull Login');
        }
        else{
            console.log('Invalid Details');
        }
    }
    this.logout = function() {
        console.log('User Logged Out');
    }


}
const user1 = new User('Mr','Varma','example@example.com');
console.log(user1);
user1.login('user123','123456');


function Student(name,email,phoneNumber,password){

    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    let particals = 20;

    this.getTheUserDetails = function () {

        console.log(`Student Name is ${this.name} and Email is ${this.email} 
        and Phone Number is  ${this.phoneNumber}
         `)
        
    }
    
    this.getTotalMarks = function (marks) {
        console.log(`Total Marks: ${marks + particals}`)
    }

}
const student1 = new Student('Rishab','rishab@gmail.com',919292921,123456);
Student.prototype.login = function (email,password) {
    // console.log(this.email, this.password)
    if(this.email==email && this.password == password){
        console.log('Welcome')
    }
    else{
        // console.log(this.email,email,this.password,password)
        console.log('Invalid Creditials')
    }
}
student1.getTheUserDetails();

student1.particals = 100;
student1.getTotalMarks(75)
student1.login('rishab@gmail.com',123456);


let arr = [23,78,12,89];
let arr2 = [45,78,12,99];


const value = arr.lastElement();
const value2 = arr2.lastElement();
console.log(value);


// optional Chaining (?.)

const UserData = {
    firstName: 'Mr',
    lastName : 'Brad',
    email : 'brand@gmail.com',
    phoneNumber : 999992292,
    address: {
        city : 'Hyderbad'
    }
    
}
console.log(UserData.address?.city)

// Boolean True Or False 
// Falsy
// 1 undefined
// 2 false
// 3 null
// 0 
//  ''

let userName = "null";
// if(userName){
//     console.log('Welcome User')
// }

