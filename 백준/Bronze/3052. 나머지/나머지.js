const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.map(Number).map(x => x % 42);

const set = new Set(arr);

console.log([...set].length);