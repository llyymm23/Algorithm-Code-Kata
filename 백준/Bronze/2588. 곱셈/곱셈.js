const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = parseInt(input[0]);
const b = input[1].split('');

const x = a*Number(b[2]);
const y = a*Number(b[1]);
const z = a*Number(b[0]);

console.log(x);
console.log(y);
console.log(z);
console.log(x+10*y+100*z);