const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);

for (i = 1; i <= n; i++) {
    const a = Number(input[i].split(' ')[0]);
    const b = Number(input[i].split(' ')[1]);

    console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}