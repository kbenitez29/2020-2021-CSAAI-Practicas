console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 600;
canvas.height = 800;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


ctx.beginPath();

    //-- Definir un rectangulo
    ctx.rect(300,740, 50, 10);

    //-- Dibujar
    ctx.fillStyle = 'white';

    //-- Rellenar
    ctx.fill();


    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(320, 730, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';

    //-- Dibujar el relleno
    ctx.fill()
    

    //-- Texto solido
    ctx.font = "25px Arial";
    ctx.fillStyle = 'white'
    ctx.fillText("Puntos", 450, 30);
    ctx.fillText("Vidas", 60, 30);

    /* ladrillos
    for(i=0; i<5;i++){
        for(j=0;j<9;j++){
               

        }
    } */

 
    ctx.closePath()