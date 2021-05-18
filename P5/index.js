
//----- Obtener elemento de video y configurarlo
let directo = document.getElementById("directo");

// Videos
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");

// Botones de camaras
const btn_video1 = document.getElementById("btn_video1");
const btn_video2 = document.getElementById("btn_video2");
const btn_video3 = document.getElementById("btn_video3");

// Boton test
const btn_test = document.getElementById("btn_test");

// Botones encendido - apagado
const btn_src_on = document.getElementById("btn_src_on");
const btn_src_off = document.getElementById("btn_src_off");

// Botones de bucle
const btn_bucle_on = document.getElementById("btn_loop_on");
const btn_bucle_off = document.getElementById("btn_loop_off");

//-- Variables del bucle
var bucle = false;
const begin = 0;
const finish = begin + 2;

//-- Establecer las dimensiones de los vídeos
directo.width=800;
directo.height=370;
video1.width=350;  
video1.height=300;

video2.width=350;  
video2.height=300;

video3.width=350;  
video3.height=300;

//-- Imagen de Test usada
const TEST_IMAGE_URL = "test.png";

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
directo.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;
video3.poster = TEST_IMAGE_URL;

//-- Boton de FUENTES-ON
btn_src_on.onclick = () => {
 
    //-- Establecer la fuente de las camaras
    video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
    video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
    video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"; 
    //-- Reprodeucimos un vídeo, desde el comienzo
    video1.currentTime = 0;
    video1.play();

    video2.currentTime = 0;
    video2.play();

    video3.currentTime = 0;
    video3.play();

    //-- Y en silencio...
    video1.muted = true;
    video2.muted = true;
    video3.muted = true;

    //-- En la emisión en directo ponemos la imagen de prueba
    directo.poster = TEST_IMAGE_URL;
};

// Activacion de bucle
btn_bucle_on.onclick = () => {
    directo.currentTime = begin;
    bucle = true;
    console.log('Bucle ON');
  }


// Intervalo de repeticion
setInterval(()=>{
    if(bucle){
      if (directo.currentTime > finish){
          directo.currentTime = begin;
      }
    }
  },20);

// Desactivacion de bucle
btn_bucle_off.onclick = () => {
    console.log('Bucle OFF');
    bucle = false;
}
 
//-- Boton de FUENTES-OFF
btn_src_off.onclick = () => {

    // Muestra imagen test en directo
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;

    // Muestra imagen test en video 1
    video1.poster = TEST_IMAGE_URL;
    video1.src = null;

    // Muestra imagen test en video 2
    video2.poster = TEST_IMAGE_URL;
    video2.src = null;

    // Muestra imagen test en video 3
    video3.poster = TEST_IMAGE_URL;
    video3.src = null;
}


//-- Botón de Test
btn_test.onclick = () => {
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
};

//-- Botón de Selección de la cámara 1
btn_video1.onclick = () => {
    directo.src = video1.src;
    directo.currentTime = video1.currentTime;
    directo.play();
    directo.poster=null;
};

//-- Botón de Selección de la cámara 2
btn_video2.onclick = () => {
    directo.src = video2.src;
    directo.currentTime = video1.currentTime;
    directo.play();
    directo.poster=null;
};

//-- Botón de Selección de la cámara 3
btn_video3.onclick = () => {
    directo.src = video3.src;
    directo.currentTime = video3.currentTime;
    directo.play();
    directo.poster=null;
};

