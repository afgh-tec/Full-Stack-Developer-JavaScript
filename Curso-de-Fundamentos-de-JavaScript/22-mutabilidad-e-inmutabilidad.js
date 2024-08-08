
const fruits = Array("apple", "banana", "orange")
console.log(fruits)

//Mutabilidad
fruits.push("watermelon");
console.log(fruits);

//Inmutabilidad
const newFruits = fruits.concat(["grape", "kiwi"]);
console.log(fruits);
console.log(newFruits);

//verificar si es un array
const isArray = Array.isArray(fruits);

//Ejercicios: suma de todos los elementos de un array
console.log(isArray);
const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log(sum);
