"use strict";
const fs = require('fs');
const path = require('path');

const readDir = (fPath) => {
    return new Promise(
        (resolve, reject) => {
            fs.readdir(
                fPath, (err, files) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(files);
                    }
                }
            );
        }
    ).then(
        files => {
            return files.map(file => path.join(fPath, file));
        }
    );
};

const lstat = (file) => {
    return new Promise(
        (resolve, reject) => {
            fs.lstat(
                file, (err, stat) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({stat, file});
                    }
                }
            );
        }
    );
};

module.exports = (fPath) => {
    return readDir(fPath).then(
        files=> Promise.all(files.map(file => lstat(file)))
    ).then(
        fileStats => fileStats.filter(fileStat => fileStat.stat.isFile())
    ).then(
        fileStats => fileStats.map(fileStat => fileStat.file)
    );
}