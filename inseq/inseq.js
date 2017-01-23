"use strict";
let  savedPromise = Promise.resolve(true);
module.exports = (p) => {
    if(!savedPromise) {
        savedPromise = p();
        return savedPromise;
    }
    
    savedPromise = savedPromise.then(() => {
                      return p();
                      });

    return savedPromise;
}