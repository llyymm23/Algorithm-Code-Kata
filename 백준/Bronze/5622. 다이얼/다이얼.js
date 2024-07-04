const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const dial = ['', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];

let answer = 0;

for (const letter of input) {
  dial.forEach((item, idx) => {
    if (item.includes(letter)) {
      answer += idx + 2;
    }
  });
}

console.log(answer);