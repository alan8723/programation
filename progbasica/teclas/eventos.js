var teclas =
 {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("blue", 149, 149, 152, 152, papel);

dibujarLinea("black", 1, 1, 1, 300, papel);
dibujarLinea("black", 1, 299, 299, 299, papel);
dibujarLinea("black", 1, 1, 299, 1, papel);
dibujarLinea("black", 299, 1, 299, 299, papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
 {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.lineWidth = 8;
   lienzo.moveTo(x_inicial, y_inicial);
   lienzo.lineTo(x_final, y_final);
   lienzo.stroke();
   lienzo.closePath()
}

function dibujarTeclado(eventos)
{
  var movimiento = 5;
  var color_l = "blue";
switch (eventos.keyCode)
 {
  case teclas.UP:
  dibujarLinea(color_l, x, y, x, y - movimiento, papel);
  y = y - movimiento;
    break;
  case teclas.DOWN:
  dibujarLinea(color_l, x, y, x, y + movimiento, papel);
  y = y + movimiento;
    break;
  case teclas.LEFT:
  dibujarLinea(color_l, x, y, x - movimiento, y, papel);
  x = x - movimiento;
    break;
  case teclas.RIGHT:
  dibujarLinea(color_l, x, y, x + movimiento, y, papel);
  x = x + movimiento;
    break;
  default:
  console.log("otra tecla");
    break;
}
}
