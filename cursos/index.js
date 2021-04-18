/* let cursos = {
    nombreCurso: String,
    notaAprobacion: Number,
    faltasMaximas: Number,
    listaEstudiantes: Array,
    agregarEstudiante: function (estudiante) {
        this.listaEstudiantes.push(estudiante);
    },
    aprobar: function (estudiante) {
        if (estudiante.calcularPromedio() > this.notaAprobacion && estudiante.cantidadFallas < this.faltasMaximas)
            return true
        else if (estudiante.cantidadFallas === this.faltasMaximas && estudiante.calcularPromedio() > estudiante.notaAprobacion*1.1)
            return true
        else
            return false
    },
    aprobarCurso: function () {
        let cursada = [];
        for (let i=0; i >this.listaEstudiantes.length; i++) {
            cursada.push(this.aprobar(this.listaEstudiantes[i]));
        }
        return cursada
    }
} 
 */
function Curso(nombreCurso, notaAprobacion, faltasMaximas, listaEstudiantes) {
    this.nombreCurso = nombreCurso;
    this.notaAprobacion = notaAprobacion;
    this.faltasMaximas = faltasMaximas;
    this.listaEstudiantes = listaEstudiantes;
    this.agregarEstudiante = function (estudiante) {
        this.listaEstudiantes.push(estudiante);
    };
    this.aprobar= function (estudiante) {
        if (estudiante.calcularPromedio() > this.notaAprobacion && estudiante.cantidadFallas < this.faltasMaximas)
            return true
        else if (estudiante.cantidadFallas === this.faltasMaximas && estudiante.calcularPromedio() > this.notaAprobacion*1.1)
            return true
        else
            return false
    };
    this.aprobarCurso = function () {
        let cursada = [];
        for (let i=0; i < this.listaEstudiantes.length; i++) {
            cursada.push(this.aprobar(this.listaEstudiantes[i]));
        }
        return cursada
    }
}

const alumno = require('../alumnos');

let alumno1 = new alumno('Ana',1, [5, 5, 5]);
let alumno2 = new alumno('Fernanda',1, [4, 3.5, 3]);
let alumno3 = new alumno('Lilia',0, [4, 4.5, 4.2]);

let curso1 = new Curso('informatica', 3.5, 3, [alumno1, alumno2, alumno3]);

let alumno4 = new alumno('Hernan',0, [3, 3.8, 4]);

curso1.agregarEstudiante(alumno4);
alumno1.calcularPromedio();

console.log(curso1.aprobar(alumno1));
console.log(curso1.aprobarCurso());
/* module.exports = Curso; */