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

var divPersonas = document.querySelector(".personas");

personas.forEach((persona, indice) => {
    var nuevodivpersona = 
    `<div class="persona">
        <h3>Persona ${indice+1}</h3>s
        <ul>
            <li><b>Nombre:</b> ${persona.nombre}</li>
            <li><b>Apellido:</b> ${persona.apellido}</li>
            <li><b>Fecha de nacimiento:</b> ${persona.anioNac}</li>
        </ul>
    </div>`
    divPersonas.innerHTML += nuevodivpersona;
})