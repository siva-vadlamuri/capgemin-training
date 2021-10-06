import BankMember from "./Banking/BankMember";

const john = new BankMember('John');
console.log(john);
john.createSavingAccount(1000)
console.log(john);
john.depositAmmountToSavings(2000);
console.log(john);
console.log('Folder structure is done');
