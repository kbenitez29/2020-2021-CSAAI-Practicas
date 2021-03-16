console.log("Ejecutnado JS...");

//-- Obtener el párrafo
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

const text1= document.getElementById('text1');
const text2 = document.getElementById('text2');

//-- Funcion de retrollamada de la pulsación del párrafo
boton1.onclick = () => {
    console.log("Acabas de pulsar un parrafo");
    text1.innerHTML+="1";
    
}

boton2.onclick = () => {
    console.log("Acabas de pulsar un parrafo");
    text2.innerHTML+="2";
    
}

