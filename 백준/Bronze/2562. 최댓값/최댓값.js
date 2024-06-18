const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input.map(Number);
const max = Math.max(...arr);
let count = 0;

for(let i=0;i<arr.length;i++){
    count++;
    if(arr[i]===max){
        break;
    }
}

console.log(max);
console.log(count);