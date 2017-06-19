// packages/badbot.json

const readline = require('readline');

module.exports = new BadBot();

function BadBot() {

    this.answers = [];

    this.setAnswers = function (answers) {
        this.answers = answers;
        return this;
    };

    this.run = function () {
        var rw = readline.createInterface({
            input: process.stdin,
            outpout: process.stdout
        });

        var self = this;

        rw.on('line', (data) => {

            var line = data.trim();

            if (line == "bye") {
                process.exit();
            }

            var random = Math.floor(Math.random() * self.answers.length);

            process.stdout.write(self.answers[random] + '\n');

        });

        process.on('exit', () => {
            process.stdout.write('Salut pov\' type');
        });

        process.stdout.write('Salut glandu \n');
    };

}