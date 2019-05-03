class Persona{
  constructor(nombre, apellido, altura){
    this.nombre = nombre,
    this.apellido = apellido,
    this.altura = altura
  }
  saludar(){
    console.log(`hola soy ${this.nombre} ${this.apellido}`)
  }

  soyAlto() {
    if(this.altura > 1.8){
      console.log(`${this.nombre} es alto/a`)
    }else{
      console.log(`${this.nombre} no soy alto/a :T`)
    }
  }
}

class Desarrollador extends Persona {
  constructor (nombre, apellido, altura){
    super(nombre, apellido, altura)
  }

  saludar(){
    console.log(`hola soy ${this.nombre} ${this.apellido} y soy desarrollador/a`)
  }
}



var alan = new Persona ('alan', 'Paez', 1.62)
var pepe = new Persona ('pepe', 'Gomez', 1.89)
var sacha = new Persona ('sacha', 'Lifszic', 1.72)

var arturo = new Desarrollador ('arturo', 'martines', 1.79)