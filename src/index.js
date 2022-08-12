const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
  
  let m = expr.match(/.{1,10}/g);
 
  for (let i = 0; i < m.length; i++) {
    arr.push(m[i]
    .replace(/10/g,'.')
    .replace(/11/g,'-')
    .replace(/0/g,''));
  }
  
  for (let key in MORSE_TABLE) {
   
    for(let i = 0; i < arr.length; i++){
            if(key == arr[i]) {
                arr[i] = MORSE_TABLE[key];
  }
 }  
}
 return arr.join('').replaceAll('**********', ' ');

}

module.exports = {
    decode
}