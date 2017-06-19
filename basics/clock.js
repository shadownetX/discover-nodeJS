function printer(d) {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    var hours = d.getHours();
    var minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    var seconds = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();

    process.stdout.write(`${hours}:${minutes}:${seconds}`);
}

setInterval(() => {
    printer(new Date());
}, 1000);