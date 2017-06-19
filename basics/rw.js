
const badBot = require('./packages/badbot.js');

var answersSupport = [
    'Ah bon ?',
    'Tu m\'emmerdes',
    'Ploppppppp'
];

badBot.setAnswers(answersSupport).run();