//--COGER LAS VARIABLES QUE VAMOS A UTILIZAR--

window.addEventListener("load", e => {

    const formulario = document.getElementById("formulario"); //id del formulario (form)
    const listaTareas = document.getElementById("lista-tareas"); //div donde meter el array
    const input = document.getElementById("input") //caja de texto donde meto  la tarea para añadirla al array
    


    //----------------------------------------------------------------

    let tareas = []; //creo el array donde voy a meter las palabras

    formulario.addEventListener("submit", e => {  //quito el evento por default del submit para que no moleste
        e.preventDefault();
        setTareas(e);
    });


    function setTareas(e) {  //meto las palabras en el array con un push
        tareas.push(input.value);
        console.log(tareas);
        pintarTareas(e)  //llamo a pintar tareas
    }


    function pintarTareas(e) {
        const fragment = document.createDocumentFragment(); //para meter elementos del array en el html de uno en uno
        listaTareas.innerHTML=""; //para escribir en la pagina de uno en uno

        tareas.forEach(tarea => {
            const parrafo = document.createElement("li"); //asi se crea un parrafo
            const alert = document.createElement("p"); //crear div
            alert.classList = "alert alert-warning"; //crear alert dentro del div

            parrafo.textContent = tarea; //el parrafo tiene el contenido de tarea en su texto
            alert.appendChild(parrafo); //parrafo metido en el div
            fragment.appendChild(alert) //meto el alert con el parrafo en el fragmento

        })
        listaTareas.appendChild(fragment); //meto el texto escrito en listartareas que tiene el inner para escribir
    }


});