// function expression : A expression syntax is used to declare a fuction 
// 1. labled function expression  2. Anonymous function expression

// 1. labled function expression
let showData = function showMessage() {
    console.log("Hello user welcome to JavaScript 'Function expression'");
}

// function calling
showData();
// console.log(showData);

// 2. Anonymous function expression
let createBox = function (width,height) {
    return width * height;
}

// console.log(createBox);
let response = createBox(100,100);
console.log(response);