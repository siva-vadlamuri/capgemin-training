import SavingsAccount from "./SavingsAccount";
export default class BankMember {
   private _memberId : number;
   private _accountHolderName : string;
   private _savingsAccount! : SavingsAccount



   constructor(name:string){
       this._accountHolderName = name;
       this._memberId = Date.now();
   }
   public createSavingAccount(startingBalance:number):void{
       this._savingsAccount = new SavingsAccount(Date.now(),startingBalance)
   }
   public depositAmmountToSavings(ammount:number):void{
       this._savingsAccount.deposit(ammount);
   }
   public withDrawFromSavingsAccount(ammount:number):void{
       this._savingsAccount.withDraw(ammount);
   }
   public getBalanceFromSavingsAccount():number{
       return this._savingsAccount.getbalance();
   }
}