const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const h = parseInt(input[0]);
const m = parseInt(input[1]);

if (m>=45) {
    console.log(`${h} ${m-45}`);
} else {
    if (h>=1) {
        console.log(`${h-1} ${m+15}`);
    } else {
        console.log(`23 ${m+15}`);
    }
}