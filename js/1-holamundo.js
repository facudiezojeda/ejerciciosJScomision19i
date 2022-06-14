// mostrar mensaje en consola
console.log("hola comision");

//mostrar mensaje en html

document.write ("mensaje en pagina ");

//mostrar mensaje de alerta
 
//alert ("ventana emergente");

// crear o dclarar variable (var - let - const)

let alumno = "Facundo";
let edad = 27;

document.write("<br> Alumno: " + alumno)

alumno = "Marta";
document.write("<br> Alumno: " + alumno)

//pedir usuario que ingrese nombre de alumno

alumno = prompt("Ingrese nombre de alumno");
document.write("<br> Alumno: " + alumno);

const url = "https://campus.rollingcodeschool.com/login/index.php";
document.write("<br> URL: " + url);

let numero1 = 20;
let numero2 = parseInt(prompt("Ingrese un numero"));

document.write("<br>Resultado: "+ (numero1 + numero2));
