var vp = document.getElementById("villaCP");
var papel = vp.getContext("2d");
var x = 200;
var y = 200;
var teclas =
 {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);

var fondo = {
  url: "tile.png",
  cargaOk: false
};

var vaca = {
  url: "vaca.png",
  cargaOk: false,
  cantidad: 25,
  tamano: 80,
  x: new Array(),
  y: new Array()
};

for (var i=0; i<=vaca.cantidad-1; i++)
{
vaca.x = aleatorio(0, vp.width-vaca.tamano);
vaca.y = aleatorio(0	, vp.height-vaca.tamano);
}

var pollo = {
  url: "pollo.png",
  cargaOk: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};

var cantidad = aleatorio(5, 13)

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarpollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

for (var i = 0; i < 10; i++) {
  xp = aleatorio(0, 420);
  yp = aleatorio(0, 420);
    }

function cargarFondo()
{
  fondo.cargaOk = true
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}

function cargarpollo()
{
  pollo.cargaOk = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOk = true;
 dibujar();
}

function dibujarTeclado(eventos)
{
  var movimiento = 10;
 switch (eventos.keyCode) {
   case teclas.UP:
       dibujar()
       papel.drawImage(cerdo.imagen, x, y - movimiento);
       y = y - movimiento;
      break;
      case teclas.DOWN:
      dibujar()
      papel.drawImage(cerdo.imagen, x, y + movimiento);
      y = y + movimiento
        break;
        case teclas.LEFT:
        dibujar()
        papel.drawImage(cerdo.imagen, x - movimiento, y);
        x = x - movimiento
          break;
          case teclas.RIGHT:
          dibujar()
          papel.drawImage(cerdo.imagen, x + movimiento, y);
          x = x + movimiento
            break;
   default:

 }
}

function dibujar()
    {
    	if(fondo.cargaOk)
    	{
    		papel.drawImage(fondo.imagen, 0, 0);
    	}
    	if(vaca.cargaOk)
    	{
        for (var i = 0; i <= vaca.cantidad-1; i++)
        {
        papel.drawImage(vaca.imagen, vaca.x, vaca.y);
        }
    	}
      for (var i = 0; i < cantidad; i++) {
         papel.drawImage(pollo.imagen, xp, yp);
      }

    }


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
