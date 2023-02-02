window.addEventListener("load", function () {
    //DECLARACION DE VARIABLES 
    const formulario = document.querySelector("#formulario");
    const nombre = document.querySelector("#nombre");
    const passwd = document.querySelector("#passwd");
    const newPasswd = document.querySelector("#newpasswd");
    const fechaNac = document.querySelector("#fechaNac");
    const condiciones = document.querySelector("#condiciones");
    const publicidad = document.querySelector("#publicidad");
    const privacidad = document.querySelector("#privacidad");
    const telefono = document.querySelector("#telefono");
    const cuenta = document.querySelector("#numcuenta");


    //---FUNCION DE VALIDACION DE PARAMETROS---
    formulario.addEventListener("submit", evento => {

        evento.preventDefault();
        evento.stopPropagation();

        //SI ALGUNA DE LAS FUNCIONES FALLA, SE CAMBIA EL PARAMETRO VALIDO A FALSE
        let valido = true;

        if (!validaUser(nombre)) {
            valido = false;
        }
        if (!validaPass(passwd)) {
            valido = false;
        }
        if (!validaPass2(newPasswd, passwd)) {
            valido = false;
        }
        if (!validaFecha(fechaNac)) {
            valido = false;
        }
        if (!validaCheck(condiciones)) {
            valido = false;
        }
        if (!validaPrivacidad(privacidad)) {
            valido = false;
        }
        if (!validaTelefono(telefono)) {
            valido = false;
        }
        if (!validaCuenta(cuenta)) {
            valido = false;
        }

        //SI TODO ES CORRECTO SE MANDA EL FORMULARIO
        if (valido) {
            formulario.submit();
        }
    });

    //---FUNCIONES VALIDADORAS---
    //---VALIDAR USUARIO---
    function validaUser(el) {
        if (!el.value) {
            el.parentNode.querySelector("p").textContent = "El campo nombre no puede estar vacio";
            el.parentNode.classList.add("error");
            return false;
        } else {
            el.parentNode.querySelector("p").textContent = ""
            el.parentNode.classList.remove("error");
            return true;
        }
    }
    //---VALIDAR CONTRASEÑA---
    function validaPass(el) {
        if (el.value.length < 7) {
            marcaError(el, "El password debe tener al menos 7 caracteres")
            return false;
        } else {
            marcaValido(el);
            return true;
        }
    }
    //---VALIDAR NUMERO DE TELEFONO---
    function validaTelefono(el) {
        if (el.value.length < 9) {
            marcaError(el, "El numero de telefono debe tener 9 caracteres")
            return false;
        } else {
            marcaValido(el);
            return true;
        }
    }
    //---VALIDAR NUMERO DE CUENTA---
    function validaCuenta(el) {
        if (el.value.length < 10) {
            marcaError(el, "El numero de cuenta es obligatorio y deben ser 10 caracteres")
            return false;
        } else {
            marcaValido(el);
            return true;
        }
    }
    //---VALIDAR QUE LA CONTRASEÑA INTRODUCIDA SEA LA MISMA---

   
    function validaPass2(newPass, oldPass) {
        if (newPass.value === oldPass.value) {
            newPass.parentNode.querySelector(".error-feedback").textContent = "";
            return true;
        } else {
            newPass.parentNode.querySelector(".error-feedback").textContent = "El password debe coincidir";
            return false;
        }
    }
    //---VALIDAR INTRODUCCION DE FECHA---
    function validaFecha(el) {
        if (el.value) {
            el.parentNode.querySelector(".error-feedback").textContent = "";
            return true;
        } else {
            el.parentNode.querySelector(".error-feedback").textContent = "Tiene que seleccionar una fecha";
            return false;
        }
    }

    //---VALIDAR CAJA CHECK---
    function validaCheck(el) {
        if (el.checked) {
            el.parentNode.querySelector(".error-feedback").textContent = "";

            return true;
        } else {
            el.parentNode.querySelector(".error-feedback").textContent = "Tiene que marcar la casilla";
            return false;
        }
    }

    function validaPrivacidad(el) {
        if (el.checked) {
            el.parentNode.querySelector(".error-feedback").textContent = "";

            return true;
        } else {
            el.parentNode.querySelector(".error-feedback").textContent = "Tiene que marcar la casilla";
            return false;
        }
    }


    //---MARCAR TODOS LOS CHECK DE GOLPE---
    document.getElementById("marcar").onclick = function () {
        condiciones.checked = true;
        publicidad.checked = true;
        privacidad.checked=true;
    }

    //---PONER MENSAJE DE ERROR EN EL PARRAFO ASOCIADO---
    function marcaError(elemento, mensaje) {
        elemento.parentNode.querySelector(".error-feedback").textContent = mensaje;
        elemento.parentNode.classList.add("error");

    }
    //---REMOVER MENSAJE DE ERROR EN CASO DE QUE LA FUNCION VALIDADORA SEA CORRECTA---
    function marcaValido(elemento) {
        elemento.parentNode.querySelector(".error-feedback").textContent = "";
        elemento.parentNode.classList.add("remove");
    }



});