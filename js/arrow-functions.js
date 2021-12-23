// anonymous function expression
let printData  = function () {
    console.log("This printdata is a fn expression !");
}
printData();

// arrow function
let makeData  = () => {
    console.log("This makedata is a arrow fn !");
}

makeData();

// one line arrow function
let onelineData = ()=> console.log("Hello, Arrow function for one line statement.");

let ageCalculator = (name,yearOfBirth) => console.log(`Hello user , ${name} and your age is ${2021-yearOfBirth}`);



onelineData();
ageCalculator("John Smith", 1990);
ageCalculator("John Smith", 1909);