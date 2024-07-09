var fs = require('fs');
var input = fs.readFileSync('/dev/stdin')

if(1000<=input && input<=3000 ) {
    console.log(input-543);
}