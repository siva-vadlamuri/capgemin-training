// setTimeout
// After specific time
// setTimeout(function(){
//     alert('After 5 seconds')
// },5000)
// // setInterval
// setInterval(function(){
//     console.log('Set Interval');
// },2000)

// We need some images
const images = [
  "https://images.unsplash.com/photo-1619845146106-38abf07e9c99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1617704548623-340376564e68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1541447049383-911a71d68407?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
];
// teslaImage
const teslaImage = document.getElementById("teslaImage");
teslaImage.src = images[0];

let i = 1;
// document.addEventListener('load',function(){

// })
setInterval(function () {
  if (i < images.length) {
    teslaImage.src = images[i];
    i++;
  } else {
    i = 0;
  }
}, 4000);

const datetime = document.getElementById("datetime");
// date
const getTheDay = function (day) {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
     case 6:
         return 'Saturday'; 
  }
};
const date = new Date();
const day = date.getDay();
const month = date.getMonth() + 1;
const todayDate = date.getDate();
const currentYear = date.getFullYear();
console.log(Date.now())
datetime.innerText =
  getTheDay(day) + "-" + todayDate + "-" + month + "-" + currentYear;

  