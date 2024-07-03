const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const num = Number(input[0]);

let result = '';

for (let i = 1; i <= num; i++) {
  const [count, str] = input[i].split(' ');

  for (let j = 0; j < str.length; j++) {
    result += str.charAt(j).repeat(Number(count));
  }
    
  result += `\n`;
}
console.log(result);