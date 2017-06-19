// basic/server.js

const http = require('http');
const server = http.createServer((request, response) => {

    var isMatched = false;

    routes.forEach((route) => {
        if (route.url == request.url) {
            route.action(request, response);
            isMatched = true;
        }
    });

    var $url = request.url;

    if (!isMatched) {
        response.statusCode = 404;
        response.end('<h1>Ooooooooooops</h1>')
    }
});

server.listen(3000, 'localhost');
console.log('server is running');

/**
 * curl -i localhost:3000
 * HTTP/1.1 200 OK
 * Date: Mon, 19 Jun 2017 13:01:06 GMT
 * Connection: keep-alive
 * Content-Length: 6
 *
 * Yeoman
 */

var routes = [
    {
        url: '/mon/chemin/vers/la/gloire',
        action: function (request, response) {
            response.end('chemin de la gloire');
        }
    },
    {
        url: '/',
        action: function (request, response) {
            response.end('Homepage');

        }
    },
]