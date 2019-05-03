function persona (nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

var sacha = new persona('sacha', 'lifszyc', 1.72)
var alan = new persona('alan', 'paez', 1.62)
var pepe = new persona('pepe', 'gomez', 1.89)

persona.prototype.saludar = function (){
  console.log(`hola soy ${this.nombre} ${this.apellido}`)
}

persona.prototype.esAlto = function(){
  if(this.altura > 1.8){
    console.log(`${this.nombre} es alto/a`)
  }else{
    console.log(`${this.nombre} no soy alto/a :T`)
  }
}

sacha.saludar()

pepe.esAlto()