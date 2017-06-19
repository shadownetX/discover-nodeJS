const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
    files.forEach(function (value){
        console.log(value);
    })
});

console.log('......done.');