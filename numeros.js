let x = 3;
let m = 5;
let y = 9;

let a = 6;
let b = 4;
let c = 1;

function alfa () {
    y = y - m;
}

function beta () {
    x = x + y;
}

function gama () {
    y = y*a;
}

function delta () {
    b = b/c;
}

function epsilon () {
    a = x + b;
}

/* alfa();
delta();
gama();
beta();
epsilon(); */
/* gama();
delta();
alfa();
beta();
epsilon();
console.log(a); */

if (y%x === 0) {
    if (y >= m) {
        x = x*x;
    }
} else {
    if (m >= x) {
        if (y >= m) {
            y = y*y;
        } else {
            m = m*m;
        }
    }
}

if (y%x === 0) {
    x= x+3;
} else {
    y=y*2;
}

/* console.log(x,y,m); */

let prologo = 1;
let secuela = 3;
let epilogo = 5;
epilogo = secuela;
secuela = prologo * epilogo;
prologo = epilogo;
epilogo = secuela;
prologo = secuela + epilogo;
epilogo = prologo / secuela;
secuela = prologo;

console.log(secuela)