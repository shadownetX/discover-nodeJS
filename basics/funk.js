// basics/funk.js

const path = require('path');
const util = require('util');

console.log(__dirname);
//return c:\server\ipssi-nodeJS\basics

console.log(__filename);
//return c:\server\ipssi-nodeJS\basics\funk.js

console.log(path.join(__dirname, 'etc', 'nginx'));
//return c:\server\ipssi-nodeJS\basics\etc\nginx

console.log(util.format('Bonjour %s', 'toto'));
//return Bonjour toto
