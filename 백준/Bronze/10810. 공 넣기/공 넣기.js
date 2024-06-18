const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let arr = new Array(n).fill(0);

for (let a = 1; a <= m; a++) {
    let [i, j, k] = input[a].split(' ').map(Number);
    for (let b = i; b <= j; b++) {
        arr[b - 1] = k;
    }
}

console.log(arr.join(' '));