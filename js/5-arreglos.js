//funcion muestra elementos del arreglo

function mostrarArreglos(titulo){
    document.write("<h5>"+ titulo +"</h5>");

    for (let posicion = 0; posicion < series.length; posicion++) {
        document.write("<br>" + series[posicion]);
    }
}

let series = ["Friends", "GOT", "The Office", "HIMYM", 10, true];

document.write(series[1]);

console.log(series.length);

//mostrar todos los elementos de un arreglo con un bucle

mostrarArreglos("Mostrar todos los elementos de un arreglo con un bucle");


//agregar elemento al final de un arreglo

series.push("Black Mirror");

mostrarArreglos("Agregar elemento al final de un arreglo con un bucle");


//agregar elemento en posicion particular

series.splice(1, 0, "Death Note");

mostrarArreglos("Agregar elemento en posicion 1 del arreglo");


//borrar elemento 
series.splice(3, 1);

mostrarArreglos("Eliminar en posicion particular del arreglo");


//modificar valor de posicion particular
series[4] = "Peaky Blinders";

mostrarArreglos("Modificar elemento en posicion particular del arreglo");


