// let me = {
//   name: 'darryl',
//   age: 40,
// };

// console.log(Object.getOwnPropertyNames(me));

// let user1 = {
//   firstName: 'Mary',
//   lastName: 'Smith',
//   age: 25,
//   greeting(greet) {
//     console.log(`${greet} ${this.firstName} ${this.lastName}`);
//   },
// };

// user1.greeting('Good morning');

// let user = {
//   name: 'John',
//   surname: 'Smith',
// };

// Object.defineProperty(user, 'fullName', {
//   get() {
//     return `${this.name} ${this.surname}`;
//   },

//   set(value) {
//     [this.name, this.surname] = value.split(' ');
//   },
// });

// alert(user.fullName); // John Smith
// for (let key in user) alert(key); // name, surname

// // In this example, 'Object.assign()' is used inside the 'cloneObject' function in order to clone any object passed in.
// function cloneObject(obj) {
//   return Object.assign({}, obj);
// }
// // This example illustrates the 'scores' object was cloned and is an entirely different object.
// let scores = {
//   quiz: 'Quiz 1',
//   scores: [90, 70, 60, 50, 40, 100, 60],
// };
// let newScores = cloneObject(scores);
// newScores.scores = [];
// console.log(scores, newScores);

// // Invoking a method on a class
// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// let userOne = new User('Sarah', 'James');
// console.log(userOne.fullName());

// Super()

// class User {
//   constructor(user, email) {
//     this.user = user;
//     this.email = email;
//   }
// }

// class Employee extends User {
//   constructor(user, email, id) {
//     super(user, email);
//     this.employeeID = id;
//   }
// }

// let employ1 = new Employee('team_lead', 'team@comicsoft.com', 345);
// console.log(employ1);

/* This example shows how to pass an object as a parameter to a wrapper function and invoke the call() method in the wrapperfunction. (Part 1 of 2) */
// Decorator function which accepts an object of the class and the function to be wrapped
// function log(obj, fn) {
//   return function () {
//     console.log('Execution of ' + fn.name);
//     console.time('fn');

//     // Invoke function with object's context
//     let val = fn.call(obj);
//     console.timeEnd('fn');
//     return val;
//   };
// }

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getUser() {
//     return `[${this.name}][${this.age}]`;
//   }
// }

// let obj = new User('James', 24);
// // Decorate class method
// let getUser = log(obj, obj.getUser);
// console.log(getUser());

// /* This example shows how to use the decorator syntax and three parameters (target, name, and descriptor) to extend a classmethod. (Part 1 of 2) */

// // Decorator function
// function methodLogger(target, name, descriptor) {
//   // Implementation here
//   console.log(`[Class=${target.constructor.name}] [Method=${name}]`);
//   let fn = descriptor.value;
//   descriptor.value = (nameVal) => {
//     console.log(`${name} function started`);
//     return fn(nameVal);
//   };
//   return descriptor;
// }

// /* This example shows how to use the decorator syntax and three parameters (target, name, and descriptor) to extend a classmethod. (Part 2 of 2) */

// class Human {
//   constructor(name) {
//     this.name = name;
//   }
//   // Decorated class method
//   @methodLogger
//   save(name) {
//     localStorage.setItem('name', name);
//     return 'Successful';
//   }
// }

// let human = new Human('Sam');
// console.log(human.save());
// class Delivery {
//   constructor(id, date, destination) {
//     this.id = id;
//     this.date = date;
//     this.destination = destination;
//   }
// }
// let delivery = new Delivery('LX2361', new Date(), 'DXB');
// let descriptors = Object.getOwnPropertyDescriptor(delivery, 'destination');

// console.log(descriptors);
