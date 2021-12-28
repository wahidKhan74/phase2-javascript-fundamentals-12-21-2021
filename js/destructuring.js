let numbers = [10,20,30,40,50];
let num1,num2,num3, rest;

// destructuring syntax
[num1,num2,num3] = numbers;

console.log(num1);
console.log(num2);
console.log(num3);

let firstName , lastName ,age ;

// array destructuring.
[firstName,lastName,age] = ["Mike","Willima",55];

console.log(firstName);
console.log(lastName);
console.log(age);


// object destructuring.
let customer =  {
    name:'John' , amount :2067, email:'john.smith@gmail.com'
}

let { name ,amount , email} = customer;
console.log(name);
console.log(amount);
console.log(email);

let id,username,balance;
({ id , username, balance } = { id:1200, username :"Mike@123", balance:3434.45});

console.log(id);
console.log(username);
console.log(balance);


let x , y, z ;
[x,y] = [100,300]; // x=100, y=200

[x,y,...z] = [101,102,103,102,104,105];

// console.log(x,y,z);

let uid, uname , uage , uaddress;
({uid,uname,uage,uaddress} = { uid:1001, uname:'Mike',uage:40,uaddress:{ pin:20000} });

console.log(uid,uname,uage,uaddress);







