const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Es la base mostrar la tabla de multiplicar'
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'hasta que numero quiere que se multiplique'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error("error numero");
        }
        return true;
    })
    .argv;

module.exports = argv;