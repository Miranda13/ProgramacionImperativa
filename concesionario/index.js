const autos = require('../autos');

const concesionaria = {
    buscarAuto: function (patente)  {
        for (let i= 0; i < autos.length; i++) {
            if (autos[i].patente === patente) {
                return autos[i];
            }
        }
        return null
    },
    venderAuto: function (patente) {
       let auto = this.buscarAuto(patente);
       auto.vendido = !auto.vendido;
     },
    autos: autos,
    autosParaLaVenta: function() {
        let auto = [];
        for (let i=0; i < autos.length; i++) {
           if (!autos[i].vendido) 
              auto.push(autos[i])
        }
        return auto
    },
    autosNuevos: function() {
        let autosNuevos = [];
        let autosParaLaVenta = this.autosParaLaVenta();
        for (let i=0; i < autosParaLaVenta.length; i++) {
            if (autosParaLaVenta[i].km < 100)
                autosNuevos.push(autosParaLaVenta[i]);
        }
        return autosNuevos
    },
    listaDeVentas: function() {
        let listaVenta = [];
        for (let i=0; i < autos.length; i++) {
            if (autos[i].vendido)
                listaVenta.push(autos[i].precio);
        }
        return listaVenta
    },
    totalDeVentas: function() {
        let venta = 0;
        let listaVenta = this.listaDeVentas();
        for (let i=0; i < listaVenta.length; i++) {
            venta = venta + listaVenta[i];
        }
        return venta
    },
    puedeComprar: function(auto, cliente) {
        let costoCuota = auto.precio / auto.cuotas;
        if(cliente.capacidadDePagoTotal < auto.precio || cliente.capacidadDePagoEnCuotas < costoCuota) {
            return false
        }
        else {
            return true
        } 
            
    },
    autosQuePuedeComprar: function(cliente) {
        let autosQuePuede = [];
        let autosVenta = this.autosParaLaVenta();
        for(let i=0; i < autosVenta.length; i++) {
            if (this.puedeComprar(autosVenta[i], cliente))
                autosQuePuede.push(autosVenta[i]);
        }
        return autosQuePuede
    }
 };

 let cliente = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }

 console.log(concesionaria.autosQuePuedeComprar(cliente))
/* console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas()); */