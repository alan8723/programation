var texto = document.getElementById("textoDeLineas");
var boton = document.getElementById("botonsito");
boton.addEventListener("keydown", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

dibujarLinea("yellow", 1, 1, 1, 300);
dibujarLinea("yellow", 1, 299, 299, 299);
dibujarLinea("yellow", 1, 1, 299, 1);
dibujarLinea("yellow", 299, 1, 299, 299);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
 {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(x_inicial, y_inicial);
   lienzo.lineTo(x_final, y_final);
   lienzo.stroke();
   lienzo.closePath()
}
function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var l2 = 0;
  var l3 = 0;
  var l4 = 0;
  var yi, xf;
  var yf, xi;
  var espacio = ancho / lineas;
  for(l4 = 0; l4 < lineas; l4++)
  {
    yi = espacio * l4;
    xf = espacio + (-10 * l4);
  dibujarLinea("black", 300, yi, xf, 300);
  }
  while(l3 < lineas)
  {
    yi = espacio * l3;
    xf = espacio + (-10 * l3);
  dibujarLinea("black", 300, yi, xf, 300);
     l3++;
  }
      while(l < lineas)
      {
        yf = espacio * l;
        xi = espacio * (l + 1);
      dibujarLinea("black", xi, 0, 0, yf);
      console.log("linea " + l);
         l++;
      }
      while(l2 < lineas)
      {
        yi = espacio * l2;
        xf = espacio * (l2 + 1);
      dibujarLinea("black", 0, yi, xf, 0);
         l2++;
      }
}
