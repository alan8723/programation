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

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es: `)

  if (persona.ingeniero){
    console.log('ingeniero')
  }else{
    console.log('no es iongeniero')
  }
  if (persona.cocinero){
    console.log('cocinero')
  }else{
    console.log('no es cosinero')
  }
  if (persona.cantante){
    console.log('cantante')
  }else{
    console.log('no es cantante')
  }
  if (persona.dj){
    console.log('dj')
  }else{
    console.log('no es dj')
  }
  if (persona.guitarrista){
    console.log('guitarrista')
  }else{
    console.log('no es guitarrista')
  }
  if (persona.drone){
    console.log('piloto de drone')
  }else{
    console.log('no es piloto de drone')
  }
}

imprimirProfesiones(sacha)