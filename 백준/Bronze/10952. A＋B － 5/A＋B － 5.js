const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i=0;i<input.length;i++){
    const a= parseInt(input[i].split(' ')[0]);
    const b = parseInt(input[i].split(' ')[1]);
    const sum = a + b;
  
    if(sum===0){
        break;
    } else {
        console.log(sum)
    };
};