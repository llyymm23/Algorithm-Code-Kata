const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input.map(Number);
const max = Math.max(...arr);
const count = arr.indexOf(max);

console.log(max);
console.log(count+1);