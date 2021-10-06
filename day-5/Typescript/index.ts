
export {}
const firstName : string = "Mr";
const phone : number = 766171621;
const hobbies  : string[] = ["Sports","Coding","Dance"];
const isLoggined : Boolean = false;
const data : any = 1234;
const addTwoNumber = (firstNumber:number,secondNumber:number):number=>{
    
    return firstNumber + secondNumber;

}
addTwoNumber(12,34)

const obj : {firstName : string,lastName:string,hobbies : string[]} = {
    firstName : 'Mr',
    lastName : 'Rishab',
    hobbies : ["Sports","Coding","Dance"]

}

obj.hobbies.map((value)=>{
    console.log(value.toUpperCase())
})