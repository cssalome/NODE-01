// import * as hola from './hello.js'
import hola from './hello.js'
import { helloForName as holaNombre } from './module-new/helloForName';

function main() {
  console.log(hola);
  console.log(hola());
  
  const msg = holaNombre('Misael')
  console.log(msg);
}

main();