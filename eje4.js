function calcularIMC( peso, altura) {
    return peso / (altura ^ 2);
};

function imprimir ( mensaje, valor) {
    return console.log( mensaje + valor );
}

let nombre;
let apellido;
let edad;
let peso;
let altura;
let prepagada;
let imc;

nombre = 'Jose';
apellido = 'Fermoso';
edad = 33;
peso = 63.7;
altura = 153 / 100;

imc = calcularIMC(peso,altura);
imprimir(nombre + ' '+ apellido, +' '+ edad +' años');
imprimir('su imc es: ', imc);

nombre = 'Juana';
apellido = 'Fernandez';
edad = 26;
peso = 55.0;
altura = 162 / 100;

imc = calcularIMC(peso,altura);
imprimir(nombre + ' '+ apellido, +' '+ edad +' años');
imprimir('su imc es: ', imc);

nombre = 'Esteban';
apellido = 'Piazza';
edad = 28;
peso = 80.1;
altura = 176 / 100;

imc = calcularIMC(peso,altura);
imprimir(nombre + ' '+ apellido, +' '+ edad +' años');
imprimir('su imc es: ', imc);

nombre = 'Nicolas';
apellido = 'Lopez';
edad = 27;
peso = 83.5;
altura = 170 / 100;

imc = calcularIMC(peso,altura);
imprimir(nombre + ' '+ apellido, +' '+ edad +' años');
imprimir('su imc es: ', imc);