console.log('---- 00 BASICS ----');

var myVar = 'foo';

const myVar2 = 2;
let = myLet = true;

myLet = false;
myLet = 2;
myLet = 'string';

// block- vs. function-scoping
var val = 4;
if (true) {
  var val = 5;
  console.log('in', val);
}
console.log('out', val);

const val2 = 4;
if (true) {
  const val2 = 5;
  console.log('in', val2);
}
console.log('out', val2);

// if (2 == '2') {
//   console.log('true');
// }

if (2 === '2') {
  console.log('true2');
}

if (myVar === 2) {
  // do stuff
}

while (false) {
  // do stuff
}

do {
  // do stuff
} while (false);

for (let i = 0; i < 3; i++) {
  // runs 3 times
}

function myFunction(param1, param2) {
  // do stuff
}

const myLambda = (param1, param2) => {
  // do stuff
};

const myLambdaShort = (p1, p2) => p1 + p2;

const myKey = 'foolaskjdlkj';

const obj = {
  key: 'value',
  key2: 2,
  fn: () => true,
  [myKey]: 'bar',
};

console.log(obj);

const a = obj.key;
const b = obj[myKey];

console.log('ab', a, b);

const arr = [1, 2, 3, 'foo', true];

const c = arr[3];

console.log('---- 01 DESTRUCTURING & SPREAD ----');
// array / object destructuring

// const one = arr[0];
// const two = arr[1];
const [one, two, three, foo, isTrue] = arr;
console.log(one, two, three, foo, isTrue);

const { key, fn, key2 } = obj;
console.log(key, fn, key2);

// spread operator
const myFn = (...args) => {
  console.log(args);
};

myFn(1, 2, 3, 'foo', 4, 5);

const arr2 = [...arr];
const obj2 = { ...obj, key3: 'baz', key: 'key', key: 'key2' };
console.log(obj2);

console.log('---- 02 FUNCTIONS ARE OBJECTS ----');

const myFn2 = () => true;

const obj3 = {
  fn: myFn2,
  fn2: () => null,
};

const executeFunction = (fn) => {
  fn();
};

executeFunction(myFn2);
executeFunction(() => console.log('Hello World'));

const logWithPrefix = (prefix) => {
  return (msg) => console.log(prefix, msg);
};

const logWithHi = logWithPrefix('hi');
logWithHi('John');

const logWithBye = logWithPrefix('bye');
logWithBye('John');

obj3.fn();
obj['fn']();

console.log('---- 03 ARRAY FUNCTIONS ----');
