let series = ["Friends", "GOT", "The Office", "HIMYM", 10, true];

 document.write(series[1]);

 console.log(series.length);

 //mostrar todos los elementos de un arreglo con un bucle
 for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>"+series[posicion]);
 }

 //agregar elemento al final de un arreglo

 series.push("Black Mirror");

 document.write("<h5>Agregar elemento al final del arreglo</h5>");

 for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>"+series[posicion]); 
}

//agregar elemento en posicion particular

series.splice(1,0,"Death Note");

document.write("<h5>Agregar elemento en posicion 1 del arreglo</h5>");

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>"+series[posicion]);
}

//borrar elemento 
series.splice(3,1);

document.write("<h5>Eliminar elemento en posicion particular del arreglo</h5>");

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>"+series[posicion]);
}

//modificar valor de posicion particular
series[4] = "Peaky Blinders";

document.write("<h5>Modificar un elemento en posicion particular del arreglo</h5>");

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>"+series[posicion]);
}

