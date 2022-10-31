
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
   
   
 }

console.log("Localstorage: ", localStorage);
console.log("typeof de Localstorage: ", typeof localStorage);

const guardarLocal = () => { localStorage.setItem("Usuario ingresado", nuevoUsuario) };

guardarLocal("listaUsuarios", JSON.stringify(nuevoUsuario))

const UsuariosAlmacenados = JSON.parse(localStorage.getItem(Usuario));
