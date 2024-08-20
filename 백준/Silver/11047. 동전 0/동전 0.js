const fs = require('fs');
var [input, ...nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.split(' ')[0]);
let K = Number(input.split(' ')[1]);

nums = nums.map((e) => +e).sort((a, b) => b - a);

let count = 0;

for (let i = 0; i < N; i++) {
    const a = Math.floor(K / nums[i]);
    K = K - a * nums[i];
    count += a;
}

console.log(count);