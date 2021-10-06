console.log(this)
// This is keyword at global will point to Window Object


function myFunc(){
    const a = 10;
    const b = 20;
    console.log(this);
}
myFunc();


const getTheUserDetails = function(state,city){
    console.log(this.firstName + ' '+ this.lastName + " "+ state + " "+ city);
    console.log(this)
}
let obj = {
     firstName : "Mr",
     lastName : "rishabh",
    
     
     
}
// obj.getTheUserDetails();
getTheUserDetails.call(obj,"Karnataka","Bangalore");

// call, apply, bind

let obj2 = {
    firstName : "Sachin",
    lastName : "Tendulkar",
    
}
getTheUserDetails.apply(obj2,["Madhya Pradesh","Bhopal"]);


let obj3 = {
    firstName : "Siva",
    lastName : "Rama Raju"
}

const userFunc = getTheUserDetails.bind(obj3)
console.log(userFunc);
userFunc("Andhra Pradesh","Vizag");
