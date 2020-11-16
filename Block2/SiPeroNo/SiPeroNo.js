// 5. [SiPeroNo] Crear una función que reciba dos arrays de números y retorne un nuevo
// array con los elementos que se encuentren en el primer array, pero no en el
// segundo
// Nota; Esto se llama "resta" entre conjuntos
// Ejemplo:
// [5,1,2,3,4] y [3,4] debería devolver [5,1,2]


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

const crearArray = (array1, array2) => {
    const newArray = [];
    for(let i = 0; i < cantidad1; i++) {
        if (!array2.includes(array1[i]))
            newArray.push(array1[i])
        
    }

    return newArray;
}

console.log(crearArray(array1, array2));