/* Prevent default action of forms submit button */
window.onload = () => {

    document.getElementById('capitalForm').addEventListener("submit", (evt) => {
        evt.preventDefault();
        processText();
    })

    document.getElementById('alternateForm').addEventListener("submit", (evt) => {
        evt.preventDefault();
        runFormatting();
    })
};

// Variables
let i = 1;
let greeting;
const BREAK = '<br />';

/* Kicks off the formatting */
runFormatting = () => {

    //reset fields and assigns greeting
    reset();

    for (i; i <= greeting.length; i++) {
        formatString(greeting.slice(0, i));
    }

};

/* Makes every line alternate between all lower case and all upper case */
formatString = (theString) => {

    if (i % 2) {
        writeString(theString.toLowerCase());
    } else {
        writeString(theString.toUpperCase());
    }

};

/* Displays the text formatting to the resutls element */
writeString = (theString) => {

    document.getElementById('alternateResultLabel').style.visibility = 'visible';
    let originalHtml = document.getElementById('alternateResult').innerHTML;
    document.getElementById('alternateResult').innerHTML = originalHtml + theString + BREAK;

};

/* Initial set up & resets for new string entered */
reset = () => {

    // reset index to 1
    i = 1;
    // store greeting from input box locally
    greeting = document.getElementById('greeting').value;
    // clear the results section on page
    document.getElementById('alternateResult').innerHTML = '';

};



/* Take input from the user and capitalize the first character of each word */
processText = () => {
    // Assign user input to 'theString'
    let theString = document.getElementById('string').value;

    // Split the string on a space
    let words = theString.split(' ');

    // Declare variable to store the formatted string
    let formattedString = '';

    /* Loop through words array, capitalize the first letter of each word
       then add it to the formatted string with a space */
    for (let word of words) {
        formattedString += capitalize(word) + ' ';
    }

    // Make the result label visible
    document.getElementById('capitalResultLabel').style.visibility = "visible";
    // Assign the formatted string to the result element
    document.getElementById('capitalResult').innerHTML = formattedString.trim();
};

/*
    Capitalizes the first character of a string

    @param word The string to be capitzlized
    @returns the string with the first letter capitalized
*/
capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}