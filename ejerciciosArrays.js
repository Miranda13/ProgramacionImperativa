let numeros = [34, 23, 12, 9, 8, 1, 12, 17];

function dividir(array) {
    let suma = array.reduce((acum, num) => {
        return acum += num;
    });
    let numeros = array.map((numero) => {
        return numero / suma;
    });

    return numeros
}

console.log(dividir(numeros));

let palabras = ['Valor', 'Terror', 'Customer', 'Arco Luminoso', 'Ola'];

function cantidad(array, num) {
    let palabras = array.filter(element => {
        return element.length > num;
    })
    return palabras
}

console.log(cantidad(palabras, 6));

let alumnos = [{ nombre: 'Joaquin', nota: 2 }, { nombre: 'Ana', nota: 4 }, { nombre: 'Miguel', nota: 5 }];

function ordenarNombre(array) {
    let ordenados = array.sort(function (a, b) {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    return ordenados
}

function ordenarNota(array) {
    let ordenados = array.sort(function (a, b) {
        if (a.nota > b.nota) {
            return 1;
        }
        if (a.nota < b.nota) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    return ordenados
}

console.log(ordenarNota(alumnos));

console.log(ordenarNombre(alumnos));

let productos = {
    nombre: String,
    precio: Number,
    cantidadVendida: Number,
}

function Productos(nombre, precio, cantidadVendida) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidadVendida = cantidadVendida;
}

let producto1 = new Productos('Col', 600, 2);
let producto2 = new Productos('Limon', 100, 10);
let producto3 = new Productos('Fresas', 200, 4);
let producto4 = new Productos('Peras', 300, 5);

let listaProductos = [producto1, producto2, producto3, producto4];

function Verdureria(listaProductos) {
    this.listaProductos = listaProductos;
    this.calcularGananciaReduce = function () {
        let ganancia = this.listaProductos.map((producto)=>{
            return producto.cantidadVendida * producto.precio
        }).reduce((acum, producto) => {
           return acum += producto;          
        });
        return ganancia
    };
    this.calcularGananciaEach = function () {
        let ganancia = 0;
        this.listaProductos.forEach((elemento) => {
            ganancia = ganancia + (elemento.cantidadVendida * elemento.precio);
        })
        return ganancia
    };
    this.buscarProducto = function (nombre) {
        let producto = this.listaProductos.find(
            (elemento) => {
                return elemento.nombre === nombre
            }
        );
        return producto
    };
    this.venderMasQue = function (valor) {
        let productos = this.listaProductos.filter(
            elemento => {
                return valor < (elemento.cantidadVendida * elemento.precio)
            }
        );
        return productos
    };
    this.cambiarPrecio = function (nombre, valor) {
        let producto = this.buscarProducto(nombre);
        producto.precio = valor;
    };
    this.calcularGananciaTotal = function () {
        return this.calcularGananciaReduce() * 0.55
    }
}

let verdureria1 = new Verdureria(listaProductos);

console.log(verdureria1.calcularGananciaEach());

console.log(verdureria1.buscarProducto('Limon'));

console.log(verdureria1.venderMasQue(1300));
console.log(verdureria1.buscarProducto('Limon'));
verdureria1.cambiarPrecio('Limon', 400);
console.log(verdureria1.buscarProducto('Limon'));
console.log(verdureria1.calcularGananciaReduce());
console.log(verdureria1.calcularGananciaTotal());