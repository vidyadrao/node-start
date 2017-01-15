"use strict";
function getURLResponseMap(a){
    var url_response_map={};
    var promiseMap=[];
    a.forEach((url)=>{
        var p1= new Promise((resolve, reject)=>{
            $.get(url, (data)=>{
                url_response_map[url]= data;
                resolve();
            });

        });
        promiseMap.push(p1);

    }) ;
    return Promise.all(promiseMap).then(()=>{
        return url_response_map;
    });



}

var p= getURLResponseMap(["a", "b", "c"]);
p.then((data)=>{
    data.forEach((v)=>{
        console.log(`${v} -> ${data[v]}`);
    });
});


var getURLResponseMap = (arr) => {
    arr.map((url)=>{
        return new Promise((resolve, reject) => {
            $.get(url, (data)=>{
                resolve([url, data]);
            })
        })
    });

    return Promise.all(arr).then((data)=>{
        var obj={};
        data.forEach((v)=>{
            obj[v[0]]= v[1];
        });
        return obj;
    });
}