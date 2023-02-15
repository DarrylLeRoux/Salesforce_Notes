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
  2. `String()
  3. `Bolean()
  4. `toString()
  5. `parseInt()
  6. `parseFloat()

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
