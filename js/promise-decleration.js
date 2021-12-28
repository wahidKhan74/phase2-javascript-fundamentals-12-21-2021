let motherPromise =  new Promise( function (resolve, reject) {
    // clean the room
    let isClean = true;
    if(isClean) {
        resolve('The room is cleaned.');
    } else{
        reject('The room is not cleaned.');
    }
});

let display = function(message) {
    console.log(message);
};

motherPromise.then(display).catch(display);