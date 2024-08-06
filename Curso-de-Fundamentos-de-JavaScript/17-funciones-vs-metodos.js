//Las capacidades que tienen las funciones al igual que otros métodos

//1. Pasar funciones como argumentos -> Callback(función que se pasa como argumento)
function a() {}
function b(a) {}
b(a);

//Retornar funciones
function a() {
  function b() {}
  return b;
}

//Podemos asignar funciones a variables -> expresión de función
const a = function () {};

//Tener propiedades y métodos
function a() {}
const obj = {};
a.call(obj);

//Anidar funciones -> Nested functions
function a() {
  function b() {
    function c() {}
    c();
  }
  b();
}
a();

//Es posible almacenar funciones en objetos, esto se llamaría MÉTODOS
const cohete = {
  name: "Falcon 9",
  launchMessage: function launchMessage() {
    console.log("ðŸ”¥");
  },
};
cohete.launchMessage();
