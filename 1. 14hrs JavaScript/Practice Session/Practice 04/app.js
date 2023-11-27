/* 

Tasks: (Playing in Console)

1. Save your name in a variable inside script tag
2. Display name from the variable on the page
3. Calculate the cost of Myntra Bag and keep it in a variable
4. Show it to console
5. Keep GST percentage as constant
6. Use eval method from math to convert string calculation into result

*/


// task 01 : solution
const myName = "Deepu"


// task 02 : solution
document.write(myName)


// task 03 : solution
let bagPrize = (15599 - (10 / 100 * 15599));
let jeansPrize = (2499 - (41 / 100 * 2499)) - 29;
let GSTs = 118 / 100;

let bagValue = Math.round((bagPrize - 272 + jeansPrize + 25 + 20) * GSTs);

let cartValue = bagValue


// task 04 : solution
console.log(cartValue)


// task 05 : solution
const GST = 118/100;


// task 06 : solution
console.log(45+78)
123

console.log(45+'78')
4578

console.log(eval(45+'78'))
4578

console.log(eval('45+78'))
123