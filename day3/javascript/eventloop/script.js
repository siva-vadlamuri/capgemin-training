// JavaScript is a scyncronous Single Threaded (Main thread) Language
// It can do one Thing at a time 

// Sychronous Code is also called as Block
// Aschronhorous Code is also called non-blocking code 
console.log('First Console Log')


setTimeout(()=>{
console.log('Second Console Log')
},2000)

console.log('Third Console Log')