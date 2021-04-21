const libro = require('../libro');

function Usuario(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.listaLibrosPrestados = [];
    this.sacarLibros = function (libro) {
        libro.updatePrestamo();
        this.listaLibrosPrestados.push(libro)
    };
    this.entregarLibros = function (libro) {
        libro.updatePrestamo();
        this.listaLibrosPrestados.splice(this.listaLibrosPrestados.findIndex(
            element => {
              element.id ===  libro.id;
            }
        ), 1);
    };
    this.devolverUltimo = function () {
        this.listaLibrosPrestados.pop();
    }
}

let libro1 = new libro(1,'Alicia en el pais', 'George Orwell', 162381623, true);
let libro2 = new libro(2,'Cien años de soledad', 'Gabriel G', 897543, true);
let libro3 = new libro(3,'El viejo y el mar', 'Ernest H', 7231389, true);

/* console.log(libro1);
console.log(libro2);
console.log(libro3); */

let usuario1 = new Usuario('Ana', 'Miranda');
let usuario2 = new Usuario('Miguel', 'Arias');
let usuario3 = new Usuario('Lari', 'Amaya');

/* console.log(usuario1);
console.log(usuario2);
console.log(usuario3); */

console.log(usuario3);
console.log(libro2);
usuario3.sacarLibros(libro2);
console.log(libro2);

usuario3.sacarLibros(libro1);
usuario3.sacarLibros(libro3);
console.log(usuario3);

usuario3.entregarLibros(libro2);
console.log(usuario3);