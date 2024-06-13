const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = parseInt(input[0]);

for (let i = 1; i <= num; i++) {
    const a = parseInt(input[i].split(' ')[0]);
    const b = parseInt(input[i].split(' ')[1]);
    console.log(a + b);
}