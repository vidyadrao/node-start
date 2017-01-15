"use strict";
const delay= require("./delay");

//delay('data1', 1000).then(data => {
//     return delay(`data2-${data}`, 1000).then(data => {
//        return delay(`data3-${data}`, 1000).then(data => {
//             return delay(`data4-${data}`, 1000).then(data => {
//                 return delay(`data5-${data}`, 1000).then(data => {
//                     return delay(`data6-${data}`, 1000);
//                 });
//             });
//        });
//    })
//}).then((data) => {
//    console.log(`all done!!! ${data}`)
//});



delay('data1', 1000).then(data => {
     return delay(`data2-${data}`, 1000);
}).then((data)=>{
    return delay(`data3-${data}`, 1000);
}).then((data)=>{
    return delay(`data4-${data}`, 1000);
}).then((data)=>{
    return delay(`data5-${data}`, 1000);
}).then((data)=> {
    return delay(`data6-${data}`, 1000);
}).then((data) => {
    console.log(`all done!!! ${data}`)
});