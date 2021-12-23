let cartItems = [];

// add items to cart 
var addItems = (product)=> {
    if(product!=null & product!=undefined)
       cartItems.push(product);
}

// remove items from cart
var removeItems = (productId)=> {
    for(let index=0; index<cartItems.length; index++){
        if(cartItems[index].id == productId) {
            cartItems.splice(index, 1);
        }
    }
}

// display cart
var displayItems =() => console.log(cartItems);

addItems({id:1001,name:"Apple mac book",brand:'Apple',price:34545.5345});
addItems({id:1002,name:"Lenovo book",brand:'Lenovo',price:12545.5345});
addItems({id:1003,name:"Dell book",brand:'Dell',price:7545.5345});

displayItems();
removeItems(1002);
displayItems();
addItems({id:1004,name:"Hp book",brand:'Hp',price:27545.5345});
displayItems();