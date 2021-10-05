// Desstructuring 
// Array Destructuring
const arr = [23,90,12,12,78];
const [firstValue,secondValue,,,lastValue] = arr;
console.log(firstValue,secondValue,lastValue);

// Object Destructuring
const obj = {
    id: 11,
    name: "Rajesh",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Bangalore",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  }


//   console.log(obj.address.geo.lat)
console.log(obj.address.geo.lng);
// 

const {address : {geo} } = obj;
// const {company:name}
console.log(geo.lng, geo.lat);

// Template Literals 

const firstName = "Mr";
const lastName = "Tejas";
document.write('Hello worldd');

// document.write('<h1>'+'first name is ' + firstName + 'last Name '+ lastName + '</h1>')

document.write(`User First Name ${firstName} and last name is ${lastName}`)

// Arrow Functions ()=>


const calculateTheSum = (first,second)=>  first + second
const result =  calculateTheSum(712,811);
console.log(result);

const findTheSquare = num => num * num;
const squareOfaNumber = findTheSquare(121)
console.log(squareOfaNumber);

const doubleTheNumbers = num =>(
num *2
)

const doubleResult = doubleTheNumbers(12);
console.log(doubleResult);

const person = [
    {
        name : 'rishabh',
        age : 23,
    },
    {
        name : 'Vedanth',
        age : 25
    },
    {
     name : 'Manohar',
     age : 21,
    }
]


// sort method first parameter it will take compareFunction
const sortedPeople = person.sort((firstPerson,secondPerson)=>{
    
//    if(firstPerson.age>secondPerson.age){
//        return -1;
//    }
return firstPerson.age - secondPerson.age;

})
console.log(sortedPeople);

// forEach

const numbers = [23,12,18,19,22];
const doubleTheValues = numbers.forEach((value)=> {
    return value*2;
} );
console.log(doubleTheValues);
// for each there will be no return keyword

console.log('<<<<<<<<<<>>>>>>>>>>>>>>')

// Map Reduce Filter  
// When you return using map filter and reduce 
const tripleTheValues = numbers.map((num)=> num*3);
console.log(tripleTheValues);
 

const products = [
    {
        id : 1,
        productName : 'Iphone 12 pro',
        productPrice : 120000
    },
    {
        id : 2,
        productName : 'Google Pixel',
        productPrice : 70000
    },
    {
        id : 3,
        productName : 'One Plus 9',
        productPrice : 50000
    },
    {
        id : 4,
        productName : 'Lenovo A7000',
        productPrice : 10000
    }
]

// filter --> 
const filteredProducts = products.filter((product)=> product.productPrice<=50000)
console.log(filteredProducts);

// reduce -->
 const totalPrice = products.reduce((total,currentValue)=> {
    //  console.log(total,currentValue.productPrice);
   return  total + currentValue.productPrice
 }, 0)
 console.log(totalPrice);


//  Spreed And Rest Operator
// ...

// Rest Operators 
// ...params 
// If you can pass infinite number of arguments 
const calculateTheTotal = (...params)=>{
// console.log(params);
return params.reduce((total,currentValue)=> total + currentValue,0)
}

const finalValue = calculateTheTotal(12,14,17);
console.log(finalValue);

// Spreed Operator 
const obj1 = {
    firstName : 'Mr',
    lastName : 'Shivani',
}

const obj2 = obj1;
obj2.firstName = 'Mrs';
console.log(obj1);

const obj3 = {...obj1};
obj3.lastName = "Sharma";
console.log(obj1,obj3);

const myArr = [23,16,19,22,11];
const secondArr = [78,89,12,99];

// myArr.push(...secondArr);
// console.log(myArr);
console.log(myArr);
const thirdArray = [...myArr,...secondArr];
console.log(thirdArray);


// console.log(...myArr);

// for(let i=1;i<=10;i++){
    
//     console.log(i);
// }
// let value = 10;
// value+= 70;

// while(value<=100){
//     console.log(value);
//     value++;
// }

const arrOfNumbers = [12,45,89,12,45];
// for(let i=0;i<arrOfNumbers.length;i++){
//     console.log(arrOfNumbers[i]);
// }
// for of is mainly for arrays
for(let value of arrOfNumbers){
    
    console.log(value);
}

// for in is mainly iterate through objects
const personObject = {
    id: 11,
    name: "Rajesh",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Bangalore",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  }

  const { address } = personObject;
  for (let key in address) {
      console.log(`The Key is ${key} and value is ${address[key]}`)
      
  }







