//1. declara una función "espar" de la manera tradicional que nos devuelva un boolano que nos diga si un número es par


          //pedimos numero por pantalla

        function espar(numero){

        if(numero % 2 == 0){  //si el resto de la division entre 2 es 0
           console.log("El número es par")  //es par
        }else{
            console.log("El número es impar") //si no, es impar
        }
    }
    espar(8);

//2. declara una función lambda o anónima que nos devuelva el número de veces que aparece un caracter en una cadena
//Podemos recorrer una cadena con un bucle 
//for (car in cadena) {
//    console.log(cadena[car]);
//}

/*var contar= function(miCadena){
cuenta = 0;
posicion = miCadena.indexOf("a",0);
while ( posicion != -1 ) {  
  cuenta++;
  posicion = miCadena.indexOf("a",posicion+1); 
}
}
contar();*/

//3. declara una función al estilo Arrow Function que  pasadas tres cadenas nos las devuelva concatenadas separadas por comas
const concat = (a,b,c) => { return `${a},${b},${c}`}
console.log(concat("hola", "adios", "buenas"));