// completar las variables para que el programa funcione

window.addEventListener('load', function() {
    //capturar HTML 
    let titulo = document.querySelector("#titulo")
  
        titulo.addEventListener("mouseover", function(){alert()
            let saludo = document.querySelector("#saludo");
            let nombre =prompt("Ingresa Tu Nombre")
            let span= document.querySelector("span")

            if (nombre == " "){
                saludo.innerText = "BIENVENID@";
                titulo.style.display="none"
                saludo.style.display='flex'
            } else {
                saludo.innerText =`BIENVENID@ ${nombre}`
                saludo.style.textTransform = "uppercase";
                titulo.style.display="none"
                span.style.display='flex'


            }
            span.addEventListener("click" , function(){
                e.preventDefault();
            })

            

        })
        
        

 
    
 
   
   
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
//    let boton = ;
 
 
 }) 


 