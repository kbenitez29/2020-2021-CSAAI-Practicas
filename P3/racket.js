class racket
{
  constructor(ctx) {

    this.ctx = ctx;

    // Tamaño
    this.width = 50;
    this.height = 10;

    // Posicion partida
    this.inX = 280;
    this.inY = 360;

    // velocidad movimiento
    this.inVel = 5;

    // Velocidad 
    this.vel = 0;

    // Inicializar 
    this.init();
  }

  // Funcion inicializar 
  init()
  {
    this.x = this.inX;
    this.y = this.inY;
  }

  update()
  {
    this.y += this.vel;
  }


  draw()
  {
    this.ctx.beginPath();
    this.ctx.fillStyle='white';

    // Raqueta 
    this.ctx.rect(this.x, this.y, this.width, this.height);

    this.ctx.fill();
  }
}