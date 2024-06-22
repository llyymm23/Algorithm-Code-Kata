const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const scores = input[1].split(' ').map(Number);

const m = Math.max(...scores);
const newScores = scores.map((score) => (score / m) * 100);

const sum = newScores.reduce((x, score) => x + score, 0);
const avg = sum / n;

console.log(avg.toFixed(2));