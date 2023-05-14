// const person = {
//     name: 'Daniel',
//     age: 23
// }

export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello ${this.name} ${this.age}!`;
    }
}

// module.exports = Person;