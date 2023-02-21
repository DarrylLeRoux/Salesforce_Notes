let me = {
  name: 'darryl',
  age: 40,
};

console.log(Object.getOwnPropertyNames(me));

let user1 = {
  firstName: 'Mary',
  lastName: 'Smith',
  age: 25,
  greeting(greet) {
    console.log(`${greet} ${this.firstName} ${this.lastName}`);
  },
};

user1.greeting('Good morning');

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