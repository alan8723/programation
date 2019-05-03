class Persona{
  constructor(nombre, apellido, altura){
    this.nombre = nombre,
    this.apellido = apellido,
    this.altura = altura
  }
  saludar(fn){
    //var nombre = this.nombre
    //var apellido = this.apellido
    var {nombre, apellido} = this

    console.log(`hola soy ${nombre} ${apellido}`)
    if(fn){
      fn(nombre, apellido)
    }
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

  saludar(fn){
    var {nombre, apellido} = this

    console.log(`hola soy ${nombre} ${apellido} y soy desarrollador/a`)
      if(fn){
        fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`buen dia ${nombre} ${apellido}`)
  if(esDev){
    console.log(`ah mirá, no sabia que eras desarrollador`)
  }
}


var alan = new Persona ('alan', 'Paez', 1.62)
var pepe = new Persona ('pepe', 'Gomez', 1.89)
var sacha = new Persona ('sacha', 'Lifszic', 1.72)

var arturo = new Desarrollador ('arturo', 'martines', 1.79)

alan.saludar()
sacha.saludar(responderSaludo)
arturo.saludar(responderSaludo)