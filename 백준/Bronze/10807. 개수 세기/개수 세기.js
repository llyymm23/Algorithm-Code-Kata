const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, arr, v] = input;

const result = arr.split(' ').filter(num => num === v).length;
console.log(result);