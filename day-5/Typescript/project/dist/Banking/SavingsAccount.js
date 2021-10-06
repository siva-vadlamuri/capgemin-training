export default class SavingsAccount {
    constructor(memberId, initialBalance) {
        this.accountType = "Savings Account";
        this._memberId = memberId;
        this._balance = initialBalance;
    }
    getbalance() {
        return this._balance;
    }
    deposit(ammount) {
        this._balance += ammount;
    }
    withDraw(ammount) {
        if (ammount > this._balance) {
            console.log('Insuffient Funds in your account');
        }
        else {
            this._balance -= ammount;
        }
    }
}
