// callback  ->  When we pass a function as an argument to another function.
var x = function ()  {
    console.log("I am function 'X'");
}

var y = function (callback)  {
    console.log("I am function 'Y'");
    // console.log(a);
    callback();
}

y(x);