console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 700;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 10;

//-- Velocidades del objeto
let velx = 3;
let vely = 1;

//-- Funcion principal de animacion
function update() 
{
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condicion de rebote en extremos verticales del canvas
   if (x < 0 || x >= (canvas.width - 20) ) {
    velx = -velx;
  }

  //-- Condición de rebote en extremos horizontales del canvas
  if (y <= 0 || y > canvas.height -20) {
    vely = -vely;
  }

  //-- Actualizar la posición
  x = x + velx;
  y = y + vely;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 15, 15);

    //-- Dibujar
    ctx.fillStyle = 'white';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()

    
    //-- Texto solido
    ctx.font = "25px Arial";
    ctx.fillStyle = 'white'
    ctx.fillText("Puntos", 450, 30);
    ctx.fillText("Vidas", 60, 30);

  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();