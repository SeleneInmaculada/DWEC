window.addEventListener("DOMContentLoaded", function () {
    //Capturamos los elementos del formulario
    const email = document.querySelector("#email");
    const formulario = document.querySelector("#formulario");
    const cp = document.querySelector("#cp");

    //funcion validación principal

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        evento.stopPropagation();


        //de entrada el formulario lo consideramos correcto.
        let valido = true;

        if (!validaEmail(email)) {
            valido = false;
        }

        if (!validaCP(cp)) {
            valido = false;
        }

        if (valido) {
            console.log(this);
            console.log(formulario);
            this.submit();
        }

    });


    function validaEmail(el) {
        const erEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (erEmail.test(el.value.trim())) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el, "El email no tiene un formato válido");
            return false;
        }
    }

    function validaCP(el) {
        const erCP = /^[0-5][0-9]{4}$/;
        const cpvalue = el.value.trim();
        if (cpvalue.match(erCP)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el, "EL Código Postal no es correcto");
            return false;
        }

    }


    ///////////////////////////////////////////////////////////////
    // funciones de utilidad:
    ///////////////////////////////////////////////////////////////

    //pone un mensaje pasado al parrafo de error asociado al elemento pasado 
    //y pone la clase de error al padre

    function marcarError(el, mensaje) {
        el.parentNode.querySelector(".error-feedback").textContent = mensaje;
        el.parentNode.classList.add("error");
    }

    //quita el mensaje de error al elemento pasado y quita la clase de error al padre 

    function marcarValido(el) {
        el.parentNode.querySelector(".error-feedback").textContent = "";
        el.parentNode.classList.remove("error");
    }




});