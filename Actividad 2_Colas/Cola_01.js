/*Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando 
apartir de su índice. los pares en una y los nones en otra.
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco]*/

function dividirColaOriginal(colaOriginal) {
    const colaPar = colaOriginal.filter((_, indice) => indice % 2 === 0);
    const colaImpar = colaOriginal.filter((_, indice) => indice % 2 !== 0);
  
    return { colaPar, colaImpar };
  }
  
  // Ejemplo de uso
  const colaOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
  const colasDivididas = dividirColaOriginal(colaOriginal);
  
  console.log("Cola 1:", colasDivididas.colaPar);
  console.log("Cola 2:", colasDivididas.colaImpar);
  