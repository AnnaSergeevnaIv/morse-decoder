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
    let result = ''
    for (let i = 0; i < expr.length / 10; i++) {
        let letter = expr.slice(i * 10, i * 10 + 10)
        if (letter === '**********') {
            result += ' '
            continue
        }
        let subresult = ''
        for (let j = 0; j < letter.length / 2; j++) {
            switch (letter[j*2] + letter[j*2+1]) {
                case '00' : break;
                case '10' : subresult += '.'; break;
                case '11' : subresult += '-'; break;
            }
        }
        result += MORSE_TABLE[subresult]
    }

    return result
}

module.exports = {
    decode
}
