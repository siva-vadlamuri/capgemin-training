


var users = ["Shiva","Manohar",'Suraj',"Shivani"];
var firstName = "My First Name";
var lastName = "My Last Name";

// A Object will give a detailed information 
var userObj = {
    firstName : 'Mr',
    lastName : 'Manohar',
    getTheUserDetails : function(){
        console.log('User First name is '+ this.firstName + 'last Name '+ this.lastName);
    },
    isLoginedWithGoogle : false,
    hobbies : ['Sports','Cricket',"Volley ball","Coding"],
    phoneNumber : 77777777777,
}

// console.log(users[1]);
console.log(userObj["firstName"]  + ' ' + userObj.lastName )
userObj.getTheUserDetails()

// DOM Query's
// getElementById() --> only one one element 
// getElementByClassName() --> Will Return Collection of Items 
// getELementByTagName() --> It will return  collection of items 
// getElementByName() --> Irt will return the collection of items
// querySelector()  --> 
// querySelectorAll()
var firstElement = document.getElementById('firstItem')
var listItems = document.getElementsByClassName('list-item');
console.log(listItems);
console.log(firstElement);
firstElement.innerText = "React";
firstElement.style.backgroundColor = "red";



var fruit = document.querySelector('#fruitName');
var btn = document.querySelector('.btn');
var fruitsData = document.querySelector('#fruitsData');
btn.addEventListener('click',function(event){
    console.log(event);
    event.preventDefault();
    // It should add the fruit to the ul
    // alert('Button Was Clicked');
    // step-1 we need to take the value from the input field
    // step-2 we need to create an  li ELement using JavaScript 
    // step-3 add the value to li 
    // step 4 append the li to ul

    var fruitValue = fruit.value;
    var listItemEle = document.createElement('li');
    listItemEle.innerText = fruitValue;
    fruitsData.append(listItemEle);
    fruit.value = "";

})

// Mouse Events
// click 
// dblclick


// Keyboard Events
// keydown
// keyup

document.addEventListener('keydown',function(e){
    // console.log(e.key);
})


// Page Events
// resize the page 
// scroll 

// window.addEventListener('scroll',function(){
//     console.log(window.scrollY);
// })
window.addEventListener('resize',function(){
    console.log(window.innerWidth,window.innerHeight)
})


// form events 
// focus

// fruit.addEventListener('focus',function(){
//     fruit.value = "Focus State";
// })
// fruit.addEventListener('blur',function(){
//     fruit.value = "Blur State";
// })
fruit.addEventListener('change',function(){
    console.log(fruit.value);
})






