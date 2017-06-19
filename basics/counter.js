var counter = 0;
var loader = ['-', '\\', '|', '/'];

setInterval(function () {

    counter++;

    /**
     * \r pour recharger la ligne courante (ou process.stdout.clearLine)
     * \n saut de ligne
     * process.stdout.write(`\rCounter : ${counter}`);
     */

    if (counter == loader.length) {
        counter = 0;
    }

    process.stdout.write(`\rCounter : ${counter}`);

}, 100);

