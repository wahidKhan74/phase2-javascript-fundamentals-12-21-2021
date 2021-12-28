class Account {

    // constructor
    constructor(id,username,balance) {
        this.id = id;
        this.balance  = balance;
        this.username = username;
    }

    // es6 : get & set methods { where we use methods as object properties }
    get Id() { return this.id; }
    set Id(id) { this.id = id; }

    get Username() { return this.username; }
    set Username(username) { this.username = username; }

    get Balance() { return this.balance; }
    set Balance(balance) { this.balance = balance; }

    // baking operation
    showBalance() {
        console.log(` The account - ${this.id} has blance - ${this.balance}`);
        return this.balance;
    }

    withdrawAmt(amount) {
        return this.balance -= amount;
    }

    depositAmt(amount) {
        return this.balance += amount;
    }
}

let account = new Account();

//set all propertie svia setter methods
account.Id= 10000111;
account.Username = "John Smith";
account.Balance = 4534554.56;

// use get methods
console.log("The Id : ", account.Id);
console.log("Name : ", account.Username);
console.log("Balance : ", account.Balance);

console.log("--------------------");
// bank operation
account.showBalance();
account.withdrawAmt(1000000);
account.showBalance();
account.depositAmt(1000000);
account.showBalance();

console.log(account);