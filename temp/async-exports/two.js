"use strict";
const cbArray = [];

setTimeout(() => {
    module.exports = (number) => {
        cbArray.push(number);
    };
}, 500);

setTimeout(() => {
    console.log(cbArray);
}, 1000);