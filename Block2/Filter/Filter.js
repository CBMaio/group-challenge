// 6. [Filter] Crear una función que reciba un array de números como argumento y
// retorne un array con los elementos distintos
// Ejemplo:
// [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]

let array1 = [];
let cantidad1 = prompt('¿Cuántos datos tiene el primer Array?');



const filter = (arr) => {
    //Intentamos reducir numeros del array a partir de un nuevo array
/*     let newArray = [];
    for(let i = 0; i < cantidad1; i++) {
        if (!arr.includes(arr[i]))
            newArray.push(elementos)
    }

    console.log(array1);
    console.log(newArray);
    return newArray; */

//Evaluamos al ingresar el número. 

    for(let i = 0; i < cantidad1; i++) {
        let elementos = prompt(`Ingrese el elemento ${i + 1} del Array1: `)
        if (!array1.includes(elementos))
            array1.push(elementos);
    }
}

console.log(filter(array1))