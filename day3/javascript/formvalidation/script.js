const btn = document.querySelector('.btn');

// Step-1 When User CLicked on the Button we need to get the all the values 

const validateTheForm = function(firstNameValue,lastNameValue,emailValue,passwordValue){
    if(firstNameValue.length<4){
        const firstNameErr = document.getElementById('firstNameErr');
        firstNameErr.innerText = "First Name Should be 4 characters"
    }
    if(lastNameValue.length<4){
        const lastNameErr = document.getElementById('lastNameErr');
        lastNameErr.innerText = "Last Name Should be 4 Characters";
    }
    if(!emailValue.includes('@')){
        const emailErr = document.getElementById('emailErr');
        emailErr.innerText = "Invaid Email";
    }
}

btn.addEventListener('click',function(e){
    e.preventDefault();
    const firstNameValue =  document.getElementById('firstName').value;
    const lastNameValue =  document.getElementById('lastName').value;
    const emailValue =  document.getElementById('email').value;
    const passwordValue =  document.getElementById('password').value;
    validateTheForm(firstNameValue,lastNameValue,emailValue,passwordValue)
})