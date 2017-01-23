const inSeq = require('./retry');

const delay = (millis) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5){
               console.log(1); resolve("resolve") 
            }else{
                 console.log(11);
                reject("reject")
            }
        }, millis);
    });
}

inSeq(() => delay(1000), 6).then(() => console.log('A')).catch(() => {console.log('stale A')});/*
inSeq(() => delay(100)).then(() => console.log('B')).catch(() => {console.log('stale B')});
inSeq(() => delay(2000)).then(() => console.log('C')).catch(() => {console.log('stale C')});
inSeq(() => delay(200)).then(() => console.log('D')).catch(() => {console.log('stale D')});
inSeq(() => delay(250)).then(() => console.log('E')).catch(() => {console.log('stale E')});*/

