//const fs = require('fs');
//const argv = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./yargs/yargs');

//const valor = 9;

//console.log(process.argv);
console.clear();
//console.log(argv.b);


//const [, , argv3] = process.argv;
//const [, valor] = argv3.split('=');

crearArchivo(argv.b, argv.l, argv.h)
    .then(resultado => console.log(resultado, 'Tabla '))
    .catch(err => console.log(err));

/*let result = '';

console.log('********************************************');
console.log(`************Tabla del ${valor}**************`);////
console.log('********************************************');


for (let i = 1; i <= 10; i++) {
    result += `${valor} * ${i} = ${valor * i} \n`;

}
console.log('Archivo Creado');
const file = fs.writeFile(`Tabla-del-${valor}.txt`, result, (error) => {
    if (error) {
        throw error;
    } else {
        console.log('Archivo Creado');
    }

});*/