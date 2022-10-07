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

//TABLA DEL 8
let mensaje = "La tabla del 8" +"</br>";
let mult = 0;
/*
for(let i=0;  i<10; i++){
    mult = 8 * i;
    mensaje= mensaje+ 8+"x" + i + "=" + mult + "</br>";
}

let info = document.getElementById("dato");
info.innerHTML= mensaje; */

// lo mismo con el ciclo while
let i =0;
while(i<11){
    mult = 8 * i;
    mensaje= mensaje+ 8+"x" + i + "=" + mult + "</br>";
    i++ 
}

//let info = document.getElementById("dato");
//info.innerHTML= mensaje; "</br>"

//ciclo do-while

 i =0;
 do{ mult = 9 * i + "</br>";;
      mensaje= mensaje + 9+"x" + i + "=" + mult + "</br>";
    i++
} while(i<11);

let info = document.getElementById("dato");
info.innerHTML= mensaje; 

