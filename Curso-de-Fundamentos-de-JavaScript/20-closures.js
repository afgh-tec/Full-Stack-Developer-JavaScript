
//Ejemplo 1
function outerFunction() {
  let outerVariable = "I am from outer function";
  function innterFunction() {
    console.log(outerVariable);
  }
  return innterFunction;
}

//Ejemplo 2
const closureExample = outerFunction();
closureExample();
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

//Ejemplo 3
const counterA = createCounter();
counterA();
counterA();
const counterB = createCounter();
counterB();
function outer() {
  let message = "Hello, ";
  function inner(name) {
    console.log(message + name);
  }
  return inner;
}
const closureA = outer();
const closureB = outer();
closureA("Alice");
closureA("Bob");
