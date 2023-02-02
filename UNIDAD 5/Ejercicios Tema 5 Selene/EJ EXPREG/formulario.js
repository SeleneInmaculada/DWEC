

function comprobarDni(dni){   //EN EL PARENTESIS PASO LA ID
	var boolean;
	
	if(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i.test(dni)){ 
						//EXPRESION QUE COMPRUEBA 8 NUMEROS Y UNA LETRA
				        //EXPRESION REGULAR .TEST COMPRUEBA EL PARAMETRO QUE LE MANDO
		boolean = true;	//AL METERLO EN REQUIRED NO NECESITO LLAMARLO, LO COJO DIRECTAMENTE
	}else{
		boolean = false;
	}
	if(!boolean){ //SI BOOLEAN ES TRUE
		document.getElementById("dni").style.backgroundColor = '#ff4d4d';
		document.getElementById("dni").style.color = 'white';
	}else{ //SI BOOLEAN ES FALSE
		document.getElementById("dni").style.backgroundColor = 'white';
		document.getElementById("dni").style.color = 'black';
	} 
	return boolean;
}


function comprobarNombre(nombre){
	var boolean;
	if(/^[a-zA-ZñÑÁÉIÓÚáéíóú\s]+$/.test(nombre)){   //QUE SEAN CARACTERES ALFABETICOS Y ESPACIOS
		boolean = true;
	}else{
		boolean = false;
	}
	if(!boolean){
		document.getElementById("nombre").style.backgroundColor = '#ff4d4d';
		document.getElementById("nombre").style.color = 'white';
	}else{
		document.getElementById("nombre").style.backgroundColor = 'white';
		document.getElementById("nombre").style.color = 'black';
	}
	return boolean;
}


function comprobarApellido1(apellido1){
	var boolean;
	if(/^[a-zA-ZñÑÁÉIÓÚáéíóú\s]+$/.test(apellido1)){ //QUE SEAN CARACTERES ALFABETICOS Y ESPACIOS
		boolean = true;
	}else{
		boolean = false;
	}
	if(!boolean){
		document.getElementById("apellido1").style.backgroundColor = '#ff4d4d';
		document.getElementById("apellido1").style.color = 'white';
	}else{
		document.getElementById("apellido1").style.backgroundColor = 'white';
		document.getElementById("apellido1").style.color = 'black';
	}
	return boolean;
}


function comprobarcuenta(cuenta){
	var boolean;
	if(/^\d{10}$/.test(cuenta)){  //QUE EL NUMERO DE CUENTA SEAN DIEZ DIGITOS NUMERICOS
		boolean = true;
	}else{
		boolean = false;
	}
	if(!boolean){
		document.getElementById("cuenta").style.backgroundColor = '#ff4d4d';
		document.getElementById("cuenta").style.color = 'white';
	}else{
		document.getElementById("cuenta").style.backgroundColor = 'white';
		document.getElementById("cuenta").style.color = 'black';
	}
	return boolean;
}


function comprobarNombreVia(via){
	var boolean;
	if(/^[a-zA-ZñÑÁÉIÓÚáéíóú0-9\s]+$/.test(via)){  //NOMBRE DE LA VIA QUE PERMITE LETRAS Y NUMEROS
		boolean = true;
	}else{
		boolean = false;
	}
	if(!boolean){
		document.getElementById("via").style.backgroundColor = '#ff4d4d';
		document.getElementById("via").style.color = 'white';
	}else{
		document.getElementById("via").style.backgroundColor = 'white';
		document.getElementById("via").style.color = 'black';
	}
	return boolean;
}


function comprobarPoblacion(poblacion){
	var boolean;
	if(/^[a-zA-ZñÑÁÉIÓÚáéíóú\s]+$/.test(poblacion)){
		boolean = true;
	}else{
		boolean = false;
	}
	if(!boolean){
		document.getElementById("poblacion").style.backgroundColor = '#ff4d4d';
		document.getElementById("poblacion").style.color = 'white';
	}else{
		document.getElementById("poblacion").style.backgroundColor = 'white';
		document.getElementById("poblacion").style.color = 'black';
	}
	return boolean;
}


function comprobarCodigoPostal(codpostal){
	var boolean;
	if(/^\d{5}$/.test(codpostal)){
		boolean = true;
	}else{
		boolean = false;
	}
	if(!boolean){
		document.getElementById("cp").style.backgroundColor = '#ff4d4d';
		document.getElementById("cp").style.color = 'white';
	}else{
		document.getElementById("cp").style.backgroundColor = 'white';
		document.getElementById("cp").style.color = 'black';
	}
	return boolean;
}

function comprobarEmail(email){
	var boolean;
	if(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
		//CADENA CON LETRAS O NUMEROS + @ (OBLIGADO) + CADENA (OBLIGADA) + .ALGO
		boolean = true;
	}else{
		boolean = false;
	}
	if(!boolean){
		document.getElementById("email").style.backgroundColor = '#ff4d4d';
		document.getElementById("email").style.color = 'white';
	}else{
		document.getElementById("email").style.backgroundColor = 'white';
		document.getElementById("email").style.color = 'black';
	}
	return boolean;
}

function comprobarContrasena(contrasena){
	var boolean;
	if(/^(?=\w*\d)(?=\w*)(?=\w*[a-z])\S{8,10}$/.test(contrasena)){
		//CONTRASEÑA QUE SEA AL MENOS UNA LETRA, AL MENOS UN NUMERO, ENTRE 8-10 CARACTERES
		boolean = true;
	}else{
		boolean = false;
	}
	if(!boolean){
		document.getElementById("contrasena").style.backgroundColor = '#ff4d4d';
		document.getElementById("contrasena").style.color = 'white';
	}else{
		document.getElementById("contrasena").style.backgroundColor = 'white';
		document.getElementById("contrasena").style.color = 'black';
	}
	return boolean;
}



function comprobarTelefono(telefono){
	var boolean;
	if(/^\d{9}$/.test(telefono)){
		boolean = true;
	}else{
		boolean = false;
	}
	if(!boolean){
		document.getElementById("tlf").style.backgroundColor = '#ff4d4d';
		document.getElementById("tlf").style.color = 'white';
	}else{
		document.getElementById("tlf").style.backgroundColor = 'white';
		document.getElementById("tlf").style.color = 'black';
	}
	return boolean;
}



