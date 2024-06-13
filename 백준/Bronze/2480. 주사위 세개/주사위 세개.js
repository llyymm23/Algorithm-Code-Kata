const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

if (a == b && b == c) {
    console.log(10000 + a * 1000);
} else if (a == b || b == c) {
    console.log(1000 + b * 100)
} else if (c == a) {
    console.log(1000 + c * 100);
} else {
    console.log(Math.max(a, b, c) * 100);
}