console.log("Ejecutando JS...");


const canvas = document.getElementById("canvas");
const lives = document.getElementById("lives");
const points = document.getElementById("points");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 790;

// Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

// Coordenadas del objeto
let x = 0;
let y = 10;

// Velocidades del objeto
let velx = 3;
let vely = 1;

// Puntuación
let nPoints = 0;

// Vidas
let nLives = 3;

//-- Constantes de los ladrillos
const LADRILLO = {
  F: 5,  // Filas
  C: 9,  // Columnas
  w: 50,
  h: 12,
  origen_x: 20,
  origen_y: 90,
  padding: 15,
  visible: true
};

//-- Estructura de los ladrillos
const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
  ladrillos[i] = [];
  for (let j = 0; j < LADRILLO.C; j++) {
    ladrillos[i][j] = {
        x: LADRILLO.origen_x + (LADRILLO.w + LADRILLO.padding) * j,
        y: LADRILLO.origen_y + (LADRILLO.h + LADRILLO.padding) * i,
        w: LADRILLO.w,
        h: LADRILLO.h,
        padding: LADRILLO.padding,
        visible: LADRILLO.visible,
        
      };
  }
}

// Crea pelota
const pelota = new ball(ctx);

// Crea raqueta
const raqueta = new racket(ctx);

//-- Funcion de retrollamada de tecla pulsada
window.onkeydown = (e) => {
  
  //-- Comprobar si la tecla es un espacio
    if (e.key == ' ') {
      update();
    }
  }

// Pintar elementos
function draw() {

  // Dibuja pelota y raqueta a partir de clase
  pelota.draw();
  raqueta.draw();

  // Marcador de puntos y vidas
  ctx.beginPath();
    ctx.font = "20px Azonix";
    ctx.fillStyle = 'white'
    ctx.fillText("Lives", 480, 30);
    ctx.fillText(nLives, 500, 55); 
  
  ctx.beginPath();
    ctx.font = "20px Azonix";
    ctx.fillStyle = 'white'
    ctx.fillText("Points", 55, 30);
    ctx.fillText(nPoints, 80, 55);


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
  ctx.closePath();
}



// Actualiza los elementos
function update(){

  pelota.update();
  raqueta.update();


  //Borrar canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar
  draw();

  // Actualizar
  requestAnimationFrame(update);
}

update();
