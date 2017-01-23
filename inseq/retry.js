
module.exports = (cb, retries) => {
    let x= cb();
    for(let i=0; i<retries; i++){
        x= x.catch(() => {
            return cb();
        });
    }
    
    return x;
    /*return cb().catch(() => {
            return cb();
        }).catch(() => {
            return cb();
        }).catch(() => {
            return cb();
        }).catch(() => {
            return cb();
        }).catch(() => {
            return cb();
        })*/;
}