const http = require('http');

const  server = http.createServer();
server.on('request' , (request, response) => {
      request.on('data', (data) => {
        console.log(`Data ${data}`);
      });
      request.on('end', (data) => {
        console.log("End request");
      });
      response.setHeader('Content-Type', 'text/html');
      response.setHeader('X-foo', 'vidya');
      response.write('Hello World');
      response.end();
});

server.on('close', () => {
     console.log('close');
});


server.listen(3333, () => {
    console.log('Server started');
});

/*var http = new XMLHttpRequest();
var url = "/a";
var params = "lorem=ipsum&name=binny";
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);*/
//setTimeout(() => server.close(), 5000);