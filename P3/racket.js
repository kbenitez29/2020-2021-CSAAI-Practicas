class racket
{
  constructor(ctx) {

    this.ctx = ctx;

    // Tamaño
    this.width = 77;
    this.height = 13;

    // Posicion partida
    this.inX = 265;
    this.inY = 732;

    // velocidad movimiento
    this.inVel = 5;

    // Velocidad 
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
    this.y += this.vel;
  }

  // Dibuja el objeto
  draw()
  {
    this.ctx.beginPath();
    this.ctx.fillStyle='white';

    // Raqueta 
    this.ctx.rect(this.x, this.y, this.width, this.height);

    this.ctx.fill();
  }
}