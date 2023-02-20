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
