const forEach = require('./');

forEach({a:1,b:2}, function(key, value) {
    console.log(key, value);    
});