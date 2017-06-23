/**
 * Created By Nicolas Grévin
 * session D11
 * IPSSI
 * App : Generator token
 */

var l = 5; // default init

// if args
if (process.argv[2]) {
    var l = process.argv[2]
}

console.log(randomToken(l));

function randomToken(l) {

    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var generate = '';

    for (var i = 0; i <= l; i++)
        generate += chars.charAt(Math.floor(Math.random() * chars.length));

    return generate;
}