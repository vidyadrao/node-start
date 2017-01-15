"use strict";
const two = require('./two');

setTimeout(
    () => {
        two(20);
        two(21);
    }, 600
);