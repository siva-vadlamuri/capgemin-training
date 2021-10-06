const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('We Got The Data')
    },2000)
})

p.then((value)=>{
    // console.log(value);
})
.catch((err)=>console.log('Error Message ' +err))

// fetch is browser to make a network call
// fetch method will return a promise
// value.json()
fetch('https://fakestoreapi.com/products/').
then((value)=>{
    console.log(value);
    value.json()
    // .then((data)=>console.log(data))
})
// .catch((err)=>console.log(err))


// JSON.parse 
const users = [
    {
        "name": "Vendhanth",
        "email" : "vendanth@gmail.com",
        "phoneNumber" : 777777777,
        "address": {
            "street" : "276 th main BTM layout",
            "landmark":"Indian OIL Petrol Bunk"
        },
        "hobbies": ["Cricket","Dance","Coding"],
        "rating": null,
        "programmer" : true
    
    },
    {
        "name": "Manohar",
        "email" : "manohar@gmail.com",
        "phoneNumber" : 999999999,
        "address": {
            "street" : "276 th main BTM layout",
            "landmark":"Indian OIL Petrol Bunk"
        },
        "hobbies": ["Cricket","Dance","Coding"],
        "rating": null,
        "programmer" : true
    
    }

]
// console.log(users[0])
// console.log(JSON.parse(users))

const users2 = {
    firstName : 'Mr',
    lastName :'Sharma',
    phone: 7777777
}

// console.log(JSON.stringify(users2));

// console.log(users)

const firstPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('First Promise');
    },10000)
})

const secondPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Second Promise')
    },5000)
})
const thirdPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Third Promise is rejected')
    },4000)
})

// first promise --> CSS
// second JavaScript File --> JS
// third Promise --> API

Promise.race([firstPromise,secondPromise,thirdPromise]).then((value)=>{
    console.log(value);
})
Promise.allSettled([firstPromise,secondPromise,thirdPromise]).then((value)=>{
    console.log(value);
})
Promise.all([firstPromise,secondPromise,thirdPromise]).then((value)=>{
    console.log(value);
})