//var name = "thom";

// var global
name = process.env.NAME;

console.log(process.argv[3]);

/**
 * Déclaration env var sous windows : set NAME=Joe
 * Déclaration env var sous Linux : export NAME=toto; node hello.js
 */

if (name) {
    console.log(`${global.name}`);
} else {
    console.log('Name not found');
}

//console.log('hello', name);

