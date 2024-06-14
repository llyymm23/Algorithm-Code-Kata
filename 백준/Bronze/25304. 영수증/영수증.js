const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const price = parseInt(input[0]);
const num = parseInt(input[1]);

let sum = 0;

for (let i = 2; i < num + 2; i++) {
    const a = parseInt(input[i].split(' ')[0]);
    const b = parseInt(input[i].split(' ')[1]);
    sum += a * b;
}

console.log(price === sum ? "Yes" : "No");