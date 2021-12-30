function getData(url) {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror =() => reject(xhr.statusText);
        xhr.send();
    });
}

let url = 'https://jsonplaceholder.typicode.com/users/1';
getData(url).then(data=>{
    console.log('XH Request is Successful !');
    console.log('Data : ', data);
}).catch(error=> {
    console.log('XH Request Failed !');
    console.log('Error : ', error);
});

let username = 'Samantha';
let url2 = `https://jsonplaceholder.typicode.com/users?username=${username}`;

getData(url2).then(data=>{
    console.log('XH Request is Successful !');
    console.log('Data : ', data);
}).catch(error=> {
    console.log('XH Request Failed !');
    console.log('Error : ', error);
});