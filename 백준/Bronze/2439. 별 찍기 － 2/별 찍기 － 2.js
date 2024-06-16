const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const n = parseInt(input);

for (i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}