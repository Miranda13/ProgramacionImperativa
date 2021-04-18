const fs = require('fs');
const moment = require('moment');

let datos = fs.readFileSync(__dirname + '/archivo.txt', 'utf-8');

console.log(datos);

console.log(moment().format('MMM DD YYYY'))