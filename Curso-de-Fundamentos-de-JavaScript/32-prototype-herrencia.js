
class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    console.log("El animal emite un sonido");
  }
}

//Clase Perro hereda de Animal
class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }
  emitirSonido() {
    console.log("El perro ladra");
  }
  correr() {
    console.log(`${this.nombre} corre alegremente`);
  }
}
const perro1 = new Perro("Bobby", "Perro", "Pug");
console.log(perro1);
perro1.correr();
perro1.emitirSonido();
perro1.nuevoMetodo = function () {
  console.log("Este es un metodo");
};

//Creando métodos con prototype
Perro.prototype.segundoMetodo = function () {
  console.log("Es otro nuevo método");
};
Animal.prototype.tercerMetodo = function () {
  console.log("Un método más");
};
