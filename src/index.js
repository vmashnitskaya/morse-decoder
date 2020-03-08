const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};


function decode(expr) {
  let splittedArray = splitToArray(expr, 10);

  splittedArray = splittedArray.map(element => {
    if (element == '**********') return ' ';


    element = splitToArray(element, 2)
      .map(elem => {
        if (elem == '00') return '';
        if (elem == '10') return '.';
        if (elem == '11') return '-';
      })
      .join('')
      .trim();

    for (let key in MORSE_TABLE) {
      if (element == key) return MORSE_TABLE[key];
    }

  })

  return splittedArray.join('');
}


function splitToArray(string, num) {
  let result = [];

  for (let i = 0; i < string.length; i += num) {
    result.push(string.slice(i, i + num));
  }
  return result;
}



module.exports = {
  decode
}