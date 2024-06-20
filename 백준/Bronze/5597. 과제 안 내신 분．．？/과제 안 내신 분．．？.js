const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const result = [];

for (let i = 1; i <= 30; i++) {
    if (input.includes(i)) {
        continue;
    } else {
        result.push(i);
    }
}

console.log(result.join('\n'));