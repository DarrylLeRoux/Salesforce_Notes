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
