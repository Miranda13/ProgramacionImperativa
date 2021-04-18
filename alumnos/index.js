/* let alumnos = {
    nombre: String,
    cantidadFallas: Number,
    notas: Array,
    calcularPromedio: function () {
        return (this.notas.reduce((acumulador, nota) => acumulador =+ nota))/this.notas.length;
    },
    faltar: function () {
         this.cantidadFallas++; 
    }
}
 */
function Alumno(nombre, cantidadFallas, notas) {
    this.nombre = nombre;
    this.cantidadFallas = cantidadFallas;
    this.notas = notas;
    this.calcularPromedio = function () {       
       return  (this.notas.reduce((acumulador, nota) => acumulador += nota))/notas.length
    }
    this.faltar = function () {
        this.cantidadFallas++; 
    }
}

module.exports = Alumno;