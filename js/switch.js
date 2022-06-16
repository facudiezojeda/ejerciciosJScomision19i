/* switch(opcion){
    case 1: 
      todas las lineas de codigo que elija
      break;

    case "palabra": 
      todas las lineas de codigo que elija
      break;
    
    default:
      lineas de codigo a ejectuar si opcion es distinta a cases
}*/

let estacion = prompt("Ingrese estacion del año preferida: 1-Verano 2-Otoño 3-Invierno 4-Primavera");

switch(estacion){
    case "1":
        document.write("Helado");
        break;

    case "2": 
        document.write("Cafe");
        break;

    case "3":
        document.write("Guiso");
        break;
    
    case "4":
        document.write("Sanguche de milanesa");
        break;

    default:
        document.write("Opcion erronea, elija nuevamente");
    }