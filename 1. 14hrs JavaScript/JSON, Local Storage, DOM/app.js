// ------------- JSON File

// let girl = {
//     name : "Zainab",
//     herAge : 23,
//     herReview : {
//         stars : 4.5,
//         noOfReviews : 987,
//     },
// };

// console.log(girl)
// console.log(typeof girl)
// // output
// // {name: 'Zainab', herAge: 23, herReview: {…}}
// // object

// // json stringify process

// let str = JSON.stringify(girl);
// console.log(str)
// console.log(typeof str)
// // output
// // {"name":"Zainab","herAge":23,"herReview":{"stars":4.5,"noOfReviews":987}}
// // string

// // json parsing process
// let newProd = JSON.parse(str);
// console.log(newProd)
// console.log(typeof newProd);

// // output
// // {name: 'Zainab', herAge: 23, herReview: {…}}
// // object

// -------------------------------- Local Storage

let girl = {
    name: "Zainab",
    herAge: 23,
    herReview: {
        stars: 4.5,
        noOfReviews: 987,
    },
};

// console.log(girl)

// localStorage.setItem("I Love", "Deepu Ji")
// localStorage.setItem("I Love1", "Deepu Ji.")

localStorage.setItem("girl", "girl"); // not correct
localStorage.setItem("girl", girl); // not correct
localStorage.setItem("girl", JSON.stringify(girl)) // show the object as a string

localStorage.setItem("girl", JSON.stringify(girl));
let local1 = localStorage.getItem('girl')
console.log(JSON.parse(local1))


// ---------------------------- 

