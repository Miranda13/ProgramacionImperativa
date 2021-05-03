// pido el modulo file system
const fs = require('fs');
// utilizando el modulo leo el json clases 
let clasesJSON = fs.readFileSync('./materias.json','utf-8');
// parseo el string con el json a un array de objetos
let clases = JSON.parse(clasesJSON);
//exporto mis clases

/* console.log(clases); */
let clasesTerminadas = clases.filter(
    clase => {
        return clase.estado === 'terminada';
    }
)

clasesTerminadas = JSON.stringify(clasesTerminadas);

let clasesPendientes = clases.filter(
    clase => {
        return clase.estado === 'pendiente';
    }
) 

clasesPendientes = JSON.stringify(clasesPendientes);

let clasesParaRepasar = clases.filter(
    clase => {
        return clase.estado === 'repasar';
    }
)

clasesParaRepasar = JSON.stringify(clasesParaRepasar);

fs.writeFile('./repasar.json', clasesParaRepasar,'utf-8', err => {
    if (err) throw err;
    console.log('Export!');
});

fs.writeFile('./terminadas.json', clasesTerminadas,'utf-8', err => {
    if (err) throw err;
    console.log('Export!');
});

fs.writeFile('./pendientes.json', clasesPendientes,'utf-8', err => {
    if (err) throw err;
    console.log('Export!');
});
