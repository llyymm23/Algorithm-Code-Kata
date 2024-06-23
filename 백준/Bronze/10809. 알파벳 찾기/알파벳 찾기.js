const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let arr = [];

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    arr.push(input.indexOf(String.fromCharCode(i)));
}

console.log(arr.join(' '));