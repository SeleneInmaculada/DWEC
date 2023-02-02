window.addEventListener("load", function () {
    //Capturamos los elementos del formulario
    const formulario = document.querySelector("#formulario");
    const usuario = document.querySelector("#user");
    const passwd = document.querySelector("#passwd");
    const newPasswd = document.querySelector("#newpasswd");
    const fechaNac = document.querySelector("#fechaNac");
    const condiciones = document.querySelector("#condiciones");

    //función de validación del formulario asociada al evento submit

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();
        evento.stopPropagation();
        //de entrada el formulario lo consideramos correcto.
        let valido = true;

        //validar usuario
        if (!validaUser(usuario)) {
            valido = false;
        }

        if (!validaPasswd(passwd)) {
            valido = false;
        }

        if (!validaPasswd2(newPasswd, passwd)) {
            valido = false;
        }
        if (!validaFecha(fechaNac)) {
            valido = false;
        }
        if (!validaCheck(condiciones)) {
            valido = false;
        }


        if (valido) {
            formulario.submit();
        }



    });






    ///////////////////////////////////////////////////////////////
    // a partir de aquí pondremos funciones de validación
    ///////////////////////////////////////////////////////////////

    //validaUser(el) valida que el user es correcto. devolverá true si correcto y false si no
    //la función recibe el elemento input usuario, no su valor!!!!!

    function validaUser(el) {
        if (!el.value) {
            marcarError(el, "No has introducido el usuario");
            return false;
        } else {
            marcarValido(el);
            return true;
        }
    }

    //validaPass(el) 

    function validaPasswd(el) {
        if (el.value.length < 7) {
            marcarError(el, "El password debe tener 7 caracteres al menos");
            return false;
        } else {
            marcarValido(el);
            return true;
        }
    }

    function validaPasswd2(newPass, oldPass) {
        if (newPass.value == oldPass.value) {
            marcarValido(newPass);
            return true;
        } else {
            marcarError(newPass, "Los passwords no coinciden");
            return false;
        }
    }

    function validaCheck(el) {
        if (!el.checked) {
            marcarError(el, "Tienes que marcar la casilla de verificación");
            return false;
        } else {
            marcarValido(el);
            return true;
        }

    }

    function validaFecha(el) {
        if (!el.value) {
            marcarError(el, "No has introducido una fecha");
            return false;
        } else {
            marcarValido(el);
            return true;
           
        }

    }



    //validaPass2




    //validaCheck




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