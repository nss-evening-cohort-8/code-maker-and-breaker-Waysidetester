// print strings to DOM
const printToDom = (divId,stringToPrint)=>{
    document.getElementById(divId).innerHTML = stringToPrint;
}
;
// Encodes string to uft16 values
const utf16Encoder = (input)=>{
    let encoded = [];
    let newArray = input.split('');
    for (i = 0; i < newArray.length; i++) {
        let charCode = input.charCodeAt(i);
        console.log(charCode);
        encoded.push(charCode);
    }
    return encoded
}
;
// Decodes utf16 values to string
const uft61Decoder = (input)=>{
    let decoded = [];
    let newArray = input.split(',');
    for (i = 0; i < newArray.length; i++) {
        let char = String.fromCharCode(newArray[i]);
        console.log(char);
        decoded.push(char);
    }
    return decoded.join('');
}
;
// creates button selection
const buttons = document.getElementsByClassName('submission');
// applies behavior to buttons
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e)=>{
        // selects input string to run functions based on which button was clicked
        let translation = e.target.previousSibling.previousSibling
        if (e.target.id === 'text-button') {
            printToDom('encoded-print', utf16Encoder(translation.value));
            // clears input field after submission
            translation.value = null;
        } else if (e.target.id === 'uni-button') {
            printToDom('decoded-print', uft61Decoder(translation.value));
            // clears input field after submission
            translation.value = null;
        }
    }
    )
}
