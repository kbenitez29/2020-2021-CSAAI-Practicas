console.log("Ejecutando JS....")
// METER IMAGENES EN BOTONES Y DESLIZADORES Y AÑADIR FUNCIONALIDADES EXTRA

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso a deslizadores
const deslizador_red = document.getElementById('deslizador_red');
const deslizador_green = document.getElementById('deslizador_green');
const deslizador_blue = document.getElementById('deslizador_blue');

//-- Valores de deslizadores
const range_value_red = document.getElementById('range_value_red');
const range_value_green = document.getElementById('range_value_green');
const range_value_blue = document.getElementById('range_value_blue');

//-- Acceso a botones
const gray = document.getElementById('gray');
const especular = document.getElementById('especular');
const inversion = document.getElementById('inversion');
const ruido = document.getElementById('ruido');
const color = document.getElementById('color');
//-- Función de retrollamada de imagen cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};


//-- Funcion de retrollamada del deslizador
deslizador_red.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value_red.innerHTML = deslizador_red.value;

  //-- Situar la imagen original en el canvas
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del deslizador
  umbral = deslizador_red.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
  console.log('Red');
}

deslizador_green.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_green.innerHTML = deslizador_green.value;
  
    //-- Situar la imagen original en el canvas
    ctx.drawImage(img, 0,0);
  
    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
    //-- Obtener el array con todos los píxeles
    let data = imgData.data
  
    //-- Obtener el umbral de verde del deslizador
    umbral = deslizador_green.value
  
    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
      if (data[i+1] > umbral)
        data[i+1] = umbral;
    }
  
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
    console.log('Green');
  }

  deslizador_blue.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_blue.innerHTML = deslizador_blue.value;
  
    //-- Situar la imagen original en el canvas
    ctx.drawImage(img, 0,0);
  
    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
    //-- Obtener el array con todos los píxeles
    let data = imgData.data
  
    //-- Obtener el umbral de azul del deslizador
    umbral = deslizador_blue.value
  
    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
      if (data[i+2] > umbral)
        data[i+2] = umbral;
    }
  
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
    console.log('Azul');
  }

  // Funcion boton de grises
  gray.onclick = () => {
    var brillo = 0;
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;
    for (var i = 0; i < data.length; i+=4) {
      brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
      data[i] = brillo;
      data[i+1] = brillo;
      data[i+2] = brillo;
    }
    ctx.putImageData(imgData, 0, 0);
    console.log('Gris');
  }

  // Funcion boton de giro vertical
  especular.onclick = () => {

    ctx.translate(img.width,0);
    ctx.scale(-1,1);
    ctx.drawImage(img, 0, 0);
    ctx.putImageData(imgData, 0, 0);
    console.log('Especular');
  }

  // Funcion boton de giro horizontal
  inversion.onclick =()=>{
   
    ctx.drawImage(img, 0,0);
    ctx.translate(0,2*(img.height)/2);
    ctx.scale(1,-1);
    ctx.drawImage(img, 0,0);
    ctx.putImageData(imgData, 0, 0);
    console.log('Inversion');
  }

  // Funcion boton de ruido
  ruido.onclick = () =>{
    
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
    let data = imgData.data;
      for (let i = 0; i < data.length; i+=4) {
         let aleat = (Math.random() * 100);
         data[i] = data[i]+aleat;
         data[i+1] = data[i+1]+aleat;
         data[i+2] = data[i+2]+aleat;
      }
      ctx.putImageData(imgData, 0, 0);
  }

  // Funcion de imagen a color
    color.onclick = () => {
        ctx.drawImage(img, 0,0);
        ctx.putImageData(imgData, 0, 0);
    }

console.log("Fin...");