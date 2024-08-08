// Methods that modify the original array (Mutability).

// push()

const countries = ["USA", "Canada", "UK"];
const newCountries = countries.push("Germany", "Australia");

console.log(countries);
console.log(newCountries);

// pop(), elimina el ultimo elemento del array y devuelve el valor eliminado

const removedCountry = countries.pop();

console.log(countries);
console.log(removedCountry);
