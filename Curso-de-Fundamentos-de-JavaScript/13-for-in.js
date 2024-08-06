/* 
for in ---> objetos
propiedades = valor
array, string
item

for(variable in objeto){
    código
}
*/

const listaDeCompras = { manzana: 5, pera: 3, naranja: 2, uva: 1 };

for (fruta in listaDeCompras) {
  console.log(fruta);
}
//Fruta 
for (fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

//No se puede iterar objetos enumerable
for (fruta of listaDeCompras) {
  console.log(fruta);
}
