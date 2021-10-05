

const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const btn = document.querySelector('.btn');
const response_text = document.getElementById('response_text');


const sendTheDataToServer = async(userObj)=>{
    const URL = 'http://localhost:3001/register'
 const response = await fetch(URL,{
    method : 'POST',
    headers : {
        "Content-Type" : "application/json",
        
    },
    body: JSON.stringify(userObj)
    
})
const data = await response.text();
// console.log(data);
response_text.innerText = data;
username.value = "";
password.value = ""
phone.value = ""
email.value = ""

}

const convertValuesIntoObject = (username,email,number,password)=>{

    const userObj = {
        username,
        email,
        number,
        password
    }
    // console.log(userObj);
    sendTheDataToServer(userObj);

}

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const usernameValue = username.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const passwordValue = password.value;
    convertValuesIntoObject(usernameValue,emailValue,phoneValue,passwordValue);

})

// async it will make your function as asynchronous function 
// await --> It will wait untill the promise get resolved or rejected 
const getTheDataFromFakestore = async ()=>{
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const response = await data.json()
        console.log(response);
    }catch{
       console.log('Error Occured')
    }

}


getTheDataFromFakestore()

