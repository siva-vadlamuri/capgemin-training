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

const {address : {geo} } = obj;
console.log(geo.lng, geo.lat);

