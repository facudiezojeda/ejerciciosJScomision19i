// let email = "pablodominguez@gmail.com";
// let password = "A123456";
// let domicilio = "Las Piedras 567";
// let localidad = "t4000"
// let telefono = 3814534634;
// let dni = 35568351; 

// crear un objeto con notacion literal

let usuarioPablo = {
    // propiedades -> clave: valor
    email:"pablodominguez@gmail.com",
    password: "A123456",
    domicilio: "Las Piedras 567",
    localidad: "t4000",
    telefono: 3814534634,
    dni: 35568351,
    estado: true
}

 //mostrar objetos

 console.log(usuarioPablo);

 //mostrar cada propiedad del objeto - forma 1
 document.write("email: " + usuarioPablo.email);
 
 //mostrar cada propiedad del objeto - forma 2
 document.write("<br>Telefono: " + usuarioPablo["telefono"]);

 //cargar una propiedad nueva a un objeto

 usuarioPablo.nivel = 1;
 document.write("<br>Nivel: " + usuarioPablo.nivel);

 

