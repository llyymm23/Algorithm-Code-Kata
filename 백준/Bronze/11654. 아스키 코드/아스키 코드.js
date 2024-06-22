const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const result = input.charCodeAt();

console.log(result);