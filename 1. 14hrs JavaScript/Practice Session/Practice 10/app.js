/*

Questions:

1. Create a variable multiply and assign a function to this variable that multiplies two numbers. Call this method from the variable.

2. Create a function run Twice that takes a function as a parameter and then runs that method twice.

3. Create a button which should grow double in size on clicking after 2 seconds.

4. In the above exercise add the behavior using an event listener instead of onclick.

5. Create a function that sums an array of numbers. Do this using a for-each loop.

6. Create a function that takes an array of numbers and return their squares using map function.

*/


// Answer 01
function mul() {
    let multiply = (num1, num2) => console.log(num1 * num2);
    let multiply02 = (num1, num2) => {
        console.log(num1 * num2);
    }
    multiply(3, 8);
    multiply02(3, 8);
}

// Answer 02
function answer02() {
    return runTwice(print);
}
function runTwice(inputFunction) {
    inputFunction();
    inputFunction();
}
function print() {
    console.log("Love You Deepu!")
}


// Answer 03
function doub() {
    return btn_size();
}
function btn_size() {
    setTimeout(() => {
        let btn = document.querySelector('.size-btn');
        btn.classList.add('js-size');
    }, 2000)
}

// Answer 04
let eve_btn = document.querySelector('.eve');
eve_btn.addEventListener('click', event => {
    setTimeout(doubSize, 2000)
})

function doubSize() {
    let eve_btn = document.querySelector('.size-btn');
    eve_btn.classList.add('js-size');
}

// Answer 05
function answer05() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let sum = 0;
    arr.forEach(idx => sum += idx)
    console.log(sum);
}

// Answer 06
function answer06() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let squares = arr.map(num => num * num);
    console.log(squares);
}

