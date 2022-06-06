const {hola} = require('./hello')
const hello = require('./helloForName')

function main () {
 // llamar a la funcion hello
//  console.log(hola);
 
 // si quiero ejecutarla necesito
//  console.log(hola());
 
 const msg = hello('Carli');
 console.log(msg);
}

main();