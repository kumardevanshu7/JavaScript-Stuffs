/*

1. create a method to check if a number is odd or even

2. create a method to return larger of the two numbers

3. Create method to convert celsius to fehrenheit - "F = (9/5) * c / 32"

*/

// Answer 01
function oddEvenChecker(num){
    if (num % 2 === 0){
        alert("Its a Even Number");
    } else {
        alert("Its a Odd Number");
    }
}

// Answer 02
function largerNum(num1, num2){
    if (num1 > num2){
        return alert(`larger number is ${num1}`);
    } else {
        return alert(`larger number is ${num2}`);
    }
}
 

// Answer 03 
function celToFeh(celNum){
    let feh = (9/5) * celNum + 32;
    return alert(`Your Temp in Feh is ${feh}`)
}