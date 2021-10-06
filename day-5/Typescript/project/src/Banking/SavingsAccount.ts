
export default class SavingsAccount {
    private _memberId : number;
    private _balance : number;
    private accountType : string = "Savings Account";
    constructor(memberId:number,initialBalance:number){
        this._memberId = memberId
        this._balance = initialBalance;
    }
    public getbalance():number{
        return this._balance;
    }
    public deposit(ammount:number):void{
        this._balance+= ammount;
    }
    public withDraw(ammount:number):void{
        if(ammount>this._balance){
            console.log('Insuffient Funds in your account');
        }
        else{
            this._balance-= ammount;
        }
    }
}