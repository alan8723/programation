var numeros =  100;
var dibisible = false;

for(var i = 1; i<=100; i++)
{
  dibisible = false;
  if (i % 3 == 0)
  {
    document.write("fizz");
    dibisible = true;
  }
  if (i % 5 == 0)
  {
    document.write("buzz" );
    dibisible = true;
  }

  if (!dibisible)
  {
    document.write(i);
  }
  document.write("<br />");
}
