const path = require('path');
console.log(path.dirname(__dirname));
console.log(path.basename(__dirname));
console.log(path.extname(__filename));
console.log(path.join(__dirname, 'hello', 'bye.txt'));