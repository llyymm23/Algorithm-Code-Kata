const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const str = input[0].split('');
const n = parseInt(input[1]);

console.log(str[n - 1]);

