
//Iniciamos el constructor
function Personas(nombre, apellido, edad){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad

}

//Generamos una instancia
const persona1 = new Personas("Juan Carlos", "García",34)
console.log(persona1)

const persona2 = new Personas("Carlos","Gutiérrez", 80)
console.log(persona2)


//se agrega un nuevo valor al constructor
Personas.prototype.telefono = "55-555-555"

//agregar una propiedad a una instancia y que esta no se comparta con otras instancias
persona1.nacionalidad = "Mexicano"
persona2.dni ="778899"

//agregar una nueva función al constructor
Personas.prototype.saludar = function(){
    console.log(`Hola. me llamo ${this.nombre}`)
}

persona1.saludar()


