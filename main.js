const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};


const utf16Encoder = (input) => {
    let encoded = [];
    let newArray = input.split('');
    for (i = 0; i < newArray.length; i++){
        let charCode = input.charCodeAt(i);
        console.log(charCode);
        encoded.push(charCode);
    }
    return encoded
};

const uft61Decoder = (input) => {
    let decoded = [];
    let newArray = input.split(',');
    for (i = 0; i < newArray.length; i++){
        let char = String.fromCharCode(newArray[i]);
        console.log(char);
        decoded.push(char);
    }
    return decoded.join('');
};

// utf16Encoder(testinput);
// console.log(encoded);
// uft61Decoder(encoded);
// console.log(decoded);

const buttons = document.getElementsByClassName('submission');
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        let translation =e.target.previousSibling.previousSibling.value
        if (e.target.id === 'text-button') {
            printToDom('print-here', utf16Encoder(translation));
        }
        else if (e.target.id === 'uni-button'){
            printToDom('print-here', uft61Decoder(translation));
        }
    })
}