//podemos invocar la función antes de ser declarada
hola();

function hola() {
    console.log("Hola!");
}


//la función puede tener parámetros de entrada
//el parámetro de entrada puede tener un valor por defecto
//Opcionalmente la función puede devolver un resultado con return

function mayusculas(cadena = 'por defecto') {
    return cadena.toUpperCase();
}

console.log(mayusculas());
console.log(mayusculas('me llamo juan'));