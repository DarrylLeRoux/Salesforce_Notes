### Introduction

- Variables are used to store data and point to a location in memory
- A variable name is called an identifier
  `let name (identifier) = "Darryl" (data)`
- Each identifier must begin with a letter, \_ or $
  `var a
`var \_b`
`var $c`

### Variable Declaration

- Three methods of declaration:
  1.  `var` - used globally or local
  2.  `let` - used to declare block-scoped or local variable
  3.  `const` - used to declare a block-scoped, read-only constant. Must be initialised to a value
- When a varialble is declared using `var` or `let`, and not assigned to an initial value, its value is `undefined`

```js
let role;

console.log(role); // undefined
```

- Global variables are declared outside a function, or by using the `var` keyword
- Local variables are declared inside a function block

```js
const localScope() {
	let localVariable = "I am only available inside this function"
}

var globalScope = "I can be used anywhere"
```

### Hoisting

- `var` can be used to declare a variable after it is used due to `hoisting`
- `let` or `const` will throw a `Uncaught ReferenceError`

```js
name = 'Darryl';

function printName() {
  console.log('Current character is ' + name); // "Current character is 'Darryl'"
}

var name;
```

- `use strict` enforces stronger rules - for example, a variable cannot be used without being declared

### Data Types

- A variable can be declared and initialised with one of eight data types
  1.  Boolen
  2.  String
  3.  Number
  4.  Null - explicity assigned
  5.  undefined - declared, but no value assigned
  6.  Symbol - unique identifier
  7.  BigInt
- A variable of one data type can be explicityly coverted to another data type which is called Typecasting
- Some methods of typecasting:
  1. `Number()`
  2. `String()`
  3. `Bolean()`
  4. `toString()`
  5. `parseInt()`
  6. `parseFloat()`

### Collections

#### Objects

- An Object can be created using the Object() constructor or the object listeral syntax

```js
// Using the constructor method
function Animal() {
  this.type = 'Dog';
  this.sound = function () {
    console.log('woof!');
  };
}
var dog = new Animal();
dog.sound();

// Object Literal
var Animal = {
  type: 'dog',
  sound: function () {
    console.log('woof!');
  },
};
```

#### Arrays

- Methods of creating a new array

```js
// array literal method
var brands = ['Fender', 'Gibson', 'Jackson', 'Marshall'];

// using the new Array constructor
var brands = new Array('Fender', 'Gibson', 'Jackson', 'Marshall');
```

- Arrays are also reference types as in that they can be modified with `const`
- It points to a space in memory which stores the initail value
- Other methods of constructing or determining an array

```js
let arr = [1, 2, 3, 4, 5];
let newArr = Array.from(arr); // [1,2,3,4,5]

let arrOf = Array.of('title', 'normal', 'random');
console.log(arrOf); // ["title", "normal", "random"]

Array.isArray(arr); // true
```

#### Sets

- Sets store an array of data where only unique values are included.
- You can also add a new value with `.add

```js
let decades = [1990, 1990, 2000, 2010, 2010, 2020, 2030];

let uniqueDecades = new Set(decades);

uniqueDecades.add(1980);

console.log(uniqueDecades); // [1980, 1990, 2000, 2010, 2020, 2030]
```

#### Maps

- Data is easier to work with using Maps, as well as being able to quickly see the size of the Map

```js
let quizScores = new Map();

quizeScores.add('quiz 1', [14, 56, 34, 12]);
quizeScores.add('quiz 2', [88, 23, 11, 32]);
quizeScores.add('quiz 3', [31, 11, 81, 52]);

console.log(quizScores.values); // MapIterator {Array(4), Array(4), Array(4)}
```

### String Methods

- Strings can be created from as a primitive, from a string literal or as an object using the `String()` constructor

```js
// String literal
const str1 = 'This is a string literal';
console.log(str1); // This is a string literal

// String() constructor
const str2 = new String('This is also a string.');
console.log(str2); // String{"This is also a string."}
```

- Common String Methods:

```js
.toLowerCase() // Changes the string to lower case
.toUpperCase() // Changes the string to upper case
.concat(str) // combines two or more strings and returns a new string
.includes(searchString, position) // determines whether a given string contains another
.indexOf(searchValue, fromIndex) // Returns the index of a value in the specified string or -1 if not found
.replace(searchFor, replaceWith) // Searches for string or RegExp and replaces it with another string or value, returning a new string
.substring(indexStart, indexEnd) // returns a part of the string between start and end indexes or the start index to the end of the string
.search() // Used to search for a match between a reged and string
.padStart(length of the string needed, value) // Pads the beginning of a string
.padEnd(length of the string needed, value) // Pads the end of a string
.trim() // Removes blank characters or white space from both ends of a string
```

### Number Methods

- Numbers can be created as a primtive or by using the `Number()` constructor

```js
//Primitive with number litera;
const num1 = 3.14;
console.log(num1); // 3.14

// Number object using the constructor
const num2 = new Number(3.14);
console.log(num2); // Number {3.14}
```

- Some common Number methods:

```js
.isNan() // Used to determine whether a value is NaN
.isInteger() // Used to determing whether a value is an integer
parseFloat(3.12) // Returns the number with the decimal reading eg. .parseFloat(2) 3.12
parseInt(3.12) // Returns the integer and not a floating point number eg .parseInt() 3
.toFixed(2) // Returns a number with with two places after the decimal
.toString() // Returns a string of the number where the method was called
.valueOf() // Returns the primitive number eg. Number(2.34ghsggs).valueOf() -> 2.34
```

### Dates

- A Date object can be used to represent a single moment in time. It contains a Number that represents milliseconds since 00:00:00 UTC on January 1st, 1970 (called UNIX epoch)
- The `Date()`constructor can be used to create a new Date object

```js
const now = new Date();
console.log(now); // Sun Feb 19 2023 19:50:12 GMT+0200 (South Africa Standard Time)
```

- Common Date methods:

```js
.now() // Returns current time
.parse() // Parses a date string and returns the number of milliseconds since UNIX epoch
.UTC() // Retruns a number of milliseconds for the specified date and time in UTC since INIX epoch
Get Methods - .getDay(), .getMonth, .getHours
Set Methods - .setFullYear(), .setMinutes(), .setSeconds()
.toString() // Returns a string value of a date object
.toDateString() // Returns the date value of the Date object without the time in a string format
.toUTCString() // Converts a date to a string using the UTC Time Zone
.ISOString() // Converts UTC time into a simplified ISO-8601 format
```

## Functions

### Introduction

- A function is a block of code that is defiend once and then may be executed many times.
- Once a function is declared, it is executed any time it is invoked or called
- Functions are:
  First class (Treated as values)
  Higher Order - receive funcations as arguments or can return a function
  Closures - Establish context for code execution

### Function Declaration

- The most common way to define a function is a function declaration. The function keyword is followed by the function name

```js
function funDeclaration() {
	return ...
}
```

### First Class Functions

- Functions are first class, as they can be treated as a value:
  1. A function can be assigned to a variable similar to a primitive value
  2. A function can be stored in an array
  3. A function can be passed to another function as an argument
  4. A function can also be returned from a function
  5. A function can be assigned to a property of an object, this is called a method

```js
function sum(num1, num2) {
  return num1 + num2;
}
// passing a function to an array
const arr = [20, 30, sum];

let result = arr[2](arr[0], arr[1]);

console.log(result); // 50
```

### Types of Functions

- You have different types of functions:

```js
function outer(num1, num2) {
  // Outer functions, as well as named
  let num3 = (function () {
    // inner function, as well as anonymous
    return num1 + num2;
  })(); // This is invoked immediately it is an IIFE
  return [num1, num2, num3];
}

const arr = outer(0, 1);

console.log(arr); // (3) [0,1,1]
```

- Function Expressions vs Function Declaration

```js
const greeting = function (name) {
  // function expression (the variable is given a value)
  let greet = `Welcome to the course ${name}`;
  let greetDiv = document.getElementById('greet');
  setTimout(function () {
    // anonymous function is passed to the setTimeout method
    greetDiv.innerHTML = greet;
  }, 1000);
};

greeting('user1');

// Welcome to the course user1!
```

### Recursive functions - when a function calls itself

```js
function fib(sequence, len) {
  let size = sequence.length;
  if (size >= len) {
    return sequence; // If condition has been met, return the sequence.
  }
  sequence.push(sequence[size - 2] + sequence[size - 1]);
  return fib(sequence, len); // Call itself with the ‘return’ keyword.
}

const fibSeq = fib([0, 1], 10); // break point is given as length of 10

console.log(fibSeq); // (10) [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

- Infinite recursive functions occur when there is no exit condition, resulting in an error due to the call stack being maxed out

### Higher order functions

- Functions that operates on another function, either by receiving it as an argument or returning it as a value

```js
// The map method of an array object is a higher-order function as it accepts a function as an argument
const nums = [1, 2, 3, 4, 5];
const newNums = nums.map((num) => num * 2); // callback function
console.log(newNums);

// This example shows a higher-order function because it returns a function which is then used later.
const createMultiplyFunction = function (num) {
  return (num1) => num1 * num;
};

const multiplyBy10 = createMultiplyFunction(10);
console.log(multiplyBy10(5));
```

### Function Hoisting

- Function Declarations are hoisted

```js
sumExpression(50, 100); // error

const sumExpression = function (num1, num2) {
  console.log(num1 + num2);
};

sumDeclaration(5, 10); // no error

function sumDeclaration(num1, num2) {
  console.log(num1 + num2);
}
```

### Closure

- A Closure allows a function access to its parent scope - even if the parent scope has completed execution

```js
// This code shows an example of closure. The 'createScoreFunction' returns a function that adds to the scores array and thenprints the number of values. The 'scores' array is private and cannot be manipulated except using 'addScore'.

function createScoreFunction() {
  scores = [];
  return function (score) {
    // score takes in the argument of the parent
    scores.push(score);
    console.log(`Total scores: ${scores.length}`);
  };
}

// The function returned to 'addScore' still has access to 'scores' through closure.
const addScore = createScoreFunction();

addScore(70); // Output - Total scores: 1
```

### Apply, Call and Bind

- The default value of `this`can be changed using one of three methods available for functions
- `apply()`invokes a function and assigns the object passed in to the keyword `this`- arguments for the function are passed in as a array
- `call()`invokes a function and assigns the object passed in to the keyword `this`- arguments for the function are passed in as a comma separated list
- `bind()`returns a new function. The object passed in is assigned to the keyword `this`when that new function is invoked - arguments may be bound to the new function as well.

```js
// This example shows an application of call, apply and bind to invoke a function on the 'objGreet' object, while assigning thevalue of 'this' to a different object; either 'user1' or 'user2'.
let objGreet = {
  morningGreet(punct) {
    console.log(`Good morning ${this.firstName}${punct}`);
  },
  eveningGreet(punct) {
    console.log(`Good evening ${this.firstName}${punct}`);
  },
};
let user1 = {
  firstName: 'Mary',
};
let user2 = {
  firstName: 'Sam',
};

objGreet.morningGreet.call(user1, '!'); // call invokes the function, and passes in the 'punct' parameter.
objGreet.eveningGreet.apply(user2, ['?']); // apply invokes the function, and passes in the 'punct' parameter as an array.
objGreet.eveningGreet.bind(user1, '.')(); // bind returns a function and binds the 'punct' parameter to the function, which isinvoked using parentheses.Output
```

## Objects

### Introduction

- There are three ways to create an object:
  1.  Using the `Object()`constructor
  2.  the object initializer - also known as the object literal syntax
  3.  The `Object.create()`method

```js
// Object() constructor
let user1 = new Object();
user1.name = 'Sam';
user1.age = 35;
user1.admin = false;
user1.created = new Date();

// Object initializer.
let user2 = {
  name: 'Mary',
  age: 25,
  admin: true,
  created: new Date(),
};

// Object.create() method.
let user3 = Object.create({});
user3.name = 'Isabel';
user3.age = 46;
user3.admin = false;
user3.created = new Date();
```

### Enumerating Object Properties

- There are three ways of listing/traversing the properties of an object
  1.  for...in loop - can be utilized to traverse all the enumerable properties of an object and its prototype chain
  2.  `Objects.keys(0)`method can be used to get an array of all the own enumerable property names of an object named (o)
  3.  `Object.getOwnPropertyNames(o)`can be used to get all the own property names (enumerable or not) of an object names 'o'

```js
// These examples show how to enumerate the properties of the following object.
let user2 = {
  name: 'Mary',
  age: 25,
  admin: true,
  created: new Date(),
};

// This example uses a 'for...in' loop to traverse the object properties.
for (let prop in user2) {
  console.log(prop, user2[prop]);
}

// This example uses 'Object.keys()' to grab the keys of the object in an array.
console.log(Object.keys(user2));

// This example uses 'Object.getOwnPropertyNames()' to grab the keys of the object.
console.log(Object.getOwnPropertyNames(user2));
```

- Methods associated with the Object

```js
let user1 = {
	firstName: "Mary",
	lastName: "Smith",
	age: 25;
	greeting(greet) {
		console.log(`$greet`)
	}
}

// The greeting method is called with a 'greet' message passed in.
user1.greeting('Good Morning')
```

### This

- The `this`keyword can be used within an object method to refer to the current object. It can be used to get the properties of the object

```js
let user1 = {
  firstName: 'Mary',
  lastName: 'Smith',
  age: 25,
  greeting(greet) {
    console.log(`${greet} ${this.firstName} ${this.lastName}`);
  },
};

user1.greeting('Good morning');
```

### Getters and Setters

- A getter can be defined in an object to get the value of a specific property. A setter can be defined in an object to set the value of a specific property. A getter is prefixed with `get` while a setter is prefixed with `set` and accepts one parameter.

```js
let user = {
  name: 'John',
  surname: 'Smith',
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(' ');
  },
});

alert(user.fullName); // John Smith
for (let key in user) alert(key); // name, surname
```

### Passing by Reference vs Value

- In JavaScript, objects are automatically passed by reference while primitives are passed by values.

```js
// When a variable is passed by value in a function argument, the value of the variable is copied into the function. Changes madeto the variable inside the function does not affect the variable outside the function.
function passPrimitive(name) {
  name = 'Jerry';
}
let person = 'Tom';
passPrimitive(person);
console.log(`Hi, my name is ${person}.`); // Hi my name is Tom.

// When a variable is passed by reference in a function argument, the reference or address of the variable is passed into the function. Changes made to the variable inside the function will affect the variable outside the function.
function passObject(settings) {
  settings.on = true;
}

let conf = {
  device: 'microwave',
  on: false,
};
passObject(conf);
console.log(conf); // {device: "microwave", on: true}
```

### The Arguments Object

- Javascript allows any number of arguments to be passed into a function. They are automatically captured in non-rrow functions by a dynamic object called arguments

```js
// This example function sums parameters passed to it and uses the arguments object to retrieve the parameters
function add() {
	let sum = 0;
	for (let i inarguments) {
		sum += arguments[i]; // the arguments object is "Array-like"
	}
console.log(`The sum of the ${arguments.length} numbers is ${sum}`);

// Standard Array methods are not available in "Array-like" objects.
// So, the following will throw an error.
	arguments.sort();
	}
// This works, obviously
add(62, 34, 45, 93);
```

### Object Class Methods

- The Object class provides access to various static and instance methods. Some of the most commonly used static methods are as follows:

1. `assign()`- used to copy all the enumerable own properties from one or more source objects to a target object.
2. `entries()`- gets an array of all the key-value pairs of an objects own enumerbale string properties.
3. `values()`- gets an array of all the values of an objects own enumerable string properties.
4. `defineProperties()`- used to define new or modify existing properties of an object. Also `defineProperty()`can be used to work on a single property.
5. `freeze()`- freezes an object such that changes can no longer be made to it.
6. `preventExtensions()`- prevents the addition of new properties to a specified object.
7. `seal()`- prevents new properties from being added as well as changes being made to descriptors.
8. `is()`- used to determine whether two values are the same value.

- Instance methods:

1. `hasOwnProperty()`- used to determine whether an object contains the specified property as a direct property.
2. `isPropertyOf()`- used to determine whether an object is in the prototype chain of the specified object.
3. `toString()`- used to get the string representation of the specified object.
4. `valueOf()`- used tp get the primitive value of the specified object.

```js
// In this example, 'Object.assign()' is used inside the 'cloneObject' function in order to clone any object passed in.

function cloneObject(obj) {
  return Object.assign({}, obj);
}

// This example illustrates the 'scores' object was cloned and is an entirely different object.

let scores = {
  quiz: 'Quiz 1',
  scores: [90, 70, 60, 50, 40, 100, 60],
};

let newScores = cloneObject(scores);

newScores.scores = [];

console.log(scores, newScores);
```

```js
/* In this example function, the 'hasOwnProperty' method is used so the function only returns the property value if it is owned bythe object. */
function reservable(obj) {
  if (obj.hasOwnProperty('canReserve')) {
    return obj.canReserve;
  } else {
    returnfalse;
  }
}

// This examples shows the application of the function.
let meetingRoom = {
  canReserve: true,
  capacity: 20,
};

console.log(reservable(meetingRoom));
```

```js
// example using the freeze method
const user = {
  role: 'guest',
};
Object.freeze(user);
user.role = 'admin';
console.log(user);

// example using the preventExtensions methods
const user = {
  role: 'guest',
};

Object.preventExtensions(user);
try {
  Object.defineProperty(user, 'age', { value: 25 });
} catch (e) {
  console.log(e);
}
// example using the seal method
const user = {
  role: 'guest',
};

Object.seal(user);
user.role = 'member';
delete user.role; // unable to be deleted when sealedc
onsole.log(user);
```

## Object Inheritance and Prototype Chain

- Objects ==inherit== properties from at least one other object through the prototype chain. The ==prototype== is the object from which the properties are ==inherited==.

#### Properties

- When a property is accessed, it is sought on the object, the prototype of the object, the prototype of the prototype, and so on, until the end of the prototype chain is reached.

```js
// In this example, a “hello” method is added to the Animal prototype and then modified to illustrate how it impacts instances of the object.
function Animal(name) {
  this.name = name;
}

let cat = new Animal('Kitty');
let dog = new Animal('Puppy');
Animal.prototype.hello = function () {
  // create a function
  console.log(`Hi, my name is ${this.name}.`);
};
cat.hello(); // Hi, my name is Kitty
dog.hello(); // Hi, my name is Puppy

cat.sound = function () {
  console.log('meowww..');
};

dog.sound = function () {
  console.log('woofff!!');
};

Animal.prototype.hello = function () {
  // modify the function
  console.log(`${this.name}'s the name. What's yours?`);
};

cat.hello(); // Kitty's the name. What's yours?
dog.hello(); // Puppy's the name. What's yours?
cat.sound(); // meowww..
dog.sound(); // woofff!!
```

#### Inheritance

An object can be defined so that it inherits the properties and method of another object. For example, an object of "Employee" can inherit from the object of "User"

```js
/* This example shows how to define an object named 'boardRoom' that inherits the properties and methods of another object named'meetingRooms'. */
let meetingRooms = {
  reservable() {
    if (this.hasOwnProperty('canReserve')) {
      return this.canReserve;
    } else {
      return false;
    }
  },
  location: 'mainBuilding',
};

let boardRoom = Object.create(meetingRooms);
boardRoom.canReserve = true;
boardRoom.capacity = 20;
boardRoom.location = 'satellite'; // Creates own 'location' property on 'boardRoom'.

console.log(boardRoom.reservable());
Output;
```

## Classes

Can be defined using a class ===declaration=== or class ===expression===

An instace of a class can be created by using the `new`keyword, which automatically calls the constructor of the class to initialze an object

A class can inherit the properties and methods of another class using the `extends` keyword. Classes use prototype-based inheritance. The `constructor` of the child class must use the `super` keyword to call the constructor of the parent class before using `this` to assign values.

Defining a class:

```js
// Class Declaration

class ClassName {
  // The constructor creates a new object, runs with the provided parameters, and assigns properties using the ‘this’ keyword.
  constructor() {} // adding the constructor is optional
  method1() {}
  method2() {}
}

// Class Expression

// Can be anonymous or named. The name is only availble in the scope of the class expression
let ClassName = class OptionalName {
  constructor() {}
  method1() {}
  method2() {}
};
```

### Creating an Instance of a Class

An instance of a class, i.e., an object, can be created by using the `new ClassName()`. The `new`keyword automatically calls the consructor of the class. Parameters can be passed to initialize the object with specific properties.

```js
// In this example, the 'MeetingRoom' class is used to create different meeting room objects.
class MeetingRoom {
  constructor(available) {
    if (available) {
      this.reservable = true;
    }
  }
}

// An instance of 'MeetingRoom' is created using the 'new' keyword and passing in a parameter.
let boardRoom = new MeetingRoom(true);
console.log(boardRoom); //MettingRoom {reservable: true}
```

### Class Constructor

The constructor creates a new object, runs with the provided parameters, and assigns properties using the `this` keyword.

```js
// In this example, the class 'User' is set up to create user objects.
class User {
  constructor(user, email) {
    this.user = user; // User and email are assigned to the instance using 'this'.
    this.email = email;
  }
}
// An instance of a 'User' is created by passing 'user' and 'email' as parameters.
let user1 = new User('team_lead', 'team@cosmicsoft.com');
console.log(user1); //User{user: "team_lead", email: "team@cosmicsoft.com"}
```

#### Invoking Class Methods

```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

let user1 = new User('Sarah', 'James');
console.log(user1.fullName());
```

#### Getters and Setters

A getter can be added to a class to get the value of a property. A setter can be added to set the value of a property. A setter accepts exactly one parameter.

```js
// In thsi example, getter and setter are used for the 'canReserve' property.
class MeetingRoom {
  constructor(capacity) {
    this.capacity = capacity;
    this.canReserve = false;
  }

  set reservable(val) {
    this.canReserve = val;
  }

  get reservable() {
    return this.canReserve;
  }
}

let boardRoom = new MettingRoom(20);
boardRoom.reservable = true;

console.log(boardRoom.reservable);
```

#### Static properties and methods

We can also assign a method to the class as a whole. Such methods are called *static*.
In a class declaration, they are prepended by `static` keyword, like this:

```js
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
```

That actually does the same as assigning it as a property directly:

```js
class User {}
User.staticMethod = function () {
  alert(this === User);
};

User.staticMethod(); // true
```

The value of `this` in `User.staticMethod()` call is the class constructor `User` itself (the “object before dot” rule).

Usually, static methods are used to implement functions that belong to the class as a whole, but not to any particular object of it.

#### Class Inheritance

A class can inherit the properties and methods of another class. For example, `Employee`class can inherit the properties and methods of the `User` class

```js
// This example shows two classes named 'User' and 'Employee'. The 'Employee' class extends the 'User' class.

class User {
  constructor() {
    this.validUser = true;
  }
  isUser() {
    return true;
  }
}

class Employee extends User {
  isEmployee() {
    return true;
  }
}

let employee1 = new Employee();

console.log(employee1);
console.log(employee1.isUser());
console.log(employee1.isEmployee());
```

#### Super()

Classes provide the `super` keyword which can be used inside the constructor of the child class to call the constructor of the parent class. Child classes must use `super` before using the `this` keyword to assign values.

```js
// this example shows what happens when the 'super' keyword is not used before the 'this' keyword in a child class

class User {
  constructor(user, email) {
    this.user = user;
    this.email = email;
  }
}

class Employee extends User {
  constructor(id) {
    this.employeeID = id;
  }
}

let employ1 = new Employee(1); //Uncaught reference error: Must call super costructor
```

```js
// this example shows how to use the 'super' keyword in a class to call the constructor in the parent class

class User {
  constructor(user, email) {
    this.user = user;
    this.email = email;
  }
}

class Employee extends User {
  constructor(user, email, id) {
    super(user, email);
    this.employeeID = id;
  }
}

let employ1 = new Employee('team_lead', 'team@comicsoft.com', 345);
console.log(employ1);
```

#### Super()

Classes provide the `super` keyword which can be used inside the constructor of the child class to call the constructor of the parent class. Child classes must use `super` before using the `this` keyword to assign values.

```js
// this example shows what happens when the 'super' keyword is not used before the 'this' keyword in a child class

class User {
  constructor(user, email) {
    this.user = user;
    this.email = email;
  }
}

class Employee extends User {
  constructor(id) {
    this.employeeID = id;
  }
}

let employ1 = new Employee(1); //Uncaught reference error: Must call super costructor
```

```js
// this example shows how to use the 'super' keyword in a class to call the constructor in the parent class

class User {
  constructor(user, email) {
    this.user = user;
    this.email = email;
  }
}

class Employee extends User {
  constructor(user, email, id) {
    super(user, email);
    this.employeeID = id;
  }
}

let employ1 = new Employee('team_lead', 'team@comicsoft.com', 345);
console.log(employ1);
```

## Modules

#### Introduction

Javascript modules allow code to be structured and separated into different files that can include variables, functions and/or classes that are logically related, allowing for modular code development.

A top-level item within a module can be exported by using the export statement. It’s possible to export functions, variables declared using var, let or const, and classes. Exporting an item allows other modules to access it.

```js
/*The following example shows how to use the export statement in a module by placing the ‘export’ keyword in front of the feature (in this case, a function) that needs to be exported .*/
export function multiplay(n) {
  return n * 2;
}

/*The following example shows how to use a single export statement at the end of a module to export the desired features (in this case, a function and two variables) .*/
const num = 13;
let value = 19;

function multiply(n) {
  return n * 2;
}
export { multiply, num, value };
```

#### Exporting

There are two types of exports - ===named=== and ===default===

```js
// Named
export function add(num1, num2) {
  // will take add as the name
  return num1 + num2;
}

// Multiple functions to export using a single export statement

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

export { add, subtract };
```

```js

// Default

/*This example shows how to use a default export in a module by using the ‘export default’ syntax before a class that should be exported .*/
export default class {
  constructor() {
  // Implementation here
  }
}
/*This example shows how to use a default export in a module by using the ‘export default’ syntax before an anonymous function that needs to be exported .*/
export default function () {
  // Implementation here
}
```

#### Importing

The `import`directive can be used to load the feature from the module path relative to the crrent file

```js
/*The following example shows how to import a function in main.js from another module called helper.js in which the function has been exported.*/

/*main.js*/
import { multiply } from './modules/helper.js';

/*helper.js*/
export function multiply(x, y) {
  return x * y;
}
```

```js
/*This example shows how to import multiple functions and variables from another module.*/

/*modules.js*/
function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

const SERVER_IP = '32.56.98.2';

export { multiply, divide, SERVER_IP };

/*main.js*/
import { multiply, divide, SERVER_IP } from './modules.js';
```

All the exported features of a module can be imported using the `*` character. The features are imported inside the specified object using `* as objectName`. They can be accessed using the properties of the object.

```js
/*This example shows how to import all the exported features of a module using the * character into an object and access them using the properties of the object. */
/*utilities.js*/
function print() {
  // Implementation here
}

function convert() {
  // Implementation here
}
export { print, convert };

/*index.js*/
import * as utilities from './utilities.js';

utilities.print();
utilities.convert();
```

#### Renaming Imports and Exports

In `import` and `export` statements, the `as` keyword can be used to change the name that is used to identify the feature within the top-level module

```js
/*This example shows how to rename an export using the ‘as’ keyword. */

/*utilities.js*/
function saveFunc() {
  // Implementation here
}

function openFunc() {
  // Implementation here
}

/*This example shows how to rename an import using the ‘as’ keyword. */
export { saveFunc as save, openFunc as open };

/*index.js*/
import { save as saveFile, open as openFile } from './utilities.js';
```

#### Dynamic Importing

in ES2020, dynamic module loading is possible by calling the `import()`as a function, passing the path tp the module as a parameter. The function returns a promise, which fulfills with a module object. The object can be used to access the ecported features

```js
/*The following syntax can be utilized for dynamic module loading. It increases the performance of the web page since a moduleis loaded only when it’s needed. */

import('./modules/helper.js').then((module) => {
  //Access the exports via the module object
});
```

```js
/*This example shows how to load a module dynamically when a button is clicked on the page and access the module object’s exports for a specific use case. */

const btn = document.getElementById('btn-convert');
let blob;
btn.addEventListener('click', loadModule);

function loadModule() {
  import('../modules/utilities.js').then((module) => {
    blob = module.convert(file); // ‘file’ has been defined earlier in the code.
  });
}
```

## Function Decorators

Function decorators are wrapper functions. They take a function as an argument and return a new function that enhances the function argument without modifying it.

```js
function displayName(name) {
  console.log(name);
}

function displayNameDecorator(fn) {
  return function (name) {
    const str = 'Welome to the hotel, ' + name + '!';
    fn(str);
  };
}

const customerName = displayNameDecorator(displayName);
customerName('John Wayne');
```

```js
// This example shows the structure of a decorator and how an existing function can use it.
// Decorator function receives a function
function loggerDecorator(fn) {
  // Decorator function returns a function that contains altered behavior
  return function (...args) {
    console.log('Started function ' + fn.name);
    console.log(args);
    fn(...args);
  };
}

function getUser(userId, authKey) {
  //Implementation here
}

let getUserFn = loggerDecorator(getUser);
getUserFn('AC102', 'XpamsIsd87js');
```

A decorator is useful for adding features to an existing function without increasing its complexity. It can be reused to alter the behavior of multiple functions used by an application. Multiple decorators can be combined if required.

```js
// This example shows two functions using the same decorator. (Part 1 of 2)
var data;
// Decorator function to handle errors
function errorHandlerDecorator(fn) {
  return function (...args) {
    try {
      console.log('Trying function ' + fn.name);
      fn(...args);
    } catch (err) {
      console.log(err);
    }
  };
}

// This example shows two functions using the same decorator. (Part 2 of 2)
// Function to parse JSON
function parse(str) {
  let obj = JSON.parse(str);
  console.log(obj);
  return obj;
}

// function to get details from local storage
function getUser() {
  data.user = localStorage.getItem('user');
}

let parseFn = errorHandlerDecorator(parse);
let getUserFn = erorrHandlerDecorator(getUser);

getUserFn();
parseFn('/{}');
```

#### Decorating Classes and Class Methods

Although a higher-order function (a function that receives a function as an argument or returns another function) can serve as a decorator to extend a JavaScript function, the same cannot be used to extend classes and methods.

A higher-order function that receives only the class method as a parameter cannot access the object properties.

The context of the object is missing when a higher-order function receives only the class method as a parameter.

The value of the ‘this’ keyword is not preserved due to the missing context.

```js
// This example shows the use of a higher-order function to extend a class method and why it doesn’t work as intended.(Part 1 of 2)
// Decorator function
function log(fn) {
  return function () {
    console.log('Execution of ' + fn.name); // execution of getUser
    console.time('fn');
    let val = fn();
    console.timeEnd('fn');
    return val;
  };
}

// This example shows the use of a higher-order function to extend a class method and why it doesn’t work as intended.(Part 2 of 2)
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getUser() {
    return `[${this.name}][${this.age}]`;
  }
}
let obj = new User('James', 24);

// Decorate class method
let getUser = log(obj.getUser);
// When the ‘getUser’ method is called, it returns an anonymous function which is returned by the log decorator. The value of‘this’ inside an anonymous function refers to the global object, not the user object, which is why the TypeError occurs.
console.log(getUser()); // Uncaught TypeError: cannot read property of 'name' of undefined
```

In order to extend a class method, the object of the class can be passed as a parameter to the wrapper function and the `call()` method can be used in the function to invoke the class method with the object as the parameter.

```js
/* This example shows how to pass an object as a parameter to a wrapper function and invoke the call() method in the wrapperfunction. (Part 1 of 2) */
// Decorator function which accepts an object of the class and the function to be wrapped
function log(obj, fn) {
  return function () {
    console.log('Execution of ' + fn.name); // Execution of getUser
    console.time('fn');

    // Invoke function with object's context
    let val = fn.call(obj);
    console.timeEnd('fn'); // fn: 0.009765625 ms
    return val;
  };
}

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getUser() {
    return `[${this.name}][${this.age}]`;
  }
}

let obj = new User('James', 24);
// Decorate class method
let getUser = log(obj, obj.getUser);
console.log(getUser()); // [James] [24]
```
