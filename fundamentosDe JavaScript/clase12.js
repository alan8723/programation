var sacha = {
  nombre: 'Sacha',
  apellido: 'Lisfszyc',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

const MAYOTIA_DE_EDAD = 18

//const siEsMayorDeEdad = function (persona){
//  return persona.edad >= MAYOTIA_DE_EDAD
//}

// return explisito
 const siEsmayorDeEdad = ({ edad }) => edad >= MAYOTIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona){
  if(siEsmayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  }else{
    console.log(`${persona.nombre} es menor de edad`)
  }
}

const siEsMenorDeEdad = ({ edad }) => edad < MAYOTIA_DE_EDAD

function permitirAcceso(persona){
  if(siEsMenorDeEdad(persona)){
    console.log('ACCESO DENEGADO')
  }
}