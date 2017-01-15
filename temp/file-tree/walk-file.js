"use strict";
var walk = require('walk')
    , fs = require('fs')
    , path = require('path')

    , walker
    ;

walker = walk.walk("./node_modules", {});
console.dir({x:1});
walker.on("file", function (root, fileStats, next) {
    console.log(path.join(root, fileStats.name));

    next();
});


