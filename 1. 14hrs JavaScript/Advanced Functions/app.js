// Anonymous Functions As Values
function anony() {
    // Anonymous Functions As Values
    let sum = function (num1, num2) {
        return num1 + num2;
    }
    // console.log(sum(4, 9));

    let newSum = sum;
    // console.log(newSum(6, 5))

    // pass as a Argument
    console.log(newSum(sum(6, 10), 4));
}


function arrow() {
    let sum = function (n1, n2) {
        return n1 + n2;
    }
    // console.log(sum(4, 7));

    // arrow notation way
    let newSum = (n1, n2) => {
        return n1 + n2;
    }
    // console.log(newSum(5, 2));

    // arrow way with single arguments
    let sq = num => {
        return num * num;
    }
    // console.log(sq(9));

    // arrow way with single line
    let cub = num => num * num * num;
    console.log(cub(2));
}

function settim_setInt() {

    setTimeout(() => {
        console.log("Deepu Ji Love You");
    }, 2000)

}

let btn = document.querySelector('#event-l');
btn.addEventListener('click', event => {
    console.log('Hello Deepu...')
})

function for_each() {

    let arr = [2, 4, 1, "Deepu"];

    // using for each loop
    arr.forEach(function (items) {
        console.log(items);
    })

    // using for each loop - 2nd way
    arr.forEach(items => console.log(items));
}

function filter() {


    let arr = [1, 2, 3, 4, 5, 6, 7];
    let newArr = arr.filter((num, idx) => {
        if (num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    })

    console.log(newArr);

}

function map() {
    let arr = [1, 2, 3, 4, 5, 6, 7];

    let squares = arr.map((num) => {
        return num * num;
    })

    squares.forEach(nums => console.log(nums));

    // 2nd way
    let newSquares = arr.map(num => num * num);
    newSquares.forEach(nums => console.log(nums));

}