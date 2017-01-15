const save = require('./save');

save().then(() => console.log(`saved 1`));

save().then(() => console.log(`saved 2`));

save().then(() => console.log(`saved 3`));