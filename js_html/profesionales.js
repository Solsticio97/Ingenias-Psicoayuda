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