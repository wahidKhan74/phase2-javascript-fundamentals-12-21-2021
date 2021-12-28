class Account {

    // constructor
    constructor(id,username,balance) {
        this.id = id;
        this.balance  = balance;
        this.username = username;
    }

    // get & set methods
    getId() { return this.id; }
    setId(id) { this.id = id; }

    getUsername() { return this.username; }
    setUsername(username) { this.username = username; }

    getBalance() { return this.balance; }
    setBalance(balance) { this.balance = balance; }

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
account.setId(10000111);
account.setUsername("John Smith");
account.setBalance(4534554.56);

// use get methods
console.log("The Id : ", account.getId());
console.log("Name : ", account.getUsername());
console.log("Balance : ", account.getBalance());

console.log("--------------------");
// bank operation
account.showBalance();
account.withdrawAmt(1000000);
account.showBalance();
account.depositAmt(1000000);
account.showBalance();

console.log(account);