
 class Usuario{
    constructor(usuario){
      this.email = usuario.email;
      this.password = usuario.password;
      
    }
}

var nuevoUsuario = [];
const usuariosObj = nuevoUsuario.map(u=> new Usuario (u))
console.log(usuariosObj)
var nuevoUsuario = JSON.stringify(localStorage.getItem(usuariosObj));


let boton = document.getElementById("submit")
 boton.addEventListener("click", respuestaClick)
 function respuestaClick(e){
    e.preventDefault();
    let email= document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log("El email ingresado es ", email);
    console.log("La contrasena ingresada es ",password);
    usuariosObj.push(new Usuario({email, password}))
    let resultado= document.createElement('div');
    resultado.innerHTML = "<h4> Bienvenido/a a la pagina de PsicoAyuda " + email + "! </h4>"
    document.body.appendChild(resultado);
    let padre2 = document.getElementById("padre").getElementsByTagName('div')[1];
    document.getElementById('padre').insertBefore(resultado, padre2);
   
 }


