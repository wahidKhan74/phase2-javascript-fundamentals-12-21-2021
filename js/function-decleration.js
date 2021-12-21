// function decleration  : define a task by a function
// syntax : function functName()  { }
// 1. Non Parametrised function  // 2. Parametrised function


// 1. Non Parametrised function
function showMessage() {
    console.log("Hello user welcome to JavaScript");
}

// function calling
showMessage();

// 2. One Parametrised function
function displayMessage(username) {
    console.log("Hello, "+ username + " welcome to JavaScript !");
}

displayMessage("Mike Smith");
displayMessage("John Smith");
displayMessage(534545);
displayMessage();

// 2. Multi Parametrised function
function fetchContent(name,age,gender) {
    console.log(`Hello user ${name}, your age is ${age} & your gender is ${gender}`);
}

fetchContent("Tony Stark",55,"male");
fetchContent("Tony Stark",33);
fetchContent();

// 2. Default Parametrised function
function displayContent(name="NewUser",number="1010101010") {
    console.log(`Hello user ${name}, your number is ${number}`);
}

displayContent();
displayContent("David Joe",89898989);
displayContent("David Joe");