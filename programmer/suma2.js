const path = require('path');

console.log(process.argv);

let num1 = process.argv[2];
let num2 = process.argv[3];

if (!num1 || !num2) {
    // Windows: \
    // Unix: /
    const aplicacion = process.argv[1].split(path.sep).pop();

    console.error('Falta uno o dos argumentos.')
    console.error('Ejemplo: %s num1 num2', aplicacion);

    process.exit(1);
}
//parseamos el dato
const resultado = parseInt(num1) + parseInt(num2);
//mostramos en pantalla la info
console.log(`La suma de ${num1} y ${num2} es igual ${resultado}.`);