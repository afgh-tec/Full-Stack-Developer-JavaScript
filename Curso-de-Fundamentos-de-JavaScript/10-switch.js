
let expr = "Mangos";

//Estamos comparando con un comparador estricto ===
switch (expr) {
  case "Naranjas":
    console.log("Las naranjas cuestan $20 el kilo")
    break
  case "Manzanas":
    console.log("Las manzanas cuestan $43 el kilo")
    break
  case "Mandarinas":
    console.log("El Plátanos esta en $30 el kilo")
    break
//Caso Compartido en caso los productos compartan el mismo precio
  case "Mangos":
  case "Papayas":
    console.log("Los mangos y las papayas cuestan $ 25 pesos el kilo")
    break
  default:
    console.log(`Lo siento, no contamos con ${expr}`)
}
console.log("¿Hay algo mas que desees?")
