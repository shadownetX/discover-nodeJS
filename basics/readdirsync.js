const fs = require('fs');

var result = fs.readdirSync(__dirname);
//console.log(result);

result.forEach((value,index) => {
console.log(value);
})

console.log('........done.');
