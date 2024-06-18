const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ').map(Number);

const result = arr.filter(num => num === Number(input[2])).length;
console.log(result);