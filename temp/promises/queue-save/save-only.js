var saveAjax= require('./saveAjax');

var inProgress= false;

module.exports=() => {
    return new Promise((resolve, reject) => {
        if(inProgress == true) return reject();
        inProgress = true;
        saveAjax().then(() => {
            resolve();inProgress = false;               
        });

    });
}