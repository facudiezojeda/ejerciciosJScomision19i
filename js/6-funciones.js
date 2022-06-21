// crear o declarar funciones sin parametros

function saludar(){
    //todo el codigo a ejecutar
    document.write("Hola mundo");
}

// crear o declarar funciones con parametros

function saludo(nombre, apellido){
    document.write("<br> Hola mi nombre es: " + nombre + "<br>Y mi apellido es: " + apellido);
}
// las dos variables creadas dentro de la funcion (nombre y apellido) solo pueden usarse dentro de la funcion. No puede usarse fuera de ella.


//funciones que retornan un valor

function convertirDolarAPesos(dolares){
    let pesosFinales = dolares * 187;
    return pesosFinales;
}

//llamar o invocar funcion
saludar(); 


 let nombreSolicitado = prompt("Ingrese nombre");
 let apellidoSolicitado = prompt("Ingrese apellido");

 saludo(nombreSolicitado, apellidoSolicitado);  
 

//invocamos funcion que retorna un valor

let producto = convertirDolarAPesos(500);
document.write("<br>Producto RTX3090: $" + producto);

//funcion en forma de flecha

let convertirDolarAPesos = (dolares) =>{
    let pesosFinales = dolares * 187;
    return pesosFinales;
}