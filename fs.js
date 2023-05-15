const fs = require('fs');
const path = require('path');
const text = path.join(__dirname, 'files', 'text.txt');

if (path.join(__dirname, 'files') === null) {
    fs.mkdir(path.join(__dirname, 'files'), {}, err => {
        console.log(err);
    });
}

if (text === null) {
    fs.writeFile(text, 'Hello world!', err => {
        console.log(err);
    });
}

fs.appendFile(text, '\nSample text', err => {
    console.log(err);
});

fs.readFile(text, 'utf8', (err, data) => {
    console.log(err);
    console.log(data);
});
