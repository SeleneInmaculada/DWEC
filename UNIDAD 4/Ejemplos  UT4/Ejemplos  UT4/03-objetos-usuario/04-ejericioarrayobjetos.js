/*Crea una clase persona con una funcion generadora que tenga 
tres objetos con los tres atributos vistos*/

function Persona(nombre, apellido, fechaNac) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.anioNac = fechaNac;
}

var personas = new Array();
const p1 = new Persona('Yuta', 'Aoi', 2000);
const p2 = new Persona('Hinata', 'Aoi', 2000);
const p3 = new Persona('Rei', 'Sakuma', 1998);
const p4 = new Persona('Ritsu', 'Sakuma', 1999);

personas.push(p1);
personas.push(p2);
personas.push(p3);
personas.push(p4);



personas.forEach((persona, indice) =>{
    console.log(`---- PERSONA ${indice} -----`);
    for (prop in persona) {
        console.log(`${prop}: ${persona[prop]}`);
    }
})
/*Crea un array de varios objetos persona
crea un bucle que recorra el array de objetos con otro bucle 
anidado que recorra las propiedades de cada objeto*/