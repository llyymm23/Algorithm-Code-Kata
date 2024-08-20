const fs = require('fs');
let [N, ...nums] = fs.readFileSync('dev/stdin').toString().trim().split('\n');

nums = nums.map((i) => i.split(' ').map((v) => +v));
nums = nums.sort((a, b) => {
    if (a[1] - b[1] == 0) {
        return a[0] - b[0]
    }
    return a[1] - b[1];
});

let count = 1;
let arr = nums[0];

for (let i = 1; i < +N; i++) {
    if (nums[i][0] >= arr[1]) {
        count++;
        arr = nums[i];
    }
}
console.log(count);