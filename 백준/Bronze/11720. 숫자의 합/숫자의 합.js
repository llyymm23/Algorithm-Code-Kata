const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = input[1].split('').map(Number);

let sum = 0;

num.forEach(x => {
    sum += x
});

console.log(sum);