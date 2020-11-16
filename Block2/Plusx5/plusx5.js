// 3. [Plusx5] Confeccionar una función que solicite la carga de 5 valores por teclado y
// retorne su suma.

const suma = () => {
    let num = parseInt(prompt('¿Cuántos números desea ingresar?'));
    let total = 0
    for(let i = 0; i < num; i++) {
        let numeros = parseInt(prompt(`Ingrese número ${i + 1}`));
        total += numeros;
    }

    return total;
}

console.log(suma())
