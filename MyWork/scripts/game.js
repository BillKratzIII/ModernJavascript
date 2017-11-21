let number; 
let guess;
let result;

window.onload = function() {

    setNumber();

};

function setNumber() {

    number = Math.floor( ( Math.random() * 100 ) + 1 );

};

function makeGuess() {

    guess = document.getElementById( 'guess' ).value;
    document.getElementById( 'guess' ).value = '';
    result = document.getElementById( 'result' );
    result.style.visibility = 'visible';

    if ( guess == number ) {
        result.innerHTML = 'You guessed correctly!!!';
        reset();
    } else {
        makeSuggestion();
    }

};

function makeSuggestion() {
    if ( guess > number ) {
        result.innerHTML = 'Hint: guess a lower number';
    } else {
        result.innerHTML = 'Hint: guess a higher number';
    }
};

function reset() {
    guess = null;
    setNumber();
    result.style.visibility = 'hidden';
};