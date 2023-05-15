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
const { throws } = require('assert');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/')
    fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.end(content);
    });
  
  else if (req.url === '/about')
  fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.end(content);
  });

  else if (req.url === '/api/users') {
    const users = [
      {
        name: 'Daniel',
        age: 23 
      },
      {
        name: 'Mela',
        age: 21
      }
    ]
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));