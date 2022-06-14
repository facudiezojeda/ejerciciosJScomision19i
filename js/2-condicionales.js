let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));
let numero3 = parseInt(prompt("Ingrese un numero mas"));

console.log(numero1);
console.log(numero2);
console.log(numero3);

// if(numero1 > numero2){
//     document.write(numero1)
// }else if(numero1 == numero2){
//         document.write("Ambos numeros son iguales")
//     }else{
//         document.write("El numero 2 es mayor que el numero 1")
//     }


if(numero1 > numero2 && numero1 > numero3){
    document.write(numero1)
}
else if(numero2 > numero3){
    document.write(numero2)
}
else if(numero1 == numero2 && numero2 == numero3){
    document.write("Los tres numeros son iguales.")
}
else{
    document.write(numero3)
}
