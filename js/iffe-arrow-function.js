(() => {
    console.log("This is a example of IIFE with arrow");
})();

(()=>{
    let username ="John Smith";
    let age = 30;
    console.log("Hello user, ",username);
    // nested function
    function display(age){
        console.log("And the age, ",age);
    }
    display(age);
})();