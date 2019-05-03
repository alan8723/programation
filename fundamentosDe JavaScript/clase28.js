const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl =`${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const ONE_PEOLPLE_RESPONSE = function (persona) {
  console.log(`hola soy ${persona.name}`)
}

$.get(lukeUrl, opts, ONE_PEOLPLE_RESPONSE)