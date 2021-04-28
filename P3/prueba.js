console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 700;

// Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

// Coordenadas del objeto
let x = 0;
let y = 10;

// Velocidades del objeto
let velx = 3;
let vely = 1;

/* // Funcion principal de animacion
function update() 
{
  console.log("test");
  // Algoritmo de animacion:
  // 1) Actualizar posicion del  elemento
  // (física del movimiento rectilineo uniforme)

   // Condicion de rebote en extremos verticales del canvas
   if (x < 0 || x >= (canvas.width - 20) ) {
    velx = -velx;
  }

  // Condición de rebote en extremos horizontales del canvas
  if (y <= 0 ) {
    vely = -vely;
  }

  // Actualizar la posición
  x = x + velx;
  y = y + vely;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.arc(x, y, 8, 0, 2 * Math.PI);
    //ctx.rect(280,630, 50, 10);
    //ctx.rect(x, y, 15, 15);

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
 */
//-- Acceder al cuerpo del documento HTML
//-- Es el primer elemento, porque sólo hay un cuerpo
body = document.getElementsByTagName('body')[0]

//-- Funcion de retrollamada de tecla pulsada
window.onkeydown = (e) => {
  
  //-- Comprobar si la tecla es un espacio
  if (e.key == ' ') {

      update();
  }
}

//-- Constantes de los ladrillos
const LADRILLO = {
  F: 5,  // Filas
  C: 9,  // Columnas
  w: 55,
  h: 25,
  origen_x: 3,
  origen_y: 3,
  padding: 10,
  visible: true
};

//-- Estructura de los ladrillos
const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
  ladrillos[i] = [];
  for (let j = 0; j < LADRILLO.C; j++) {
    ladrillos[i][j] = {
        x: (LADRILLO.origen_x +LADRILLO.w + LADRILLO.padding) * j,
        y: (LADRILLO.origen_y + LADRILLO.h + LADRILLO.padding) * i,
        w: LADRILLO.w,
        h: LADRILLO.h,
        padding: LADRILLO.padding,
        visible: LADRILLO.visible,
        origen_x: LADRILLO.origen_x,
        origen_y: LADRILLO.origen_y
      };
  }
}

ladrillos[0][0].visible = true;


//-- Dibujar ladrillos
for (let i = 0; i < LADRILLO.F; i++) {
  for (let j = 0; j < LADRILLO.C; j++) {

    //-- Si el ladrillo es visible se pinta
    if (ladrillos[i][j].visible) {
      ctx.beginPath();
      ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
    }
  }
}