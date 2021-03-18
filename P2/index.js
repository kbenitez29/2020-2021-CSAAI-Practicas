console.log("Ejecutando JS...");

//-- Obtener el párrafo
const number = document.getElementById('fila 1');
const display = document.getElementById('display');

//-- Funcion de retrollamada de la pulsación del párrafo
number.onclick = () => {
    console.log('number');
    display.innerHTML+=number.value

}