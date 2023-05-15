// const Person = require('./person');
// const person = new Person('Daniel', 23);
// console.log(person.greeting());

const Logger = require('./logger');
const logger = new Logger();

logger.on('message', data => console.log(data))
logger.log('Hello world!');