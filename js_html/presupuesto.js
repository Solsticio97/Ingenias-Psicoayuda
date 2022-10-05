let  presupuesto= prompt("Ingrese el numero 1 para consulta presencial, o 2 para consulta virtual");
while(presupuesto != "1" || presupuesto !="2" ){
    let cuotaPresencial = 2500;
    let cuotaOnline = 1500;
        if((presupuesto == "1")){
            alert('La consulta presencial cuesta $2500');
            let cuotas= prompt("Ingrese cuantas cuotas desea 1, 3 o 6");
            while (cuotas != "1" || cuotas != "3" || cuotas != "6" ) {
                if(cuotas=="1"){
                    alert("El pago en una cuota es de $2500");
                    alert("Gracias por usar el simulador de presupuesto");
                    break;
                }
                else if(cuotas=="3"){
                   let cuotas3 = cuotaPresencial/3;
                   alert("El pago de cada cuota es de $"+cuotas3);
                   alert("Gracias por usar el simulador de presupuesto");
                    break; 
                    
                } 
                else if(cuotas=="6"){ 
                    let cuotas6 = cuotaPresencial/6;
                    alert("El pago de cada cuota es de $"+cuotas6);
                    alert("Gracias por usar el simulador de presupuesto");
                    break;
                    
                 } 
                else{
                    alert("El valor de cuotas erroneo, ingrese nuevamente");
                    
                }    

            cuotas= prompt("Ingrese cuantas cuotas desea 1, 3 o 6");
            
            }   
            break;
        }
               
        else if(presupuesto =="2")
        {
            alert('la consulta online cuesta $1000');
            let cuotas= prompt("Ingrese cuantas cuotas desea 1, 3 o 6");
            while (cuotas != "1" || cuotas != "3" || cuotas != "6" ) {
                if(cuotas=="1"){
                    alert("El pago en una cuota es de $1000");
                    alert("Gracias por usar el simulador de presupuesto");
                    break;
                }
                else if(cuotas=="3"){
                   let cuotas3 = cuotaOnline/3;
                   alert("El pago de cada cuota es de $"+cuotas3);
                   alert("Gracias por usar el simulador de presupuesto");
                   break;
                } 
                else if(cuotas=="6"){ 
                    let cuotas6 = cuotaOnline/6;
                    alert("El pago de cada cuota es de $"+cuotas6);
                    alert("Gracias por usar el simulador de presupuesto");
                    break;
                 } 
                else{
                    alert("El valor de cuotas erroneo, ingrese nuevamente");
                    
                }    
            cuotas= prompt("Ingrese cuantas cuotas desea 1, 3 o 6");
            
            }
            break;
        }
    
        else{
            alert('el valor ingresado no es valido, ingrese nuevamente"');
        }
        
    
    presupuesto= prompt("Ingrese el numero 1 para consulta presencial, o 2 para consulta virtual");
}