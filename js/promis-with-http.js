let products = [
    { id :121,name:'Apple mac book', price:2323.34, status:true},
    { id :122,name:'Dell xz book', price:2323.34, status:false},
    { id :123,name:'Hp qw book', price:2323.34, status:true},
    { id :125,name:'Acer vs book', price:2323.34, status:false},
];

// call http for get app produts
let getProducts = function () {
    return new Promise(function (resolve , reject) {
        if(products.length>0){
            resolve(products);
        } else{
            reject("The product list is empty");
        }
    });
}

// then filter the products
let productFilter = function (products) {
    return new Promise(function (resolve , reject) {
        let filteredProduct = products.filter((p)=>{
            return p.status == true;
        });
        resolve(filteredProduct);
    })
}

// display products
getProducts().then(function(data) {
    console.log("All Products", data);
    return productFilter(data);
}).then(function(data){
    console.log("Filtered Products", data);
}).catch(function(data) {
    console.log(data);
});