const uniq = require('uniq');
const $ = require('jquery');
    
console.log(uniq([1,2,3,4,4,5]));

$(()=>{$('body').append('Hello World');});