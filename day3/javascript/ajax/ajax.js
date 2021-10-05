const home = document.getElementById('home');
const about = document.getElementById('about')
const contact = document.getElementById('contact');
const mainContent = document.getElementById('main__content');
const getData = document.getElementById('getData');


const formatTheData = (data)=>{
   const usersData = JSON.parse(data);
   let dyanmicHTML = `<table><thead><th>Id</th><th>Name</th><th>Email</th></thead><tbody>`;
   for(let i=0;i<usersData.length;i++){
       dyanmicHTML+= '<tr>';
       dyanmicHTML+= '<td>'+ usersData[i].id + '</td>';
       dyanmicHTML+= '<td>'+ usersData[i].name + '</td>';
       dyanmicHTML+= '<td>'+ usersData[i].email + '</td>';
       dyanmicHTML+= '</tr>';
   }
   dyanmicHTML+= '</tbody><table>';
   mainContent.innerHTML = dyanmicHTML;

}

const getTheData = (page)=>{
    console.log(page);
    const xhr = new XMLHttpRequest();
    if(!page.startsWith('http')){
        page+=".html"
    }
    xhr.open('GET', `${page}`, true );
    xhr.onload = function(){
        if(xhr.status===200 && xhr.readyState===4){
            if(page.startsWith('http')){
                formatTheData(xhr.responseText);
            }
            else{
                mainContent.innerHTML = xhr.responseText;
            }
          

        // console.log(xhr.responseText);
        }
    }
    xhr.send();
}

home.addEventListener('click',()=>{
    getTheData('home')
})
about.addEventListener('click',()=>{
    getTheData('about')
})
contact.addEventListener('click',()=>{
    getTheData('contact')
})
getData.addEventListener('click',()=>{
    getTheData('https://jsonplaceholder.typicode.com/users')
})



// xmlHTTPRequest

// const xhr = new XMLHttpRequest();

// HTTP Methods 
// GET --> For Getting The Data
// PUT --> For Updating The Data
// POST --> To Post the New Data
// DELETE --> To Delete Data
// when open connection between client and the server
// open  HTTP Method url async
// xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
// xhr.onload = function(){
//     if(xhr.status==200 && xhr.readyState==4){
//         console.log(xhr.responseText)
//     }
// }
// xhr.onerror = function(){
//     document.write('<h1>Something Went Wrong!!!</h1>');
// }
// xhr.send()