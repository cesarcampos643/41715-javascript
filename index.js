// Programita para calcular la distancia que cae un objeto (no arrojado)
let Tiempo = prompt("Ingrese el tiempo que tarda en caer al piso, en segundos");
let VelocidadInicial = prompt("Ingrese la velocidad inicial si fue arrojado, en m/s (si se deja caer, ingresar el valor CERO)")
let DistanciaInicial = prompt("Ingrese la altura inicial, en metros (si quiere saber cuánta distancia cae, colocar el valor CERO)")
let Resultado = DistanciaInicial + VelocidadInicial*Tiempo + 9.8*(Tiempo*Tiempo);

console.log(Resultado);
alert(Resultado);