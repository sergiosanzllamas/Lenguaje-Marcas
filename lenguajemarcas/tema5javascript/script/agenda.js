class Contacto{
	constructor(n, t){
		this.nombre = n;
		this.telefono = t;
	}


Escribir(){
var resultado;
resultado = document.getElementById('Resultado');
resultado.innerHTML = 
"Nombre:" + this.nombre + "<br>" +
"Telefono:" + this.telefono + "<br";
}
CambiarTelefono(nuevoT){
	this.telefono = nuevoT;
}
CambiarNombre(nuevoN){
	this.nombre = nuevoN;
 }
}

var c1;
var c1;
var c1;
var c1;