// document.write("Hola mundo linea 1");
// document.write("<br>Hola mundo linea 2");
// document.write("<br>Hola mundo linea 3");
// document.write("<br>Hola mundo linea 4");
// document.write("<br>Hola mundo linea 5");


//while
//     let contador = 1;

//     while(contador <= 50){
//         document.write("Hola mundo linea " + contador + "<br>");
//         contador = contador + 2;
//     }


//do while

// let contar = 0;

// do{
//     document.write("Hola mundo linea " + contar + "<br>");
//     contar--;
// }while(contar >= 1)


//for 

// for(let indice = 1; indice <= 50; indice = indice +1){
//     document.write("Hola mundo linea " + indice + "<br>");
// }


// let frase = prompt("Ingrese una frase");

// console.log(frase);
// console.log(frase.length);


// for(let posicion = 0; posicion < frase.length; posicion++){
//     if(frase.charAt(posicion) == "a" || frase.charAt(posicion) == "e" || frase.charAt(posicion) == "i" || frase.charAt(posicion) == "o" || frase.charAt(posicion) == "u")
//  document.write(frase.charAt(posicion))
// };

//ej 10 tp2

let filas = parseInt(prompt("Ingrese numero de filas"));
let columnas = parseInt(prompt("Ingrese numero de columnas"));

let dato = filas * columnas;
let resultado = dato;

// for (let i = 0; i < dato; i++) {
//     document.write(resultado-- + "<br>");
// }


document.write("<table border>");

//bucle que maneja filas

for (let indiceFila = 0; indiceFila < filas; indiceFila++) {
    document.write("<tr>");

    //creo bucle que maneja celdas
    for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
        document.write("<td>"+resultado-- +"</td>");
    }

    document.write("</tr>");
}

document.write("</table>");





