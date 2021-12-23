var nameOfCompanies = ['Dell','Simplilearn','Microsoft','Wipro'];
var numbers =[10,20,30];
var products = [
    { name: 'Nikon Coolpix A10', type:'Camera', price:100},
    { name: 'Sony DSC W830', type:'Camera', price:40},
    { name: 'Apple MacBook Air', type:'Laptop', price:10},
    { name: 'Dell Inspiron A10', type:'Laptop',price:16}
]

// reduce emthod
let totalPrice = products.reduce((acc,product)=>{
    return acc+= product.price;
},0);

console.log("Total price: ", totalPrice);

//every : every element should satisfy the condtion => true
var priceStats = products.every(function(product) {
    return product.price > 5;
});
console.log("Every Result",priceStats);

//some : some element should satisfy the condtion  => true
var priceStats2 = products.some(function(product) {
    return product.price > 40;
});
console.log("Some Result",priceStats2);

// filter 
var filteredProducts = products.filter(function(product){
    return product.type ==='Camera';
})
console.log(filteredProducts);

// find element find the first match from list
var findProd = products.find((product)=>{
    return product.name == 'Sony DSC W835';
});
console.log(findProd);

// iterate over array element
nameOfCompanies.forEach((name)=>{
    console.log(name);
});

// iterate over array element perform an operation & return new array
let doubles= numbers.map(function(num) {
    return num*2;
});

let services = nameOfCompanies.map((comp)=>{
    return comp +" Services"
});
// console.log(doubles);
// console.log(services);

