const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const n = parseInt(input[0]);

for (let i = 1; i <= n; i++) {
    const str = input[i].trim();
    console.log(str.substring(0, 1) + str.substring(str.length - 1, str.length));
}
