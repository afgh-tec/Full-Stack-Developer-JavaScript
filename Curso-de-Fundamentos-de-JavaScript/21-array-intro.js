//Como crear un Array

//1. new array() o array()


const fruits = Array("apple", "banana", "orange")
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5);
console.log(number);

//2. Array con sintaxis literal
const oneNumber = [4];//array con un dato
console.log(oneNumber);

const emptyArray = [];//array vacío
console.log(emptyArray);

const sports = ["futbol", "tenis", "rugby"];//array con muy datos string
console.log(sports);

const recipeIngredients = [//array mixto
  "Flour",
  true,
  2,
  { ingredient: "Milk", quantity: "1 cup" },
  false,
];
console.log(recipeIngredients);


const firstFruit = fruits[0];//accediendo al array en la posición 0
console.log(firstFruit);

const numberOfFruits = fruits.length;//ver tamaño del array
console.log(numberOfFruits);
