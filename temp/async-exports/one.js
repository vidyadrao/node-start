"use strict";
const cbArray = [];
module.exports = (number) => {
    cbArray.push(number);
};

setTimeout(() => {
    console.log(cbArray);
}, 1000);