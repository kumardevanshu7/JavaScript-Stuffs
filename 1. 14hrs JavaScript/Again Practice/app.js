let screen = document.querySelector('.screen');
let phrase = '';

function getNumber(string){
    phrase = phrase + string;
    screen.value = phrase;
}

function result(){
    ans = eval(phrase)
    screen.value = ans;
}

function clean(){
    phrase = '';
    screen.value = phrase;
}

function del(){
    phrase = phrase.slice(0, -1);
    screen.value = phrase;
}