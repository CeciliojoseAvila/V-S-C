/*var mainTitle = document.querySelector("#mainTitle");
function clickSobreH1() {
    //console.log("hicimos click sobre el h1");
mainTitle.classList.toggle("red-title");
}
mainTitle.addEventListener("click", clickSobreH1);*/

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
/*{
    var element= event.target;    
    var fieldValue = element.value;
    //console.log(fieldValue)probando si coge valores
    if(fieldValue === " ") {
        alert("El campo es obligatorio");
    } //movemos para arriba este codigo
})*/ //lo mismo abajo con password
