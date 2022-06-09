// import * as hello from './hello'
import {hello} from './hello.js'
// import { helloForName as helloName } from './helloForName.js';
import {helloForName} from './helloForName.js'

function main() {
  //  Llamar a la funcion hello
 console.log(hello);
 
 //  Para jecutar necesito()
 console.log(hello());

 // Llama a la funcion helloForName
 // enviandole un nombre
 const msg = helloForName('Carli');
 console.log(msg);
}

main();