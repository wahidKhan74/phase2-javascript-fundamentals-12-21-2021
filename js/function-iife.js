
// Imediately invoked function expression. -> self executing function
// syntax 
(function () {
    console.log("Imediately invoked function expression. -> self executing function");
})();

// IIFE
(function(){
    let username ="John Smith";
    let age = 30;
    console.log("Hello user, ",username);
    // nested function
    function display(age){
        console.log("And the age, ",age);
    }
    display(age);
})();

let firstName;
let lastName;

(function() {
    firstName ="John";
    lastName ="Smith"
})();

console.log(firstName, lastName);