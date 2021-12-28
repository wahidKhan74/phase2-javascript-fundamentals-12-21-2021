// The spread operator (...) helps you expand iterables into individual elements.

//copy elements from one array to another.
let companies =["Dell","Internationl","Services"];
let aboutComp = ["Private", ...companies];


//slip string into character array.
let username ="John Marry Smith";
console.log([...username]);

// split number into  arguments.
let numbers  = [10,20,30,40];

function addNumbers(a,b,c,d) {
    return a + b + c + d;
}

// let res = addNumbers(numbers[0],numbers[1],numbers[2],numbers[3]);
let res = addNumbers(...numbers);

console.log("Total : "+ res);
console.log(aboutComp);