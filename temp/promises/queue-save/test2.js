const save = require('./save-only');

save().then(() => console.log(`saved 1`));

save().then(() => console.log(`saved 2`)).catch(() => console.log('error 2'));

setTimeout(() => save().then(() => console.log(`saved 3`)), 3000);