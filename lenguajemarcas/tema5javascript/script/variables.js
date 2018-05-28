function CambiarTexto() {
	/* camabiar el texto de un elemento con id ="resultado " del cdcumento 
	html*/
	var miParrafo;
	var Precio = 22.95;
	miParrafo = document.getElementById('Resultado');

Precio = Precio +10
miParrafo.innerHTML +=
"el precio es " + Precio +"<br>" + "el doble del precio es " + (Precio*2) + "<br>"
/* cambiamos el tipo de datos de precio*/

Precio = 'es muy caro';
miParrafo.innerHTML +=
"tipo de datos: String" + "<br>" +
"el precio es " + Precio +"<br>" + "el doble del precio es " + Precio + "<br>"

Precio = false;
miParrafo.innerHTML +=
"tipo de datos: Boolean" + "<br>" +
"el precio es " + Precio +"<br>" + "el doble del precio es " + (Precio*2) + "<br>"
}