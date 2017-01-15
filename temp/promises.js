function Promise1(){
    "use strict";
    this.__then= [];b
    this.__catch= [];
}

Promise1.prototype.then= function(cb) {
    "use strict";
    this.__then.push(cb);
    }

Promise1.prototype.catch= function(c){
    "use strict";
    this.__catch.push(cb);
}

function getPromise(url) {
    "use strict";
    var p= new Promise1();

    $.get(url, function(data) {
        p.__then.forEach(function(v){
            v(data);
        });

    }, function(error){
        p.__catch.forEach(function(v){
            v(error);
        });
    });

    return p;
}


var p= getPromise("https://google.com");
p.th