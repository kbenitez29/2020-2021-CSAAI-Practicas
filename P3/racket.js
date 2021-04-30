class racket
{
  constructor(ctx) {

    this.ctx = ctx;

    // Tamaño
    this.width = 77;
    this.height = 13;

    // Posicion partida
    this.inX = 262;
    this.inY = 732;

    // velocidad movimiento de raqueta
    this.inVel = 5;

    // Velocidad inicial 
    this.vel = 0;

    // Inicializar 
    this.init();
  }

  // Funcion inicializadora
  init()
  {
    this.x = this.inX;
    this.y = this.inY;
  }
  
  // Actualiza
  update()
  {
    this.x += this.vel;
  }

  // Dibuja el objeto
  draw()
  {
    this.ctx.beginPath();
    this.ctx.fillStyle='white';

    // Raqueta 
    this.ctx.rect(this.x, this.y, this.width, this.height);

    this.ctx.fill();
    this.ctx.closePath();
  }
}