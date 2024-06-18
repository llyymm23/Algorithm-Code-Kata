const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = input[1].split(' ').map(Number);

const min = Math.min(...a);
const max = Math.max(...a);

console.log(min, max);