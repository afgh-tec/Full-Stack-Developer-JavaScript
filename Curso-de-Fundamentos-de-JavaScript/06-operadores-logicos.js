// Definición de variables
let a = true;
let b = false;
let c = true;

// AND lógico (&&)
console.log("AND lógico:");
console.log(a && c); // true: ambos son true
console.log(a && b); // false: uno de ellos es false
console.log(b && c); // false: uno de ellos es false

// OR lógico (||)
console.log("\nOR lógico:");
console.log(a || c); // true: al menos uno es true
console.log(a || b); // true: al menos uno es true
console.log(b || c); // true: al menos uno es true
console.log(b || b); // false: ambos son false

// NOT lógico (!)
console.log("\nNOT lógico:");
console.log(!a); // false: a es true, !a es false
console.log(!b); // true: b es false, !b es true

// Combinaciones de operadores lógicos
console.log("\nCombinaciones:");
console.log(a && b || c); // true: (true && false) || true -> false || true -> true
console.log((a && b) || c); // true: (true && false) || true -> false || true -> true
console.log(a && (b || c)); // true: true && (false || true) -> true && true -> true
console.log(!a && (b || c)); // false: !true && (false || true) -> false && true -> false

// Cortocircuito
console.log("\nCortocircuito:");
console.log(false && (3 > 2)); // false: no evalúa (3 > 2)
console.log(true || (3 < 2)); // true: no evalúa (3 < 2)
console.log(b || (a && c)); // true: (false || (true && true)) -> (false || true) -> true