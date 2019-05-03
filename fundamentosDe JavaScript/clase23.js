function heredaDe (prototipoHijo, prototipoPadre){
  var fn = function() {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona (nombre, apellido, altura){
  this.nombre = nombre,
  this.apellido = apellido,
  this.altura = altura
}

Persona.prototype.saludar = function(){
  console.log(`hola soy ${this.nombre} ${this.apellido}`)
}

function Desarrollador (nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe (Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
  console.log(`hola soy ${this.nombre} ${this.apellido} y soy desarrollador`)
}



var alan = new Persona ('alan', 'Paez', 1.62)
var pepe = new Persona ('pepe', 'Gomez', 1.89)
var sacha = new Persona ('sacha', 'Lifszic', 1.72)
