const http= require('http');

const server= http.createServer((request, response) => {
    console.log(request.url );
    if(request.url === '/hello') {
        response.write('hello');
    } else if(request.url === '/world') {
        response.setHeader('Content-Type', 'text/plain');
        response.write(`
        <html>
            <body><h1>World</h1></body>
        <html>
        `);
    } else {
        response.statusCode = 404;
    }
    response.end();
});

server.listen(3333);

