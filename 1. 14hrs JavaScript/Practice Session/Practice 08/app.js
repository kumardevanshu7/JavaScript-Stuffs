/*

Questions:

1. Display good morning, afternoon and night based on current hour

2. Add the name to the output too.

3. Create a Button which shows the number how many times it has been pressed.
    • Also, it has different colors for when it has been pressed odd or even times.
    • The click count should also survive browser refresh.

*/


// Answer 01

// morning -> 5 - 12
// afternoon -> 12 - 18
// night -> 17 - rest of hr

function anwser() {
    let dat = new Date();
    let exHr = dat.getHours();
    // console.log(exHr)
    // exHr = 14;

    let disTxt = document.querySelector('.hr-display');

    if (exHr >= 5 && exHr < 12) {
        disTxt.innerText = 'Good Morning';
    } else if (exHr >= 12 && exHr < 18) {
        disTxt.innerText = 'Good Afternoon'
    } else {
        disTxt.innerHTML = 'Good Night'
    }
}


// Answer 02

function doGreetings(name = 'Jaan') {
    let dat = new Date();
    let exHr = dat.getHours();
    // console.log(exHr)
    // exHr = 14;

    let disTxt = document.querySelector('.hr-display');

    if (exHr >= 5 && exHr < 12) {
        disTxt.innerText = `${name} Good Morning`;
    } else if (exHr >= 12 && exHr < 18) {
        disTxt.innerText = `${name} Good Afternoon`;
    } else {
        disTxt.innerHTML = `${name} Good Night`;
    }
}

// -----> Extra Stuffs
// let btn = document.createElement('button');
// document.querySelector('.new').appendChild(btn);
// btn.innerText = 'Click To Greetings!'
// document.querySelector('.new').removeChild(btn);


// Answer 03

let counti = localStorage.getItem('counti') || 0;

function btnPress() {
    counti++;
    localStorage.setItem('counti', counti);
    updatBtn();
}

function updatBtn() {
    let myBtn = document.querySelector('.change-val');
    if (counti % 2 == 0) {
        myBtn.classList.remove('js-odd');
        myBtn.classList.add('js-even');

    } else {
        myBtn.classList.remove('js-even');
        myBtn.classList.add('js-odd');
    }
    myBtn.innerText = counti;
}

updatBtn();

