// nombre, apellido, dni, fechaNacimiento, email, telefono
// una clase es una plantilla
class Persona {
    // metodo constructor es el primero que se ejecuta cuando creo objeto 
    constructor(paramNombre, paramApellido, paramDNI, paramFechaNacimiento, paramEmail, paramTel) {
        //crear propiedades del objeto
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.dni = paramDNI;
        this.fechaNacimiento = paramFechaNacimiento;
        this.email = paramEmail;
        this.telefono = paramTel;
    }

    // se agrega metodos dentro de la clase

    mostrarDatos() {
        // con vartix
        document.write(`<h5>Persona: ${this.nombre}</h5>
        Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>DNI: ${this.dni}
        <br>Fecha de Nac: ${this.fechaNacimiento}
        <br>Email: ${this.email} 
        <br>Telefono: ${this.telefono}`)
    }

    // agregar propiedades conmutadas get y set
    //get mostrar una propiedad del objto

    get mostrarNombre() {
        return this.nombre;
    }

    get mostrarApellido() {
        return this.apellido;
    }

    //set modificar una propiedad del objeto

    set modificarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    set modificarApellido(nuevoApellido) {
        this.apellido = nuevoApellido;
    }

}

// regular o no, curso, comision, legajo, notas, cuotas al dia

class Alumno extends Persona {
    constructor(paramNombre, paramApellido, paramDNI, paramFechaNacimiento, paramEmail, paramTel, paramCurso, paramComision, paramCuotasAlDia){
    // ejecutar constructor de la clase persona
    super(paramNombre, paramApellido, paramDNI, paramFechaNacimiento, paramEmail, paramTel);
    this.curso = paramCurso;
    this.comision = paramComision;
    this.cuotasAlDia = paramCuotasAlDia;

    }

    get mostrarComision(){
        return this.comision;
    }

    mostrarDatos(){
        document.write(`<h5>Alumno: ${this.nombre}</h5>
        Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>DNI: ${this.dni}
        <br>Fecha de Nac: ${this.fechaNacimiento}
        <br>Email: ${this.email} 
        <br>Curso: ${this.curso}
        <br>Comision: ${this.comision}`);
    }
}





// creamos o instanciamos objeto usando la clase

let victor = new Persona("Victor", "Ignacio", 39754896, "21/04/91", "victorignacio@gmail.com", 3815478987)

//usar metodos del objeto

victor.mostrarDatos();

let rodrigo = new Alumno("Rodrigo", "Bazan", 38998988, "12/8/95", "rb@gmail.com", 548454545, "full stack", "19i", true);

rodrigo.mostrarDatos();


// let nombre = prompt("Ingrese nombre");
// let apellido = prompt("Ingrese apellido");
// let dni = prompt("Ingrese dni");
// let fechaNacimiento = prompt("Ingrese nacimiento");
// let email = prompt("Ingrese mail");
// let telefono = prompt("Ingrese telefono");

// let naty = new Persona(nombre, apellido, dni, fechaNacimiento, email, telefono);

// naty.mostrarDatos();
//modificar propiedad de un objeto

// naty.modificarNombre = "Rocio";

// naty.mostrarDatos();


//console.log(naty.mostrarNombre);

