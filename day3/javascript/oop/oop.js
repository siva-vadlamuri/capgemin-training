
class Employee{

    #employeId;
    employeeName;
    employeEmail;
    employeAddress;
    employePassword;
    constructor(name,email,address,password){
        console.log('Constructor Called');
        this.#employeId = Date.now();
        this.employeeName = name;
        this.employeEmail = email;
        this.employeAddress = address;
        this.employePassword = password

    }

    getTheEmployeDetails(){
        return `Employee Name is ${this.employeeName} and Employee Email is ${this.employeEmail}
        Employee Addrees is ${this.employeAddress}
        `
    }

    login(employeEmail,employePassword){
    // 
    if(this.employeEmail==employeEmail && this.employePassword===employePassword){
        console.log('Logined Success');
    }
    
    }
    logout(){
        // Logout Logic Will Go here
    }

}

const employee1 = new Employee('Manohar','manohar@gmail.com','Vizag',123456);
employee1.employeId = 123;

console.log(employee1);
const employeDetails = employee1.getTheEmployeDetails();
console.log(employeDetails);

class ITDepartment extends Employee{

    
    allReport = [];

    addReports(report){
    
        this.allReport.push({
            name : this.employeeName,
            reportMessage : report,
        });

    }
    


}

const firstPerson = new ITDepartment('Siva','siva@gmail.com','Bangalore',8888888);
console.log(firstPerson);
firstPerson.login('siva@gmail.com',8888888);
firstPerson.addReports('I cannot install node js in my System')
// console.log(firstPerson.allReport);
firstPerson.addReports('My system is restarting again and again')
console.log(firstPerson.allReport)