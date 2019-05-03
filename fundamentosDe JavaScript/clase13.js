var alan = {
  nombre: 'Alan',
  apellido: 'Paez',
  edad: 20,
  peso:54
}

console.log(`al inicio del año ${alan.nombre} pesa ${alan.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_AÑO; i++){
  var random = Math.random()

  if (random < 0.25){
    //aumento de peso
    aumentarDePeso(alan)
  }else if(random < 0.5){
    adelgazar(alan)
  }
}

console.log(`al final del año ${alan.nombre} pesa ${alan.peso.toFixed(1)}`)