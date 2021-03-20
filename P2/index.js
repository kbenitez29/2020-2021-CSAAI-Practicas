console.log("Ejecutando JS...");

const numbers = document.getElementsByClassName("number");
const display = document.getElementById("display");
const operators = document.getElementsByClassName("operator");
const sqrt = document.getElementById("sqrt");
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");

//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digit(value)
{
  console.log("Valor: " + value);
}

for (let number of numbers) {

  //-- Establecer la funcion de llamada del boton i
  //-- El parámetro ev.target contiene el boton
  //-- que ha recibido el click
  number.onclick = (ev) => {
    digit(ev.target.value)
    display.innerHTML+=(ev.target.value)
  }
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = " ";
}

//-- Evaluar la expresion
equal.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

for (let operator of operators) {
  operator.onclick = (ev) => {
    digit(ev.target.value)
    display.innerHTML+=(ev.target.value)
  }
}

//-- Raiz cuadrada definicion
sqrt.onclick = () => {
  display.innerHTML = Math.sqrt(display.innerHTML);
}

dot.onclick = () => {
  display.innerHTML + ".";
}