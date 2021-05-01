class ball
{
    constructor(ctx) {

      this.ctx = ctx;
  
      // Tamaño
      this.size = 8;
  
      // Posicion inicial
      this.inX = canvas.width/2;
      this.inY = 720;
  
      this.x = 0;
      this.y = 0;
  
      // Velocidad inicial de la bola
      this.inVX = 5;
      this.inVY = 5;
  
      // Velocidad bola
      this.vx = 0;
      this.vy = 0;
  
      this.init();
    }

    // Funcion inicializadora
    init() {

        this.x = this.inX;
        this.y = this.inY;
    }
    
    // Actualiza la posición
    update() {
        
        this.x += this.vx;
        this.y += this.vy;
    }

    // Dibuja el objeto
    draw() {
      
      this.ctx.beginPath();
      this.ctx.fillStyle='white';
  
      // Bola
      this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
    }
  
  
  }