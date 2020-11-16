// 4. [newArray] Crear una función que reciba dos dos arrays (arreglos) como
// argumentos y retorne el resultado en un nuevo arreglo

// Ejemplo:
// [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]

const array1 = [];
const array2 = [];
const cantidad1 = prompt('¿Cuántos datos tiene el primer Array?');
const cantidad2 =  prompt('¿Cuántos datos tiene el segundo Array?');

for(let i = 0; i < cantidad1; i++) {
    const elementos = prompt(`Ingrese el elemento ${i + 1} del Array1: `)
    array1.push(elementos);
}

for(let i = 0; i < cantidad2; i++) {
    const elementos = prompt(`Ingrese el elemento ${i + 1} del Array2: `)
    array2.push(elementos);
}


const concat = (array1, array2) => {
    const newArray = array1.concat(array2);
    return newArray;   
}

console.log(concat(array1, array2));