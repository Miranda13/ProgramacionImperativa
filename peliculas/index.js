// dado el json PELICULAS.JSON, necesitamos poder leer su contenido y manejarlo como un array de objetos para poder realizar el siguiente sistema de gestion de pelis
// pido el modulo file system
const fs = require('fs');
// utilizando el modulo leo el json clases 
let peliculasJSON = fs.readFileSync('./peliculas.json','utf-8');
// parseo el string con el json a un array de objetos
let peliculas = JSON.parse(peliculasJSON);

let sistemaDePeliculas = {
    listaPeliculas : peliculas, //agregar las peliculas que nos trajimos de nuestro archivo json. esta bien que aparezca como un array vacio o que deberia haber en su lugar?
    agregarPelicula: function(pelicula) {
        this.listaPeliculas.push(pelicula);
    }, //metodo para poder agregar peliculas a listaPeliculas
    buscarPeliPorTitulo: function(titulo) {
        let pelicula = this.listaPeliculas.find(
            (pelicula) => {
                return pelicula.titulo === titulo
            }
        );
        return pelicula
    },//metodo para buscar peliculas por su titulo, recibe el titulo por parametro
    buscarPeliPorDirector: function(director) {
        let pelicula = this.listaPeliculas.find(
            pelicula => {
                return pelicula.director === director
            }
        );
        return pelicula
    }, //metodo para buscar peliculas por su director, que lo recibe por parametro
    modificarOscar: function() {
        this.listaPeliculas.map(
            (pelicula) => {
                pelicula.ganoOscar = !pelicula.ganoOscar
            }
        );
    }, //modifica la propiedad ganoOscar, es decir, si lo habia ganado se lo saca y si no se lo entrega!
    filtrarPeliculasPorGenero: function(genero) {
        let pelisXGenero = this.listaPeliculas.filter(
            pelicula => {
                return pelicula.genero === genero
            }
        );
        return pelisXGenero
    }, //metodo para obtener una lista de pelis que sean del genero que le pasemos por parametro
    filtrarPeliculaPorCalificacion: function(calificacion) {
        let pelisXCalificacion = this.listaPeliculas.filter(
            pelicula => {
                return pelicula.calificacionIMDB >= calificacion
            }
        );
        return pelisXCalificacion
    }, //metodo que filtra las peliculas que tengan una calificacion mayor a la que le indiquemos por parametro
    ordenarPelisPorDuracion: function() {
        let pelisXDuracion = this.listaPeliculas.sort(function (a, b) {
            if (a.duracionEnMinutos > b.duracionEnMinutos) {
                return 1;
            }
            if (a.duracionEnMinutos < b.duracionEnMinutos) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        return pelisXDuracion
    }, //metodo que ordene la lista de peliculas por su duracion de menor a mayor
    ordenarPelisPorCalificacion: function() {
        let pelisXCalificacion = this.listaPeliculas.sort(function (a, b) {
            if (a.calificacionIMDB > b.calificacionIMDB) {
                return -1;
            }
            if (a.calificacionIMDB < b.calificacionIMDB) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
        return pelisXCalificacion
    }, //metodo para ordernar las peliculas por su calificacion de MAYOR A MENOR!!!
    sumarCalificacion: function(valor) {
        this.listaPeliculas.map(pelicula => pelicula.calificacionIMDB = pelicula.calificacionIMDB + valor)
    }, //metodo para poder sumarle una x cantidad de puntaje al que ya contienen las peliculas, retorna un array solo con la nueva calificacion.
    ///// DE ACA PARA ABAJO SE COMPLICAN ///
    agregarGenero: function(nombre, nuevoGenero) {
        let pelicula = this.buscarPeliPorTitulo(nombre);
        let generoActual = pelicula.genero;
        pelicula.genero = [];
        pelicula.genero.push(generoActual, nuevoGenero);
        return pelicula
    },
    modificarGenero: function(nombre, nuevoGenero) {
        let pelicula = this.buscarPeliPorTitulo(nombre);
        pelicula.genero = nuevoGenero;
        return pelicula
    },
    eliminarGenero: function(nombre) {
        let pelicula = this.buscarPeliPorTitulo(nombre);
        delete pelicula.genero;
        return pelicula
    }, // metodo que encuentra una sola pelicula y le modifica el genero existente (puede agregarle uno, eliminarlo y dejarlo pendiente o simplemente reemplazarlo por otro)
    peliculasQuePuedoVer: function(minutos) {
        return this.listaPeliculas.filter(pelicula => pelicula.duracionEnMinutos <= minutos)
    }, //metodo que al ingresarle una cantidad de minutos, me devuelva una lista de peliculas cuya duracion sea menor a la ingresada
    tengoTiempoDeVerla: function(nombre, minutos) {
        let pelicula = this.buscarPeliPorTitulo(nombre);
        if (pelicula.duracionEnMinutos <= minutos)
            return true
        else
            return false
    }, // metodo que al ingresarle una cantidad de minutos y el nombre de una pelicula, la busque y le encuentre, y me diga si los minutos que yo tengo, alcanzan para que termine de ver la pelicula.
    eliminarPorCalificacion: function (calificacion) {
        let peliculasXCalificacion = this.ordenarPelisPorCalificacion();
        let peliculas = peliculasXCalificacion.splice(peliculasXCalificacion.findIndex(
            element => element.calificacionIMDB <= calificacion
        ))
        return peliculas
    }, // metodo que al ingresarle una calificacion ELIMINE todas las peliculas cuya calificacion sea menor a la ingresada por parametro y decuelva las peliculas eliminadas.
    modificarGeneroLean: function(nombrePeli, nuevoGenero) {
        let peliEncontrada = this.buscarPeliPorTitulo(nombrePeli);
        peliEncontrada.genero = peliEncontrada.genero.split();
        peliEncontrada.genero.push(nuevoGenero);
        return peliEncontrada  
    },
    eliminarGeneroLean: function(nombrePeli, generoaEliminar) {
        let peliEncontrada = this.buscarPeliPorTitulo(nombrePeli)
        let indice = peliEncontrada.genero.indexOf(generoaEliminar); 
        peliEncontrada.genero.splice(indice, 1)
        return peliEncontrada
    },
}

sistemaDePeliculas.agregarPelicula(
    { titulo: 'Más allá',
    director: 'Nei Nelson',
    genero: 'Euforia',
    anio: 2011,
    duracionEnMinutos: 102,
    ganoOscar: false,
    calificacionIMDB: 5 });

console.log(sistemaDePeliculas.listaPeliculas);
console.log(sistemaDePeliculas.buscarPeliPorTitulo('Axed'));
console.log(sistemaDePeliculas.buscarPeliPorDirector('Mike Leigh'));
sistemaDePeliculas.modificarOscar();
console.log(sistemaDePeliculas.filtrarPeliculasPorGenero('Comedia'));
console.log(sistemaDePeliculas.filtrarPeliculaPorCalificacion(7));
console.log(sistemaDePeliculas.ordenarPelisPorDuracion());
console.log(sistemaDePeliculas.ordenarPelisPorCalificacion());
console.log(sistemaDePeliculas.sumarCalificacion(0.3));
console.log(sistemaDePeliculas.agregarGenero('Más allá', 'Thriller'));
console.log(sistemaDePeliculas.buscarPeliPorTitulo('Más allá'));
console.log(sistemaDePeliculas.modificarGenero('Más allá', 'Thriller'));
console.log(sistemaDePeliculas.buscarPeliPorTitulo('Más allá'));
console.log(sistemaDePeliculas.eliminarGenero('Más allá'));
console.log(sistemaDePeliculas.peliculasQuePuedoVer(200));
console.log(sistemaDePeliculas.tengoTiempoDeVerla('Más allá',80));
console.log(sistemaDePeliculas.eliminarGeneroLean('Career Girls', 'Drama'));
console.log(sistemaDePeliculas.eliminarPorCalificacion(7));
