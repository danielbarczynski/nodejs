// const Person = require('./person');
// const person = new Person('Daniel', 23);
// console.log(person.greeting());

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('message', data => console.log(data))
// logger.log('Hello world!');

const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/')
    res.write('hey');
  res.end();
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));