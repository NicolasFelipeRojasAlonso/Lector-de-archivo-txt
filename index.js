// #1 Construir programa que parsee archivo en TXT
//Se debe construir un programa, utilizando JavaScript que lear el contenido del archivo .txt y por consola:

//-Muestre el total de palabras dentro del archivo
//-Muestre el total de caracteres dentro del archivo
//-Se deben ignorar los espacios como caracteres


const fs = require('fs');

// Leer archivo
const contenido = fs.readFileSync('./archivo_parsing.txt','utf-8');
const procesado = contenido.split(" ");  

//Contar palabras
console.log(`El total de palabras es ${procesado.length}`);

//Contar caracteres
let contador = 0;
procesado.forEach(element => {
    const ncaracteres = element.length; 
    contador = contador + ncaracteres
});
console.log(`El total de caracteres es ${contador}`);