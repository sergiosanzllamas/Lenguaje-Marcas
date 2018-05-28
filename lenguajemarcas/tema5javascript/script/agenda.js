class Contacto{
	constructor(n, t,d){
		this.nombre = n;
		this.telefono = t;
		this.direccion = d;

	}


Escribir(idhtml){
var resultado;
resultado = document.getElementById(idhtml);
resultado.innerHTML += 
"Nombre:" + this.nombre + "<br>" +
"Telefono:" + this.telefono + "<br>" + 
"direccion:" + this.direccion + "<br>";
}
EscribirNombre(idhtml){
	var resultado;
	resultado = document.getElementById(idhtml);
	resultado.innerHTML += "Nombre: " + this.nombre +"<br>"; 
}
CambiarTelefono(nuevoT){
	this.telefono = nuevoT;
}
CambiarNombre(nuevoN){
	this.nombre = nuevoN;
 }
 CambiarNombre(nuevaD){
	this.direccion = nuevaD;
 }
}
class ListaContactos{
		constructor(){
		this.nContactos = 0;
		this.lista = new Array(5);
		

	}
	InsertarContacto(n,t,d){
		var c1 = new Contacto(n,t,d);
		this.lista[this.nContactos] = c1;
		this.nContactos++;

	}
	EscribirNombres(idhtml){
			var resultado;
	resultado = document.getElementById(idhtml);
		resultado.innerHTML = " ";
		for (var i = 0; i < this.nContactos; i++) {
			this.lista[i].EscribirNombre(idhtml);
		}
	}
}

var miLista = new ListaContactos();

function InsertarContactoLista() {
	var miNombre, miTelefono,miDireccion;

	miNombre = document.getElementById('nombre').value;
	miTelefono = document.getElementById('telefono').value;
	miDireccion = document.getElementById('direccion').value;
	miLista.InsertarContacto(miNombre,miDireccion,miTelefono);
	miLista.EscribirNombres('ListaContactoNombre');

	}
