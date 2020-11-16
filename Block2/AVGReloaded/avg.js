// 2. [AVGReloaded] Elaborar una función que reciba tres enteros y retorne el promedio.

const promedio = () => {
    let num = parseInt(prompt('¿Cuántos números desea ingresar?'));
    const contando = [];
    let total = 0
    for(let i = 0; i < num; i++) {
        let numeros = parseInt(prompt(`Ingrese número ${i + 1}`));
        contando.push(numeros);
        total += numeros;
    }

    let promedio = (total / num).toFixed(2);
    return promedio;
}

promedio();