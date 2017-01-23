const http = require('http');
const fs = require('fs');
const path = require('path');
const filePath = "/";
const server = http.createServer();
const lstat = (fullFileName) => {
    return new Promise((resolve, reject) => {
       fs.lstat(fullFileName, (err, stat) => {  
            if(err){
                return reject(err);            
            }
            return resolve({'stat' : stat, 'name' : fullFileName});
        });                
    });

}
const readFileToResponse = (fileName, response) => {
    const readable = fs.createReadStream(fileName);
    readable.pipe(response);
    
}
const createDirList = (fileName, response) => {
    fs.readdir(fileName, (err, listOfFiles) => {
        if(err){
            response.writeHead('404');
            return response.end();
        }
        
        Promise.all(
            listOfFiles.map(fName => lstat(path.join(fileName, fName)))
        ).then(listOfStats => {
            response.setHeader('Content-Type', 'text/html');
            response.write('<ul>');
            listOfStats.map(obj => {               
                if(obj.stat.isDirectory()){                    
                    response.write(`<li>${path.basename(obj.name)}</li>`);
                }                            
            });
            response.end('</ul>');
        });
    });
}

server.on('request', (req, res) => {
    const fullFilePath = filePath+decodeURI((req.url).replace(/\/$/, ''));
    lstat(fullFilePath).then((obj) => {        
        if(obj.stat.isDirectory()){
            createDirList(fullFilePath, res);
        }else{
            readFileToResponse(fullFilePath, res);
        }
    });  
    
});
server.listen(3333);