// estoy en una competencia de clavados,
// en dos arrays se muestran los 5 clavados que hacen los competidores 
//en una competencia gana el que tiene el mejor promedio de clavado
// en otra gana el competidor con el mejor clavado

let clavadosParticipanteA = [5,8,4,9,5]
let clavadosParticipanteB = [8,7,8,6,8]

let puntajePorMayor = (resultados) => {
    let mayor = 0;
    for (let i = 0; i < resultados.length; i++) {
        if (mayor < resultados[i]) {
            mayor = resultados[i];
        }
    }
    return mayor
}

let puntajePorPromedio = (resultados) => {
    let acumulado = resultados.reduce((acumulador, numero) => acumulador += numero);
    return acumulado/resultados.length
}

function competencia(resultadosA,resultadosB,calcularPuntaje){ 
    let puntajeA = calcularPuntaje(resultadosA);
    let puntajeB = calcularPuntaje(resultadosB);

    console.log(puntajeA);
    console.log(puntajeB);

    if (puntajeA > puntajeB)
        console.log('Ganó el competidor A')
    else
        console.log('Ganó el competidor B')
}

competencia(clavadosParticipanteA, clavadosParticipanteB, puntajePorMayor)
competencia(clavadosParticipanteA, clavadosParticipanteB, puntajePorPromedio)
 
/* Crear una función “FizzBuzz” que recibe dos parámetros numéricos. */

function contar (primer, segundo, palabra1, palabra2) {
    if (primer < 1 || segundo < 1 || primer > 100 || segundo > 100) 
        console.log('numero no válido')
    else {
        for (let i=1; i <= 100; i++) {
            if (i%primer === 0) 
                if (i%segundo === 0)
                    console.log(palabra1+palabra2);
                else
                    console.log(palabra1);
            else if (i%segundo === 0) 
                console.log(palabra2);
            else
                console.log(i);
        }
    }
}

contar(0, 0, 'Fizz', 'Buzz');

const a = [23, 45, 32];
const b = [12, 67, 75];

const encontrarGanador = function (a, b, imprimir) {
    let primerParticipante = 0;
    let segundoParticipante = 0;
    for (let i = 0; i < 3; i++) {
      if (a[i] > b[i]) {
        primerParticipante++;
      } else if (a[i] < b[i]) {
        segundoParticipante++;
      }
    }
    imprimir(primerParticipante, segundoParticipante);
   }

function enFormatoTexto(a, b) {
    /*  let ganador
     if (a > b) {
       ganador = "primer"
     } else {
       ganador = "segundo"
     } */
    let ganador = a > b ? "primer" : "segundo"
    console.log("el ganador es " + ganador + " jugador");
}

const enFormatoTabla = (jugador1, jugador2) => console.table({ jugador1, jugador2 })

encontrarGanador(a, b, enFormatoTexto)
encontrarGanador(a, b, enFormatoTabla)

/* let tabla = (ganador) => {
    console.log('Soy una tabla ganó el ' +ganador+ ' participante');
}

let texto = (ganador) => {
    console.log("El ganador es el: " + ganador + " participante");
}

const encontrarGanador = function (a, b, imprimir) {
 let primerParticipante = 0;
 let segundoParticipante = 0;
 for (let i = 0; i < 3; i++) {
   if (a[i] > b[i]) {
     primerParticipante++;
   } else if (a[i] < b[i]) {
     segundoParticipante++;
   }
 }
 if (primerParticipante > segundoParticipante) {
   return imprimir("primer");
 } else {
   return imprimir("segundo");
 }
}

encontrarGanador(a,b,tabla);
 */// primera etapa
