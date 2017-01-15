"use strict";
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("inside Timeout");
        resolve(2);
    }, 1000);

});

p.then((data)=>{
    console.log("then "+ data);
});