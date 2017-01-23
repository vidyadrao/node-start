"use strict";
const fs= require('fs');
const path= require('path');

const traverseTree= (filePath) => {
    //console.log(`${filePath}`);
   return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, listOfFiles)=> {
        if(err){
            reject(err);
        }
        resolve(listOfFiles);
    });
   }).then(listOfFiles => {
        
        return listOfFiles.map(fileName => path.join(filePath, fileName));
   }); 
}


const getLstat= (fullFileName) => {
    return new Promise((resolve, reject) => {
        fs.lstat(fullFileName, (err, stat) => {
            if(err){
                reject(err);
                return;
            }
            resolve({stat, fullFileName});
        });
    });

}

const recursiveSearch = (fullfilePath, fileName, validFiles) => {
    return traverseTree(fullfilePath).then(fullFileNameList => {        
         return Promise.all(fullFileNameList.map(fullFileName => {             
            return getLstat(fullFileName);    
        }));
    }).then(data => {
       return Promise.all(data.map(obj => {
            if(obj.stat.isDirectory()){               
                return recursiveSearch(obj.fullFileName, fileName, validFiles);
            }else if(obj.fullFileName.search(fileName) > -1){
                validFiles.push(obj.fullFileName);
            }
        }));
    }).then(data => validFiles);
}

module.exports.find= (fullFilePath, fileName) => {
    const validFiles = []; 
    return recursiveSearch(fullFilePath, fileName, validFiles);
}