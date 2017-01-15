const delay = require('../delay');
module.exports = () => {
    console.log('save started');
    return delay(true, Math.floor(Math.random()*2000 + 1000)).then(() => {
       console.log('save done!');
    });
};