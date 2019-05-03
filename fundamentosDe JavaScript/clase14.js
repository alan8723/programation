var alan = {
  nombre: 'Alan',
  apellido: 'Paez',
  edad: 20,
  peso:54
}

console.log(`al inicio del año ${alan.nombre} pesa ${alan.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizanDeporte = () =>Math.random() < 0.4


const META = alan.peso -3
var dias = 0

while (alan.peso > META) {
  if(comeMucho()){
    aumentarDePeso(alan)
  }
  if(realizanDeporte){
    adelgazar(alan)
  }
  dias++
}

console.log(`pasaron ${dias} días hasta que ${alan.nombre} adelgaso 3kg`)