console.log("Ejecutando JS...");


const canvas = document.getElementById("canvas");
/* const lives = document.getElementById("lives");
const points = document.getElementById("points");
 */

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
  
    if (e.keyCode == 39) {
      if(raqueta.x >= 518){
        raqueta.vel = 0;
        console.log(x);
      }else{
        raqueta.vel = raqueta.inVel*1; 
        console.log("Derecha");
      }
    }else if (e.keyCode == 37) {
      if(raqueta.x<=0){
        raqueta.vel = 0;
      }else{
        raqueta.vel = raqueta.inVel * -1; 
        console.log("Izquierda");
      }
    }else if (e.keyCode == 32){
      // Pelota en su posicion inicial
      pelota.vx = pelota.inVX;
      pelota.vy = pelota.inVY;

      }  
    }
   

//-- Deteccion de liberacion de tecla
window.onkeyup = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39){

      //-- Velocidad de la raqueta a 0
      raqueta.vel = 0;
    }
  
} 

// Pintar elementos
function draw() {

  // Dibuja pelota y raqueta a partir de clase
  pelota.draw();
  raqueta.draw();

  // Marcador de puntos y vidas
  
    ctx.font = "20px Azonix";
    ctx.fillStyle = 'white';
    ctx.fillText("Lives", 480, 30);
    ctx.fillText(nLives, 500, 55); 
  
    ctx.font = "20px Azonix";
    ctx.fillStyle = 'white';
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
  
}

// Actualiza los elementos
function update(){

  raqueta.update();
  
  // Condicion de rebote en extremos verticales del canvas
  if (pelota.x < 10 || pelota.x >= (canvas.width - 10) ) {
    pelota.vx = pelota.vx * -1;
  }

  // Condición de rebote en extremos horizontales del canvas
  if (pelota.y <= 10 ) {
    pelota.vy = pelota.vy * -1;
  }

  //-- Pelota llega a limite inferior
  if (pelota.y >= canvas.height) {
    pelota.vx = 0;
    pelota.vy = 0;
    pelota.x = pelota.inX;
    pelota.y = pelota.inY;
    raqueta.x = raqueta.inX
    nLives = nLives - 1;
    if (nLives==0){
      pelota.vx = 0;
      pelota.vy = 0;
      console.log('Has perdido');
      over.innerHTML = "Game over";
      re.innerHTML = 'Recarga la página para volver a jugar'
      // falta hacer que se reinicie
    }
  }  

  //-- Colision con la raqueta
  if (pelota.x >= raqueta.x && pelota.x <=(raqueta.x + raqueta.width) &&
    pelota.y >= raqueta.y && pelota.y <=(raqueta.y + raqueta.height)) {
    pelota.vy = pelota.vy * -1;
    pelota.vx = pelota.vy;
  }

 

  // Actualizar la posición
  /* x = x + velx;
  y = y + vely; */

  pelota.update();
  //Borrar canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar
  draw();

  // Actualizar
  requestAnimationFrame(update);
}

update();
