// #2 Crear una copia y refactorizar
//Se debe crear una copia del código ya hecho y refactorizarlo para que:

//Parte del programa quede en una función. El nombre de la función puede ser cualquiera (mientras sea acorde a lo que hace la función)
//Deben ser 3 funciones: 
//-Una para leer el contenido del archivo y que retorne el contenido de este
//-Una para contar las palabras del archivo y que imprima en un mensaje con el total de palabras
//-Una para contar los caracteres del archivo y que imprima en un mensaje con el total de caracteres

const fs = require('fs');

const rutaarchivo = ('./archivo_parsing.txt');

// Función para leer el contenido del archivo y retornar su contenido
const Fleerarchivo = (rutaarchivo) => {
    
    const contenido = fs.readFileSync('./archivo_parsing.txt', 'utf-8');
    const procesado = contenido.split(" ");
    console.log(procesado);
    return procesado;
}
const resultadoLectura = Fleerarchivo(rutaarchivo);

// Funcion Contar palabras
const Fcontarpalabras = (procesado) => {
    console.log(`El total de palabras es ${procesado.length}`);
    return procesado;
}
Fcontarpalabras(resultadoLectura);

// Funcion Contar caracteres
const Fcontarcaracteres = (contenido) => {
    let contador = 0;
    contenido.forEach(element => {
        const ncaracteres = element.length;
        contador = contador + ncaracteres;
    });
    console.log(`El total de caracteres es ${contador}`);
}
Fcontarcaracteres(resultadoLectura);


