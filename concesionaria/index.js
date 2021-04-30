let autos = require("../autos")

// let concesionaria = {
//    autos: autos,
 
//    buscarAuto: function (patente){
//       for (let i = 0; i < this.autos.length; i++){
//          if (patente === this.autos[i].patente){
//            return this.autos[i]
//          } 
//          else{
//            return null
//          }
//       }
//    }
// }

// console.log(concesionaria.buscarAuto("APL123"));
// console.log(concesionaria.buscarAuto("APR123"));


let concesionaria = {
   autos: autos,
 
   buscarAuto: function (patente){
    for (let i = 0; i < autos.length; i++) {
        if (patente === autos[i].patente){
            return autos[i]
        } 
    }
        return null
   },
//    funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.
//    venderAuto: function (patente){
//     for (let i = 0; i < this.autos.length; i++) {
//         this.buscarAuto(patente) === true
//             this.autos[i].vendido = true
//         }
//     },

    venderAuto: function (patente){
        let vender = this.buscarAuto(patente);
        vender.vendido = true
        return 'vendido'
    },
    // usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.
    autosParaLaVenta: function(){
        let disponibles = [];
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].vendido === false) {
                disponibles.push(this.autos[i])
            }
        }
        return disponibles
    },
    // Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos. ¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?
    autosNuevos: function(){
        let nuevos = [];
        let autosParaVender = this.autosParaLaVenta();
        for (let i = 0; i < autosParaVender.length; i++) {
            if (autosParaVender[i].km < 100){
                nuevos.push(autosParaVender[i])
            }
        }
        return nuevos
    }
}


    // autosNuevos: function(){
    //     let nuevos = [];
    //     for (let i = 0; i < this.autosParaLaVenta().length; i++) {
    //         if (this.autosParaLaVenta()[i].km < 100) {
    //             nuevos.push(this.autosParaLaVenta()[i])
    //         }            
    //     }
    //     return nuevos
    // },
//     autoNuevo: function(){
//         let disponibles = [];
//         let autosParaLaVenta = this.autosParaLaVenta()
//         for (let i = 0; i < this.autos.length; i++){
//             autosParaLaVenta[i].km <= 100 ? disponibles.push(autosParaLaVenta[i]) : null
//         }
//         return disponibles
//     },
// };


// console.log(concesionaria.buscarAuto("APL123"));
// console.log(concesionaria.buscarAuto("APR123"));
concesionaria.venderAuto("APL123");
// 
// console.log(concesionaria.autosParaLaVenta());
// concesionaria.venderAuto('JJK116');
// console.log(concesionaria.autosParaLaVenta())
console.log(concesionaria.autosNuevos());
// console.log(autos);









// Exámen con los metodos de array
// let concesionaria = {
//     autos: autos,
//     buscarAuto: function (patente){
//        let autoEncontrado = this.autos.find(auto => auto.patente === patente)
//         return autoEncontrado
//     },
//     venderAuto: function (patente){
//      for (let i = 0; i < this.autos.length; i++) {
//          this.buscarAuto(patente) === true
//              return this.autos[i].vendido = true
//          }
//      },
//     autosParaLaVenta:function() {
//         let arrFiltrado = this.autos.filter(auto => !auto.vendido)
//         return arrFiltrado
//     },
//     listaDeVentas:function(){

//     }
// }