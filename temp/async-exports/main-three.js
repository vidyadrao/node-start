"use strict";
const three = require('./three');

setTimeout(
    () => {
        three.add(20);
        three.add(21);
    }, 600
);