const fs = require('fs');
// utilizando el modulo leo el json clases 
let departamentosJSON = fs.readFileSync('./departamentos.json','utf-8');
// parseo el string con el json a un array de objetos
let departamentos = JSON.parse(departamentosJSON);


let inmobiliaria = {
    departamentos: departamentos,
    departamentosDisponibles: function() {
        return this.departamentos.filter(elemento => elemento.disponible)
    },
    listarDepartamentos: function(array) {
        array.forEach(elemento => {
            if (elemento.disponible)
                console.log("id: "+ elemento.id + ", precio $" + elemento.precioAlquiler + ", está disponible");
            else
                console.log("id: "+ elemento.id + ", precio $" + elemento.precioAlquiler + ", está alquilado");
        });
    },
    buscarPorId: function(id) {
        return this.departamentos.find(elemento => elemento.id === id)
    },
    buscarPorPrecio: function (precioMaximo) {
        let departamentos = this.departamentosDisponibles();
        return departamentos.filter(elemento => precioMaximo >= elemento.precioAlquiler)
    },
    ordenarPrecio: function (precioMaximo) {
        let departamentosXPrecio = this.buscarPorPrecio(precioMaximo); 
        let ordenado = departamentosXPrecio.sort(function (a, b) {
            if (a.precioAlquiler > b.precioAlquiler) {
                return 1;
            }
            if (a.precioAlquiler < b.precioAlquiler) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        return ordenado
    },
    precioConImpuesto: function (impuesto) {
        let departamentosConImpuesto = this.departamentos.map(
            elemento => elemento.precioAlquiler + elemento.precioAlquiler*impuesto / 100
        );
        return departamentosConImpuesto
    },
    alquilarDepartamento: function (id) {
        let deparmento = this.buscarPorId(id);
        deparmento.disponible = false;
        return deparmento
    },
    calcularIngreso: function() {
        let departamentosAlquilados = this.departamentos.filter(elemento => !elemento.disponible)
        return departamentosAlquilados.reduce( (acum, producto) => acum + producto.precioAlquiler, 0)
    },
    comentar: function(id, comentario) {
        let departamento = this.buscarPorId(id);
        departamento.comentarios.push(comentario);
        console.log('Comentario realizado con éxito');
    },
    preferenciasCliente: function(cantidadHabitacion, mascotas, cantidadPersonas, precioAlquiler) {
        let departamentosDisponibles = this.departamentosDisponibles();;
        let deparmentoCriterio = departamentosDisponibles.filter(elemento => 
            elemento.cantidadPersonas >= cantidadPersonas 
            && elemento.precioAlquiler <= precioAlquiler
            && elemento.cantidadHabitacion >= cantidadHabitacion
            && elemento.aceptaMascotas === mascotas)
        return deparmentoCriterio
    }
}

console.log(inmobiliaria.listarDepartamentos(departamentos));
console.log(inmobiliaria.buscarPorId(1));
console.log(inmobiliaria.buscarPorPrecio(2000));
console.log(inmobiliaria.ordenarPrecio(2000)); 
console.log(inmobiliaria.precioConImpuesto(10));
console.log(inmobiliaria.alquilarDepartamento(17));
console.log(inmobiliaria.calcularIngreso());
comentario = {
    comentario: 'Muy lindo',
    puntuacion: 5
}
inmobiliaria.comentar(17, comentario);

console.log(departamentos);

console.log(inmobiliaria.preferenciasCliente(1,true,1, 2500))





