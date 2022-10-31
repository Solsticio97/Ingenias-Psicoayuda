class Registro{
   constructor(PersonaRegistrada){
      this.nombre = PersonaRegistrada.nombre;
      this.apellido = PersonaRegistrada.apellido;
      this.email = PersonaRegistrada.email;
      this.contrasena = PersonaRegistrada.contrasena;
      this.ciudad = PersonaRegistrada.ciudad;
   }
}


let boton = document.getElementById("submit")
 boton.addEventListener("click", respuestaClick)
 function respuestaClick(e){
    e.preventDefault();
    let nombre= document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email= document.getElementById('email').value;
    let contrasena= document.getElementById('contrasena').value;
    let ciudad= document.getElementById('ciudad').value;
    console.log("Registro exitoso", "Nombre: ", nombre, "Apellido: ", apellido,
    "Email: ", email, "Contrasena: ", contrasena, "Ciudad: ", ciudad);
    registroObj.push(new Registro({nombre, apellido, email, contrasena, ciudad}))
    
 }
 var usuariosRegistrados = []
const registroObj = usuariosRegistrados.map(r=> new Registro(r))
console.log(registroObj);
var usuariosRegistrados = JSON.parse(localStorage.getItem("datos"))
 console.log("Localstorage: ", localStorage);
 
 console.log("typeof de Localstorage: ", typeof localStorage);

 const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
 
 
 
 guardarLocal("listaUsuarios", JSON.stringify(registroObj))
 