class ball
{
    constructor(ctx) {

      this.ctx = ctx;
  
      // Tamaño
      this.size = 5;
  
      // Posicion inicial
      this.inX = 300;
      this.inY = 380;
  
      this.x = 0;
      this.y = 0;
  
      // Velocidad inicial de la bola
      this.inVX = 3;
      this.inVY = 0;
  
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
    
    update() {
        
        this.x += this.vx;
        this.y += this.vy;
    }


    draw() {
      
      this.ctx.beginPath();
      this.ctx.fillStyle='white';
  
      // Bola
      this.ctx.rect(this.x, this.y, this.size, this.size);
      this.ctx.fill();
    }
  
  
  }