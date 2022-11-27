class Profesional{
    constructor(profesional){
      this.nombre = profesional.nombre;
      this.calificacion = profesional.calificacion;
      this.tipoConsulta = profesional.tipoConsulta;
    }
 }
 
 const profesionales = [
     {
         nombre: "stephanie piniero",

         calificacion: 5,
         tipoConsulta: "presencial"
     },
     {
         nombre: "Ariel Borzone",
         calificacion: 4,
         tipoConsulta: "online"
     },
     {
         nombre: "ana gimenez",
         calificacion: 5,
         tipoConsulta: "presencial"
     },
     {
         nombre: "Merida Black",
         calificacion: 3.5,
         tipoConsulta: "online" 
     }
 ];
 
 const profesionalesObj = profesionales.map(p => new Profesional(p))
 console.log(profesionalesObj)
 
 profesionalesObj.push(new Profesional({nombre:"Camila Martinez", calificacion:"5", tipoConsulta:"online"}))

 console.log(profesionalesObj)

 //localStorage

console.log("Localstorage: ", localStorage);
console.log("typeof de Localstorage: ", typeof localStorage);

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("listaProfesionales", JSON.stringify(profesionales));

const enJSON = JSON.stringify(profesionalesObj);
localStorage.setItem("profesionalesObj", enJSON)

//Obtenemos el listado de profesionales almacenado

const almacenados = JSON.parse(localStorage.getItem("listaprofesionales"));
const profesionales1 = [];


let boton = document.getElementById("submit")
 boton.addEventListener("click", respuestaClick)
 function respuestaClick(e){
    e.preventDefault();
    let motivo = document.getElementById('motivo').value
    console.log(motivo);
    let listaPsicologo = document.getElementById("listaPsicologo");
    let indiceSeleccionado = listaPsicologo.selectedIndex;
    let opcionSeleccionada = listaPsicologo.options[indiceSeleccionado];
    let valorSeleccionado = opcionSeleccionada.value;
    console.log(valorSeleccionado);
    let modalidad= document.getElementById("modalidad");
    let indiceSelect = modalidad.selectedIndex;
    let opcionSelect = modalidad.options[indiceSelect];
    let valorSelect = opcionSelect.value;
    console.log(valorSelect);
    var dateControl = document.querySelector('input[type="date"]');
    console.log(dateControl.value);
    let fechaElegida = dateControl.value
    var timeControl = document.querySelector('input[type="time"]');
    console.log(timeControl.value);
    let horaElegida = timeControl.value;
    let resultado= document.createElement('div');
    resultado.innerHTML = "<h6> Se ha agendado correctamente su cita " + valorSelect +" "+"con el psicologo/a "+ " " + valorSeleccionado+ " "+ "el día " + " " + fechaElegida + " " + "a las " + " " + horaElegida + " " +" horas" + " " + "con el motivo: " + " " + motivo + "</h6>"
    document.body.appendChild(resultado);
    let padre1 = document.getElementById("padre").getElementsByTagName('div')[1];
    document.getElementById('padre').insertBefore(resultado, padre1);
 }