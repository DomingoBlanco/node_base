const fs = require('fs');
const color = require('colors');
let salida = '';
let consola = '';
/*const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {


        console.log('********************************************');
        console.log(`************Tabla del ${base}**************`);
        console.log('********************************************');

        if (base > 0) {
            for (i = 1; i < 10; i++) {
                salida += `${base} * ${i} = ${base * i} \n`;
            }

            console.log(salida);
            fs.writeFileSync(`Tabla-del-${base}.txt`, salida);

            resolve(`Tabla-del-${base}.txt`);

        } else {
            reject(`Ocurrio un error creando el archivo y no se puede multiplicar por cero`);


        }


    });

}*/


const crearArchivo = async(base = 5, listar = false, hasta = 10) => {


    if (listar) {
        console.log('********************************************'.yellow);
        console.log(`   ************Tabla del ${base}**************`.blue);
        console.log('********************************************'.red);

    }

    try {
        if (base > 0) {
            for (i = 1; i <= hasta; i++) {
                salida += `${base} ${'*'} ${i} ${'='} ${base * i} \n`;
                consola += `${base} ${'*'.green} ${i} ${'='.green} ${base * i} \n`;
            }

            if (listar) {
                console.log(consola);
            }

            fs.writeFileSync(`./salida/Tabla-del-${base}.txt`, salida);

            return `Tabla-del-${base}.txt`;

        }


    } catch (error) {
        throw error;
    }



}

module.exports = {
    crearArchivo
}