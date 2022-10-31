let boton = document.getElementById("submit")
 boton.addEventListener("click", respuestaClick)
 function respuestaClick(e){
    e.preventDefault();
    let tipoConsulta = document.querySelector('input[name=op1]:checked');
    let cuotasnum  = document.querySelector('input[type=radio][name=op2]:checked');
    console.log("la consulta es ",tipoConsulta.value);
    console.log("Las cuotas son ", cuotasnum.value);
    let cuotaPresencial = 2500;
    let cuotaOnline = 1500;
    if(tipoConsulta.value==="presencial" && cuotasnum.value === "1" ){
        console.log('El costo de la consulta presencial es de $2500 en una cuota')
        let resultado= document.createElement('div');
        resultado.innerHTML = "<h3> El costo de la consulta presencial es de $2500 en una cuota </h3>" + " " +  "<h4> Gracias por usar el simulador de presupuesto </h4>"
        document.body.appendChild(resultado);
        let padre1 = document.getElementById("padre").getElementsByTagName('div')[1];
        document.getElementById('padre').insertBefore(resultado, padre1);
    }
    else if(tipoConsulta.value==="presencial" && cuotasnum.value === "3" ){
        let cuotas3 = (cuotaPresencial/3).toFixed(2);
        console.log('El costo de la consulta presencial es de 2500 en 3 cuotas de '+cuotas3);
        let resultado= document.createElement('div');
        resultado.innerHTML = '<h3>El costo de la consulta presencial es de 2500 en 3 cuotas de '+cuotas3 + " </h3>" +  " <h4>Gracias por usar el simulador de presupuesto </h4>"
        document.body.appendChild(resultado);
        let padre1 = document.getElementById("padre").getElementsByTagName('div')[1];
        document.getElementById('padre').insertBefore(resultado, padre1);
    }
    else if(tipoConsulta.value==="presencial" && cuotasnum.value === "6" ){
        let cuotas6 = (cuotaPresencial/6).toFixed(2);
        console.log('El costo de la consulta presencial es de 2500 en 6 cuotas de '+cuotas6);
        let resultado= document.createElement('div');
        resultado.innerHTML = '<h3>El costo de la consulta presencial es de 2500 en 6 cuotas de '+ cuotas6 + " </h3>" + "<h4>Gracias por usar el simulador de presupuesto  </h4>"
        document.body.appendChild(resultado);
        let padre1 = document.getElementById("padre").getElementsByTagName('div')[1];
        document.getElementById('padre').insertBefore(resultado, padre1);
    }
    else if(tipoConsulta.value==="online" && cuotasnum.value === "1" ){
        console.log('El costo de la consulta online es de 1500 en una cuota');
        let resultado= document.createElement('div');
        resultado.innerHTML = '<h3>El costo de la consulta online es de 1500 en una cuota</h3>'+ " " + "<h4>Gracias por usar el simulador de presupuesto </h4>"
        document.body.appendChild(resultado);
        let padre1 = document.getElementById("padre").getElementsByTagName('div')[1];
        document.getElementById('padre').insertBefore(resultado, padre1);
    }
    else if(tipoConsulta.value==="online" && cuotasnum.value === "3" ){
        let cuotas3 = (cuotaOnline/3).toFixed(2);
        console.log('El costo de la consulta online es de 1500 en 3 cuotas de  '+cuotas3);
        let resultado= document.createElement('div');
        resultado.innerHTML = '<h3>El costo de la consulta online es de 1500 en 3 cuotas de  '+cuotas3 + "</h3> " + "<h4>Gracias por usar el simulador de presupuesto</h4>"
        document.body.appendChild(resultado);
        let padre1 = document.getElementById("padre").getElementsByTagName('div')[1];
        document.getElementById('padre').insertBefore(resultado, padre1);
    }
    else if(tipoConsulta.value==="online" && cuotasnum.value === "6" ){
        let cuotas6 = (cuotaOnline/6).toFixed(2);
        console.log('El costo de la consulta online es de 1500 en 6 cuotas de '+cuotas6);
        let resultado= document.createElement('div');
        resultado.innerHTML = '<h3>El costo de la consulta online es de 1500 en 6 cuotas de '+cuotas6  +"  <h3> " +  "<h4>Gracias por usar el simulador de presupuesto</h4>"
        document.body.appendChild(resultado);
        let padre1 = document.getElementById("padre").getElementsByTagName('div')[1];
        document.getElementById('padre').insertBefore(resultado, padre1);
    }
}
 
        

        
        
    
   

 
