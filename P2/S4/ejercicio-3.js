console.log("Ejecutnado JS...");

//-- Obtener el párrafo
const test = document.getElementById('test');
const text = document.getElementById('text');

//-- Funcion de retrollamada de la pulsación del párrafo
test.onclick = () => {
    console.log("Acabas de pulsar un parrafo");
    text.innerHTML+="1";
    
}
