/*const nombre = "CECILIO";
let edad = 35;
let mensaje= " ";

if(edad <18 ){

    mensaje = nombre +"ES MENOR DE EDAD ";
}else{

    mensaje = nombre +" ES MAYOR DE EDAD "
}

 let info = document.write(mensaje); //esto es para mostrar en el navegador */
 
/*let info = document.getElementById("dato"); estas dos lineas no me funcionaron
info.innerHTML= mensaje;*/

//DESDE LA LINEA 19  HASTA LA 51 
/*//TABLA DEL 8
let mensaje = "La tabla del 8" +"</br>";
let mult = 0;
/*
for(let i=0;  i<10; i++){
    mult = 8 * i;
    mensaje= mensaje+ 8+"x" + i + "=" + mult + "</br>";
}

let info = document.getElementById("dato");
info.innerHTML= mensaje; */

/*// lo mismo con el ciclo while
let i =0;
while(i<11){
    mult = 8 * i;
    mensaje= mensaje+ 8+"x" + i + "=" + mult + "</br>";
    i++ 
}

//let info = document.getElementById("dato");
//info.innerHTML= mensaje; "</br>"

//ciclo do-while //TABLA DEL 9

 i =0;
 do{ mult = 9 * i + "</br>";;
      mensaje= mensaje + 9+"x" + i + "=" + mult + "</br>";
    i++
} while(i<11);

let info = document.getElementById("dato");
info.innerHTML= mensaje; */

/*//AHORA CON FUNCIONES JS / hasta linea 85
let nombre = "PEDRO ANTONIO MARTINEZ";
function muestraMiNombre(){
    document.body.innerHTML = "<h1> Mi nombre es: " + nombre + " TRABAJO TODO LO QUE RESULTE"+ "</h1>";
}
muestraMiNombre();
//FUNCION ANONIMA(PORQUE NO TIENE NOMBRE EN LA FUNCION)
let saludo = function(){
    return "HOLA </br>";
}
document.write(saludo());

//FUNCION FLECHA
const saludo2=(nombre2)=>{
    return " hola " + nombre2 + " </br>";
}
document.write(saludo2(" CECILIO "));

//FUNCION PREDEFINIDA
let num = "8";
let suma = parseInt(num) + 5; //acá coloco el parseIn
document.write(suma);  //asi me une/concatena 8y5=85, debo usar parseInt pra intero
// funciones predefinidas: parseInt(), parseFloat(), isNan(),isFinity(),encodeURI(),decodeURI(),
//encodeURIComponent(),decodeURIComponent(), eval(). */

/*//FUNCIONES DE AOUTOINVOCACION //QUE RECIBAN O NO PARAMETROS
(function(){
    alert("hola a todos");
})()

(function(nombre){
    alert("hola que más "+ nombre );
})(" Cecilio José ") */
/*
//FUNCIONES DENTRO DE OTRA
function a(num){
    function b(num2){
        return num2*3;
    }
    return b(num);
}
document.write(a(8));

//FUNCIONES QUE RETORNAN FUNCIONES
function a(){
    alert("Hola");
    return function(){
        return alert("Cecilio Jose");
    }
}
a()();
*/
/*
//Llamados Call y Apply
function sumar( a,b){
    return a+b +" <br>";
}
var c=sumar.call(c, 9,9 );
document.write(c);

var c=sumar.apply(c, [9,9,9]);
document.write(c);
*/

/*//IMPORT Y EXPORTACIONES INDIVIDUAL
import heroes, {owner} from './datos/data';

//Find
export const getHeroeById= (id)=>{
    return heroes.find((heroe)=> heroe.id == id);
}
console.log(getHeroeById(heroes));
//Filter
const getHeroeByOwner= (owner) => heroes.filter((heroe)=>heroe.owner ==owner);   
console.log(getHeroeByOwner('DC'));;*/

import {heroes} from './datos/data.js';

console.log(heroes);
//para ejecutar y probar = node -r esm MainUdeA.js
