const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const x = input[0].split(' ')[1]
const a = input[1].split(' ').map(Number);

const arr = a.filter(num => num < Number(x));
const result = arr.join(' ');
console.log(result);