class Contacto{
	// creacion del constructor
	constructor(n, t){
		this.nombre = n;
		this.telefono = t;
	}




	Escribir(){
		var resultado;
		 resultado = document.getElementById('Resultado');
		 resultado.innerHTML = 
		 "Nombre :" + this.nombre + "<br>" +
		 "Telefono: " + this.telefono + "<br>";
	}

	CambiarTelefono(nuevoT){
this.telefono = nuevoT;
	}
	CambiarNombre(nuevoN){
		this.nombre = nuevoN;
	}
}

var c1;
var c2;
	function CrearContacto() {

		 c1 = new Contacto("juan", 1111);
		 c2 = new Contacto("ramon", 2343);
		 

		c1.Escribir();

		
	}

function ModificarContacto() {
	var ValorNombre,
	    ValorTelefono;

	    ValorNombre = document.getElementById('Nombre').value;
	    ValorTelefono = document.getElementById('Telefono').value;

	    c1.CambiarTelefono(ValorTelefono);
	    c1.CambiarNombre(ValorNombre);
	    c1.Escribir();

}