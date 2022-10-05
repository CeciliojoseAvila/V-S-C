const nombre = "CECILIO";
let edad = 35;
let mensaje= " ";

if(edad <18 ){

    mensaje = nombre +"ES MENOR DE EDAD ";
}else{

    mensaje = nombre +" ES MAYOR DE EDAD "
}

 let info = document.write(mensaje); //esto es para mostrar en el navegador 
 
/*let info = document.getElementById("dato"); estas dos lineas no me funcionaron
info.innerHTML= mensaje;*/

