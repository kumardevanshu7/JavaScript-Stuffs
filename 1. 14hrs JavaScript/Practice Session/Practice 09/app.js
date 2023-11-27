/*
 
Questions: 

1. Create an array of numbers [5,6]. Add 4 at the beginning and 7 at the end of the array.
2. Create a method to return an element at a particular position in the array.
3. Create an array copy using slice method.
4. Create a while loop that exits after counting 5 prime numbers.
5. Modify the above loop to finish using break.
6. Create a for loop that prints number 1 to 10 in reverse order.
7. Using continue only print positive numbers from the given array [1,-6,5,7,-98]
8. Using accumulator pattern concatenate all the strings in the given array ['KG', 'Coding', 'Javascript', 'Course', 'is', 'Best']

*/


// Answer 01
function ans01() {
    let deepu = [17, 30];
    deepu.unshift(7);
    console.log(deepu);
    deepu.push(37);
    console.log(deepu);
}


// Answer 02
function ans02() {
    let chhavi = [3, 4, 1, 7, 9, 2]
    function getElement(arr, idx) {

        for (let i = 0; i < arr.length; i++) {
            if (i === idx) {
                return arr[i];
            }
        }
    }
    let ans = getElement(chhavi, 3);
    console.log(ans)
}


// Answer 03
function ans03() {
    let eva = [4, 3, 7, 5, 9, 1];
    let new_arr = eva.slice(0,)
    let new_arr1 = eva.slice(0, 2)
    console.log(new_arr1)
}


// Answer 04
function ans04() {

    let num = 2;
    let count = 0;
    while (count < 5) {
        if (isPrime(num)) {
            count++;
            console.log(num);
        }
        num++;
    }

}
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


// Answer 05
function ans05() {

    let num = 2;
    let count = 0;
    while (true) {
        if (isPrime(num)) {
            count++;
            console.log(num);
        }
        num++;
        if (count > 5) {
            break;
        }
    }

}


// Answer 06
function ans06() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}


// Answer 07
function ans07() {
    let arr = [1, -6, 5, 7, -98];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            continue;
        }
        console.log(arr[i]);
    }
}

// Answer 08
function ans08() {
    let arr = ['I', 'Love', 'You', 'So Much', 'Deepu', 'Ji']

    // 1st Way
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + ' ';
    }
    console.log(result);

    // 2nd Way
    // console.log(arr.join(' '));

}

