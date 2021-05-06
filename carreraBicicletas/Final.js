const fs = require('fs');
// utilizando el modulo leo el json clases 
let bicicletasJSON = fs.readFileSync('./BICICLETAS.json', 'utf-8');
// parseo el string con el json a un array de objetos
let bicicletas = JSON.parse(bicicletasJSON);
// bicicletas en lista de objetos

let carrera = {
    bicicletas: bicicletas,
    bicisPorTanda: 6,
    bicicletasHabilitadas: function () {
        return this.bicicletas.filter(bici => !bici.doppingPositivo)
    },
    listarBicicletas: function (arrayBicis) {
        arrayBicis.forEach((bici) => {
            if (bici.doppingPositivo)
                console.log('Id: ' + bici.id + ', peso en Kg: ' + bici.pesoEnKg + ", rodado: " + bici.rodado + ", estado: deshabilitado");
            else
                console.log('Id: ' + bici.id + ', peso en Kg: ' + bici.pesoEnKg + ", rodado: " + bici.rodado + ", estado: habilitado");
        })
    },
    buscarPorCiclista: function (nombre) {
        return this.bicicletas.find(bici => bici.ciclista === nombre)
    },
    buscarPorLargo: function (largo) {
        let bicisHabilitadas = this.bicicletasHabilitadas();
        return bicisHabilitadas.filter(bici => bici.largoEnCm <= largo)
    },
    ordenarPorPeso: function () {
        let ordenado = bicicletas.sort(function (a, b) {
            if (a.pesoEnKg > b.pesoEnKg) {
                return 1;
            }
            if (a.pesoEnKg < b.pesoEnKg) {
                return -1;
            }
            return 0;
        });
        return ordenado
    },
    generarTanda: function (rodado, peso) {
        let bicisHabilitadas = this.bicicletasHabilitadas();
        let bicisCaracteristicas = bicisHabilitadas.filter(
            bici => bici.rodado <= rodado && bici.pesoEnKg <= peso
        );
        if (bicisCaracteristicas.length > this.bicisPorTanda) {
            bicisCaracteristicas.splice(this.bicisPorTanda);
        }
        return bicisCaracteristicas
    },
    calcularPodio: function (tanda) {
        let ordenado = tanda.sort(function (a, b) {
            if (a.puntaje > b.puntaje) {
                return -1;
            }
            if (a.puntaje < b.puntaje) {
                return 1;
            }
            return 0;
        });

        if (ordenado.length > 3) {
            ordenado.splice(3)
        }

        ordenado.forEach((elemento, indice)=> {
            if (indice === 0) {
                console.log("El ganador es: " + elemento.ciclista + ", con un puntaje de: " + elemento.puntaje)     
            }
            if (indice === 1) {
                console.log("el segundo puesto es para: " + elemento.ciclista + ", con un puntaje de: " + elemento.puntaje)     
            }
            if (indice === 2) {
                console.log("el tercer puesto es para: " + elemento.ciclista + ", con un puntaje de: " + elemento.puntaje)     
            }
        }); 
    }
}

/*
console.log(carrera.bicicletasHabilitadas());
console.log(carrera.listarBicicletas(bicicletas));
console.log(carrera.buscarPorCiclista("Maure Benko"));
console.log(carrera.buscarPorLargo(110));
console.log(carrera.ordenarPorPeso());
console.log(carrera.generarTanda(70,10)); 
console.log(carrera.calcularPodio([bicicletas[0], bicicletas[7], bicicletas[2], bicicletas[3], bicicletas[1],bicicletas[5] ]));
console.log(carrera.calcularPodio([bicicletas[0] ]));*/
