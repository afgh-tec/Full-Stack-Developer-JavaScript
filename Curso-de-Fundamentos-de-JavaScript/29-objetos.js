
//Se crea el objeto {} y se puede crear un método dentro

const persona = {
  nombre: "John",
  edad: 30,
  direccion: { calle: "Av Insurgentre 187", ciudad: "CDMX" },
  saludar() {
    console.log(`hola, mi nombre es ${persona.nombre}`);
  },
};
console.log(persona);
console.log(persona.nombre);
persona.saludar();

persona.telefono = "555-555-5555";//agregamos propiedad
console.log(persona.telefono);

persona.despedir = () => {//agregamos un método
  console.log("Adios");
};
persona.despedir();
console.log(persona.direccion.calle);

delete persona.telefono;//eliminamos una propiedad
console.log(persona.telefono);

delete persona.despedir;//eliminamos un método
console.log(persona.despedir());
