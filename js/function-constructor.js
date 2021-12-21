// JavaScript Constructor : a "blueprint" for creating many objects of the same "type".
// 1. Non Parametrised Constructor  // 2. Parametrised Constructor

// 1. Non Parametrised Constructor
function Person() { };  // zero argument constructor  => returns empty object

// create a person object
let person = new Person();  //empty object
console.log(person);


// 1. Non Parametrised Constructor
function Account(id,name,balance,email) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.email= email;
}

let account1 = new Account(1001,"Mike Smith",3454.456,"mike@gmail.com");
console.log(account1);
console.log(account1.name);
console.log(account1.balance);
account1.balance =3456.6545;


let account2 = new Account(10022,"Will Smith",56563454.456,"will@gmail.com");
console.log(account2);