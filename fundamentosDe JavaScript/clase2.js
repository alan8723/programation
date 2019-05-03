var nombre = 'Sacha', apellido = 'Lifszyc'
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

var alan = {
  nombre: 'alan',
  edad: 20
}
//function inprimirNombreEnMayuscula({ nombre }){
//  console.log(nombre.toUpperCase())
//}

function inprimirNombreEnMayuscula(persona){
//  var nombre = persona.nombre
  var { nombre } = persona
  console.log(`hola soy ${nombre.toUpperCase()} y tengo ${persona.edad} años`)
}

inprimirNombreEnMayuscula(alan)


//clase 8
function cumpleaños(persona){
  return {
    ...persona,
    edad: persona.edad +1
  }
}