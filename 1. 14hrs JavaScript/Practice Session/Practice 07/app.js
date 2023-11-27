/*

Questions:

1. Create object to represent a product from Myntra.
2. Create an Object with two references and log changes to
one object by changing the other one.
3. Use bracket notation to display delivery-time.
4. Given an object {message: 'good job', status: 'complete'},
use de-structuring to create two variables message and
status.
5. Add function isIdentical Product to compare two product
objects.

*/

// Answer 01
let product = {
    name: 'Jeans',
    size: 'S',
    fit: 'Slim Fit',
};

// Answer 02
let copyProduct = product;
copyProduct.size = 'M';
console.log(product); // --> changes the origibal product
copyProduct.size = 'L';
console.log(product); // --> changes the origibal product
copyProduct.fit = 'Tight Fit';
console.log(product); // --> changes the origibal product

// Answer 03
let newProduct = {
    name: 'Shirt',
    size: 'S',
    fit: 'Slim Fit',
    'delivery-time': 'Same Day Delivery',
};

console.log(newProduct["delivery-time"]);

// Answer 04
let newProps = {
    message: "good job",
    statusi: "complete",
}

let {message, statusi} = newProps;
console.log(message)
console.log(statusi);

// Answer 05
function isIdenticalProduct(product1, product2){
    if(typeof product1 !== 'object' || typeof product2 !== 'object'){
        console.warn('Not Same Object');
        return false;
    }

    if(product1 == product2){
        return true;
    }

    if(product1.name === product2.name && product1.size === product2.size && product1.fit === product2.fit){
        return true;
    } else{
        return false;
    }

}

function ofObject(){
    return console.log(`Scene 01: ${isIdenticalProduct(product, "")}, Scene 02: ${isIdenticalProduct(product, product)}, and Scene 03: ${isIdenticalProduct(product, newProduct)}`);
}


// End