var express = require ("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/", cursos);

function inicio(peticion, resultado)
{
  resultado.send("este es el <strong>home<strong>")
}

function cursos(peticion, resultado)
{
  resultado.send("este es el <strong>cusos<strong>")
}

aplicacion.listen(8989);
