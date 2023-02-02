//podemos envocar antes de crearla
console.log(saludo());

function saludo() {
    return "hola";
}

//no se puede invocar antes de crearla
//mayus();

//definir función como una expresión
const mayus = function mayusculas(cadena = '') {
    return cadena.toUpperCase();
}

console.log(mayus("hola q ase"));

//podemos omitir el nombre de la función
//esto se llama una función anónima o LAMBDA
const suma = function (num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(suma(4));
console.log(suma(4, 6));