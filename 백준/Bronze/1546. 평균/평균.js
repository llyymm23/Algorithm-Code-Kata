const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const max = Math.max(...arr);

const score = arr.map(x => x / max * 100);

let sum = 0;

score.forEach(x => { sum += x; })

console.log(sum / n);