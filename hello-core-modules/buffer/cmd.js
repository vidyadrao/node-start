"use strict";
let arr= [];
process.stdout.write('Enter number\n');
process.stdin.on('data', (data1) => {
    arr.push(parseInt(data1));
    if(arr.length == 1)
        process.stdout.write('Enter number\n');
    else{
        process.stdout.write(`Sum ${arr[0]+arr[1]} \n`);
        process.stdin.end();
    }
});
