// [BigThreeReloaded] Confeccionar una función a la cual le envíe tres enteros y
// retorne el mayor de ellos.

const enteros = () => {
    let num = prompt('¿Cuántos números desea ingresar?');
    const contando = [];
    for(let i = 0; i < num; i++) {
        let numeros = parseInt(prompt(`Ingrese número ${i + 1}`));
        contando.push(numeros);
    }

    const mayorNumero = Math.max(...contando);
    return mayorNumero;
}

console.log(enteros());


