const lodash = require('lodash');
module.exports = (obj, cb) => {
    const arr = lodash.toPairs(obj);                
    arr.forEach((value) => {
        cb(value[0], value[1]);
    });
}