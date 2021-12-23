// var :  var keyword has function level scope -> reasign value
// let : let keyword has block level scope  -> reasign value
// const : const keyword has block level scope -> can not reasign value

const display = function () {
    var status = true;
    if(status) {
        var itemOne = "Apple Mac book xyz series";
        let itemTwo ="Dell book xyz series";
        const itemThree ="Lenovo xyz series";

        itemOne ="Mac book";
        itemTwo ="Dell book";

        // itemThree ="Lenovo book"; // Uncaught TypeError: Assignment to constant variable.

        console.log(itemOne);
        console.log(itemTwo);
        console.log(itemThree);
    }
    console.log(itemOne);
    // console.log(itemTwo);   // Uncaught ReferenceError: itemTwo is not defined
    // console.log(itemThree);  // Uncaught ReferenceError: itemThree is not defined
}

display();
// console.log(itemOne); // Uncaught ReferenceError: itemOne is not defined