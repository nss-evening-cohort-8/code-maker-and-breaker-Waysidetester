const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

const testinput = 'asdf';
let encoded = [];
let decoded = [];

const utf16Encoder = (input) => {
    let newArray = input.split('');
    for (i = 0; i < newArray.length; i++){
        let charCode = input.charCodeAt(i);
        console.log(charCode);
        encoded.push(charCode);
    }
};

const uft61Decoder = (input) => {
    let newArray = input
    for (i = 0; i < newArray.length; i++){
        let char = String.fromCharCode(input[i]);
        console.log(char);
        decoded.push(char);
    }
};

utf16Encoder(testinput);
console.log(encoded);
uft61Decoder(encoded);
console.log(decoded);
