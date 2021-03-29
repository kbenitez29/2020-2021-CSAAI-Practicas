console.log("Ejecutando JS...");

//-- Elementos de la interfaz de la calculadora
const numbers = document.getElementsByClassName("number");
const display = document.getElementById("display");
const operators = document.getElementsByClassName("operator");
const sqrt = document.getElementById("sqrt");
const equal = document.getElementById("equal");
const dots = document.getElementById("dot");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");


//-- Estados de la calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2: 3,
}

//-- Variable de estado
//-- Por defecto su valor será el del estado inicial
let estado = ESTADO.INIT;

//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digit(dig)
{
  if (estado == ESTADO.INIT) {
    estado = ESTADO.OP1;
    display.innerHTML = dig;
    console.log("Valor: " + dig);
    console.log("Estado: " + estado);
  } else if(estado == ESTADO.OP1 || estado == ESTADO.OP2 ){
    display.innerHTML += dig;
    console.log("Valor: " + dig);
    console.log("Estado: " + estado);
  } else if (estado == ESTADO.OPERATION){
    estado = ESTADO.OP2;
    display.innerHTML += dig;
    console.log("Valor: " + dig);
    console.log("Estado: " + estado);
  } 
}
  
for (let number of numbers) {
  //-- El parámetro ev.target contiene el boton
  //-- que ha recibido el click
  number.onclick = (ev) => {
    digit(ev.target.value)
    //display.innerHTML +=ev.target.value;
  }
}

for (let operator of operators) {
  operator.onclick = (ev) => {
    if(estado == ESTADO.OP1){
      digit(ev.target.value);
      //display.innerHTML += (ev.target.value);
      estado = ESTADO.OPERATION;
      console.log("Estado: " + estado);
    }
  }
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = " ";
  estado = ESTADO.INIT;
  console.log("Valor: " + "clear");
  console.log("Estado: " + estado);
}

//-- Borrar el último número de la expresión
del.onclick = () =>{
  display.innerHTML = display.innerHTML.slice(0,-1) // Slice coge elemento inicial y final a extraer en pantalla
}

dots.onclick = () => {
  display.innerHTML += ".";

}

//-- Raiz cuadrada definicion
sqrt.onclick = () => {
  display.innerHTML = Math.sqrt(display.innerHTML);
}

//-- Evaluar la expresion
equal.onclick = () => {
  if(estado == ESTADO.OP2){
    display.innerHTML = eval(display.innerHTML);
    estado = ESTADO.OP1;
    console.log("Valor: " + "equal");
    console.log("Estado: " + estado);
  }
}