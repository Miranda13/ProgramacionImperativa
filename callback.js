let agregar = (palabra) => {
    return 'http://www.'+palabra+'.com'
}

let servicio = (palabras, accion) => {
    let convertidas = [];
    for (let i= 0; i < palabras.length; i++) {
        convertidas.push(accion(palabras[i]));
    }
    return convertidas
}

console.log(servicio(['facebook','google'], agregar));

/* Cuenta regresiva */

var seconds = 20;

function startCountDown(callback) {
 setInterval(function () {
   seconds--;
   callback();
 }, 1000);
}
startCountDown(() => console.log(seconds))