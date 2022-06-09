const hello = require('./hello')
const helloName = require('./helloForName')

function main () {
 //  Llamar a la funcion hello
 console.log(hello);
 
 //  Para jecutar necesito()
 console.log(hello());

 // Llama a la funcion helloForName
 // enviandole un nombre
 const msg = helloName('Carli');
 console.log(msg);
}

main();