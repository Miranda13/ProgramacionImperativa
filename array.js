let films = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];

function convertirAMayuscula (array) {
    array[0] = array[0].toUpperCase();
    array[1] = array[1].toUpperCase();
    array[2] = array[2].toUpperCase();
    array[3] = array[3].toUpperCase();
    array[4] = array[4].toUpperCase();
}

convertirAMayuscula(films);

let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

convertirAMayuscula(cartoons);

cartoons.pop();

films.push(cartoons[0]);
films.push(cartoons[1]);
films.push(cartoons[2]);
films.push(cartoons[3]);

console.log(films);
console.log(cartoons);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 9, 10, 6, 7, 9];

/* function compararCalificaciones(array1, array2) {
    let arrayUnido1 = array1.join();
    let arrayUnido2 = array2.join();

    if (arrayUnido1 === arrayUnido2) {
        return 'son iguales'
    } else {
        return 'no son iguales'
    }
} */
function compararCalificaciones(array1, array2) {
    if (array1[0] === array2[0] && array1[1] === array2[1] && array1[2] === array2[2] && array1[3] === array2[3] && array1[4] === array2[4] && array1[5] === array2[5] && array1[6] === array2[6] && array1[7] === array2[7]) {
        return 'son iguales'
    } else {
        return 'no son iguales'
    }
} 

console.log(compararCalificaciones(asiaScores, euroScores));
