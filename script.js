function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let identidad = document.getElementById('identidad').value;
    
    //Se verifica que no estén vacíos los inputs    
    if (nombre == "" || apellido == ""  || identidad == "") {
        alert("Todos los campos son obligatorios");
        return false;
    }
    else {
        mostrarDatos();
    }
}

//Función que muestra en un div las variables ingresadas por el usuario
function mostrarDatos(){        
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value; 
    let identidad = "Identidad: "+document.getElementById('identidad').value;  
              
    let parrafo = document.createElement('p');
    let texto = document.createTextNode(nombre + " " + apellido + " " + identidad);
    parrafo.appendChild(texto); 
    document.getElementById('resultado').appendChild(parrafo);
    console.log(texto);                    
};

