//declara una función flecha a la que acepte como argumento un array de números y devuelva
//la suma de todos ellos. 

let total=0;
 var numeros = [1, 2, 3, 4, 5]
for(let i = 0; i < numeros.length; i++){
    total+=numeros[i];
} 
console.log(total);


///declara un array con 3 poblaciones y un segundo array con otras 3. Únelos en un tercer array.

var frutas=["platano", "papaya", "cerezas"]
var postres=["crepes","torrijas","natillas"]

var arraydoble= frutas.concat(postres)
console.log(arraydoble)

//recorre el array resultante con un bucle. 

for (let i = 0; i < arraydoble.length; i++) {
    console.log(arraydoble[i]);
}

//Ordena alfabeticamente los elementos del array

console.log(arraydoble.sort())

//Invierte el orden de los elementos del array

console.log(arraydoble.reverse())

//Une el array en una sola cadena separada por comas. 

console.log(arraydoble.toString())


//Crea un cuarto array con los tres últimos elementos y muéstralo por consola

console.log(arraydoble.slice(arraydoble.length-3,arraydoble.length))