const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('');

let arr = [];

for (let i = 97; i <= 122; i++) {
    arr.push(input.indexOf(String.fromCharCode(i)));
}

console.log(arr.join(' '));