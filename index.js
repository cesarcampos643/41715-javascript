let listaAlumnos = " "; //la voy a usar cuando pida los nombres de las personas

let cantidadTotalDeClases = 0; //sumatoria de clases (cantidad de gente en el salón)
let cantidad0 = 0; //cantidad parcial de la reserva por nivel
let cantidad1 = 0;
let cantidad2 = 0;
let cantidad3 = 0;

let cantidadTotal0 = 0; //cantidad total de la reserva por nivel
let cantidadTotal1 = 0;
let cantidadTotal2 = 0;
let cantidadTotal3 = 0;

//confirmaciones
let confirmarNivel;
let confirmarNombres = false;
let confirmarReserva = false;

//precios
let precioClase = 0; //precio por nivel
let precioFinalSinIva = 0; //sumatoria de precios de clases reservadas
let precioFinal = 0; //precio final que se va a cobrar
let nivelClase = ""; //elección del nivel que tendrán las clases a reservar

// función para calcular el IVA
function iva (sinIva) {
    return sinIva * 1.21;
} 

//FUNCIONES

//función para mostrar confirmación de clases
function mensajeConfirmacion (cantidad, nivel) {

    if (nivel == "0") {
        confirm("Usted desea reservar " + cantidad + " Clases Iniciales. ¿Es correcto? Recuerde que no debe haber reservas de menos de 15 años");
        console.log(cantidad, nivel);
    }
    else {
        confirm("Usted desea reservar " + cantidad + " Clases de Nivel " + nivel + " . ¿Es correcto? Recuerde que no debe haber reservas de menos de 15 años");
        console.log(cantidad, nivel);
    }
}

//CODIGO PRINCIPAL

alert("Este simulador le permitirá reservar una clase de tiro con arco en Total Archery. Deberá ingresar nivel o experiencia de tiro, cantidad de asistentes y fecha para saber el valor final. Le recordamos que las clases son a partir de 15 años de edad");

//Pedido de Nivel

do {
    nivelClase = prompt("¿Qué nivel de clases desea reservar? Usted puede ingresar la cantidad de asistentes según cada nivel. Si nunca tiró previamente, ingrese nivel cero", "Ej: 1");

        switch (nivelClase) {
            case "0":
                precioClase = 700;
                cantidad0 = parseInt(prompt("Cuántas personas van a asistir?"));
                confirmarNivel = mensajeConfirmacion(cantidad0, nivelClase);
                cantidadTotalDeClases += cantidad0;
                cantidadTotal0 += cantidad0
                precioFinalSinIva += precioClase*cantidad0;
                console.log(nivelClase, cantidad0, cantidadTotalDeClases, precioFinalSinIva);

                break;
            case "1":
                console.log(nivelClase);
                precioClase = 800;
                cantidad1 = parseInt(prompt("Cuántas personas van a asistir?"));
                console.log(cantidad0);
                confirmarNivel = mensajeConfirmacion(cantidad1, nivelClase);
                cantidadTotalDeClases += cantidad1;
                cantidadTotal1 += cantidad1
                precioFinalSinIva += precioClase*cantidad1;
                console.log(nivelClase, cantidad0, cantidadTotalDeClases, precioFinalSinIva);
                break;
            case "2":
                console.log(nivelClase);
                precioClase = 900;
                cantidad2 = parseInt(prompt("Cuántas personas van a asistir?"));
                confirmarNivel = mensajeConfirmacion(cantidad2, nivelClase);
                cantidadTotalDeClases += cantidad2;
                cantidadTotal2 += cantidad2
                precioFinalSinIva += precioClase*cantidad2;
                console.log(nivelClase, cantidad0, cantidadTotalDeClases, precioFinalSinIva);
                break;
            case "3":
                console.log(nivelClase);
                precioClase = 1000;
                cantidad3 = parseInt(prompt("Cuántas personas van a asistir?"));
                confirmarNivel = mensajeConfirmacion(cantidad3, nivelClase);
                cantidadTotalDeClases += cantidad3;
                cantidadTotal3 += cantidad3
                precioFinalSinIva += precioClase*cantidad3;
                console.log(nivelClase, cantidad0, cantidadTotalDeClases, precioFinalSinIva);
                break;
            default:
                alert("Ha ingresado un dato incorrecto. Debe ingresar el número correspondiente al nivel: 0, 1, 2 o 3");
                precio = 0;
                break;
        }
        precioFinal = iva(precioFinalSinIva);
    confirmarReserva = confirm("¿Desea agregar alguna clase más?");
} while (confirmarReserva);

alert("La cantidad total de clases es: " + cantidadTotalDeClases + "\n" + cantidadTotal0 + " Clases Iniciales" + "\n" + cantidadTotal1 + " Clases de Nivel 1" + "\n" + cantidadTotal2 + " Clases de Nivel 2" + "\n" + cantidadTotal3 + " Clases de Nivel 3" + "\n" + "El precio final, IVA incluido, es " + precioFinal);
