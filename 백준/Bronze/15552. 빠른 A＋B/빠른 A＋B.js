const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
 
const count = parseInt(input[0]);
let answer = '';
 
for (let i = 1; i <= count; i++) {
    const num = input[i].split(' ');
    answer += Number(num[0]) + Number(num[1]) + '\n';
}

console.log(answer);
