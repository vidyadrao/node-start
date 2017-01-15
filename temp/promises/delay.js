"use strict";
module.exports = (resolveValue, time, rejected) => {
    return new Promise(
        (resolve, reject) => {

            setTimeout(
                () => {
                    if(rejected)
                        reject(`Reject ${resolveValue}`);
                    else {
                        console.log(`resolving with: ${resolveValue}`)
                        resolve(resolveValue);
                    }
                }, time
            );
        }
    );
}