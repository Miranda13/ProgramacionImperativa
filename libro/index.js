function Libro(id, nombre, autor, ISBN, disponibilidad) {
    this.id = id,
    this.nombre = nombre;
    this.autor = autor;
    this.isbn = ISBN;
    this.disponibilidad = disponibilidad;
    this.updatePrestamo = function() {
        this.disponibilidad = !this.disponibilidad;
    }
}

module.exports = Libro;
