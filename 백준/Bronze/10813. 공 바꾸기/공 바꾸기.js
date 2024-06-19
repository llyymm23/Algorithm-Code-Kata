const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const arr = Array(n).fill().map((v, i) => i + 1);

for (let a = 1; a <= m; a++) {
    let [i, j] = input[a].split(' ').map(Number);
    [arr[i - 1], arr[j - 1]] = [arr[j - 1], arr[i - 1]];
}

console.log(arr.join(' '));