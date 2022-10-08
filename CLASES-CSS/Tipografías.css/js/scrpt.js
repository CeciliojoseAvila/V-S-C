/*var mainTitle = document.querySelector("#mainTitle");
function clickSobreH1() {
    //console.log("hicimos click sobre el h1");
mainTitle.classList.toggle("red-title");
}
mainTitle.addEventListener("click", clickSobreH1);*/
/*
//codigo ejemplo de formularios, hasta linea 43
var username = document.querySelector("#username");
var password = document.querySelector("#password");
var loginForm = document.querySelector("#loginForm");
//console.log(loginForm)
//console.log(username);eran pruebas en consola
//console.log(password); era prueba en consola
function validateValue (event){
    var element= event.target;    
    var fieldValue = element.value;
    var fieldName=element.name;
    //console.log(fieldValue)probando si coge valores
    if(fieldValue = " ") {
        alert(" El campo " + fieldName + " es obligatorio ");
    }
}
username.addEventListener("blur", validateValue);
password.addEventListener("blur", validateValue);

function submitData(event){
    event.preventDefault(); //conectar con el post "/" 
    //preventDef evita que se ejecute el efecto por defecto del element, que lo podemos dominar nosotros
    var usernameValue = username.value;
    var passwordValue= password.value;
   
    if(usernameValue==" " || passwordValue ==" ") {
        alert("el username o el password no fueron suministrados");
    }else{
        alert("perfecto tu información se está enviando");
    }    
    //console.log(usernameValue)
    //console.log(passwordValue)
    //console.log("VAMOS A ENVIAR LA INFO..");
}
loginForm.addEventListener("submit", submitData);
*/

/*{
    var element= event.target;    
    var fieldValue = element.value;
    //console.log(fieldValue)probando si coge valores
    if(fieldValue === " ") {
        alert("El campo es obligatorio");
    } //movemos para arriba este codigo
})*/ //lo mismo abajo con password

var user= {
    nombre: "Cecilio",
    apellido: "Avila",
    edad: 35,
    getInfo: function(){ 
    return "Hola, soy " + this.nombre + "  " + this.apellido + " y tengo " + this.edad + " años " ;
}
 }
var title= document.querySelector("#mainTitle");
//title.innerHTML = "Bienvenido " + user.nombre + " " +user.apellido; suprimo estas dos lineas para implem el this
//getInfo: function(){ return "Hola, soy" + this.nombre + "  " + this.apellido}
title.innerHTML = user.getInfo();
//ahora Arrays
var students= [
{fullName: "JUAN PEREZ", subject:"JavaScript"},
{fullName: "JUANA GONZALES", subject:"HTML Y CSS"},
{fullName: "FABIAN GOMEZ", subject:"PYTHON Y JAVA"},
{fullName: "CECILIO AVILA", subject:"BASE DE DATOS Y VSC"},
{fullName: "MARIA JOSE", subject:"ING. SISTEMAS Y PROGRAMACION"}
]

var studentsListUL= document.querySelector("#studentsList");
//console.log(studentsListUL); ahora hacemos el for para iterar
for(var i=0; i< students.length; i++){
    //console.log(students[i])//asi me muestra todos los datos registrados
   // console.log(students[i].fullName) //acá solo los nombres
   studentsListUL.innerHTML += "<li>" + students[i].fullName +  "  Está estudiando " + students[i].subject + "</li>";

}