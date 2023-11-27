let cartQuantity = 0;

// document.querySelector('#cart-summary').innerText = `Your Bag Has ${cartQuantity} Item`

function addbag() {
    cartQuantity++;
    document.querySelector('#cart-summary').innerText = `Your Bag Has ${cartQuantity} Item`
}

function remove() {
    if (cartQuantity > 0) {
        cartQuantity--;
        document.querySelector('#cart-summary').innerText = `Your Bag Has ${cartQuantity} Item`
    } else {
        document.querySelector('#cart-summary').innerText = `Nothing is Added`
    }
}

function add11() {
    cartQuantity+=2;
    document.querySelector('#cart-summary').innerText = `Your Bag Has ${cartQuantity} Item`
}


