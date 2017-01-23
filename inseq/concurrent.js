"use strict";
let lastPromise = [p1000, p100, p200];
module.exports = (p) => {
     lastPromise.push(p);
    if(lastPromise.length == 1){
       return p().then(() => {
                       
                
                  lastPromise[lastPromise.length - 1]();
                 });
    }
   
    
    
}