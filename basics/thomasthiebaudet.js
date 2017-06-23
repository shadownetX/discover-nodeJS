/**
 * Created By Thomas Thiebaudet
 * Session D11
 * IPSSI
 * App : Generator token
 */

var limit = 5;

if (process.argv[2]) {
    var limit = process.argv[2];
}

console.log(`Votre token de ${limit} charactères :\r`);
console.log(makeRandom(limit));

function makeRandom(limit) {
    var token = '';
    var available = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i <= limit; i++)
        token += available.charAt(Math.floor(Math.random() * available.length));

    return token;
}