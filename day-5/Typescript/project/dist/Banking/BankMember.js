import SavingsAccount from "./SavingsAccount.js";
export default class BankMember {
    constructor(name) {
        this._accountHolderName = name;
        this._memberId = Date.now();
    }
    createSavingAccount(startingBalance) {
        this._savingsAccount = new SavingsAccount(Date.now(), startingBalance);
    }
    depositAmmountToSavings(ammount) {
        this._savingsAccount.deposit(ammount);
    }
    withDrawFromSavingsAccount(ammount) {
        this._savingsAccount.withDraw(ammount);
    }
    getBalanceFromSavingsAccount() {
        return this._savingsAccount.getbalance();
    }
}
