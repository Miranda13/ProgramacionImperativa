let cuenta = {
    numeroCuenta: Number,
    saldo: Number,
    titular: String,
    deposito: function(deposito) {
        this.saldo = this.saldo + deposito;
        console.log('Se generó un deposito de: '+deposito+' nuevo saldo: '+this.saldo);
    },
    extraccion: function(monto) {
        if (monto > saldo) 
            console.log('Fondos Insuficientes');
        else {
            this.saldo = this.saldo - monto;
            console.log('Se extrajo: '+monto+ ' el nuevo saldo es: ' +this.saldo);
        }            
    }
}

function Cuenta(numeroCuenta, saldo, titular) {
    this.numeroCuenta = numeroCuenta;
    this.saldo = saldo;
    this.titular = titular;
    this.deposito = function(deposito) {
        this.saldo = this.saldo + deposito;
        console.log('Se generó un deposito de: '+deposito+' nuevo saldo: '+this.saldo);
    },
    this.extraccion = function(monto) {
        if (monto > saldo) 
            console.log('Fondos Insuficientes');
        else {
            this.saldo = this.saldo - monto;
            console.log('Se extrajo: '+monto+ ' el nuevo saldo es: ' +this.saldo);
        }            
    }
}

let primeraCuenta = new Cuenta(1111237, 2131723, 'Anamaria');
let segundaCuenta = new Cuenta(387434, 838453, 'Stella');
let terceraCuenta = new Cuenta(234123, 456897, 'Fernanda');

primeraCuenta.deposito(30);
segundaCuenta.deposito(50);
terceraCuenta.deposito(100);

primeraCuenta.extraccion(400);
segundaCuenta.extraccion(500);
terceraCuenta.extraccion(1000000);

/* Calculadora de notas */

let alumnos = {
    nombre: String,
    numeroLegajo: String,
    listaNotas: Array,
    promedio: Number,
    calcularPromedio: function() {
        this.promedio = (this.promedio.reduce((acumulador, nota) => acumulador += nota))/(this.promedio.length);
    },
    aprobacion: function(nota) {
        if (this.promedio > nota)
            return console.log('El estudiante aprobó');
        else
            return console.log('El estudiante desaprobó');
    },
    agregarNotas: function(nota) {
        this.listaNotas.push(nota);
    }
}

function Alumno(nombre, numeroLegajo, notas) {
    this.nombre = nombre;
    this.numeroLegajo = numeroLegajo;
    this.listaNotas = notas;
    this.promedio = Number;
    this.calcularPromedio = function() {
        this.promedio = (this.listaNotas.reduce((acumulador, nota) => acumulador += nota))/(this.listaNotas.length);
    };
    this.aprobacion = function(nota) {
        if (this.promedio > nota)
            console.log('El estudiante aprobó');
        else
            console.log('El estudiante desaprobó');
    }
}

let estudiante1 = new Alumno ('Ana', 17236, [5,5,4]);
estudiante1.calcularPromedio();
estudiante1.aprobacion(4);

let estudiante2 = new Alumno ('Ster', 23749, [2,3,4]);
estudiante2.calcularPromedio();
estudiante2.aprobacion(4);

