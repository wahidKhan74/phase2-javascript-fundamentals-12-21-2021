let username = 'Samantha';
let url2 = `https://jsonplaceholder.typicode.com/users?username=${username}`;

fetch(url2).then(response=> response.json())
.then(users=> {
    console.log('Users : ',users);
}).catch(error=>{
    console.log('Request Error : ',error);
})


fetch(url2,{
    method:'POST', // *GET, POST, PUT, DELETE, etc.
    headers : {
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body: JSON.stringify({ id:15 , username:"Samantha"})
}).then(response=> response.json())
.then(users=> {
    console.log('Users : ',users);
}).catch(error=>{
    console.log('Request Error : ',error);
})