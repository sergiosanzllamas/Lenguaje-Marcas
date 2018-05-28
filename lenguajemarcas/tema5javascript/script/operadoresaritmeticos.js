function CalcularOperadores() {
	//realiza operaciones aritmeticas 
	
	var miParrafo;
	var valor;
	miParrafo = document.getElementById('Resultado');
	valor = 12 + 20;
	miParrafo.innerHTML += 
 	"sumando los numeros 12 y 20 = " + valor + "<br>";
	valor = 12 - 20;
	 	miParrafo.innerHTML += 
 	"restando los numeros 12 y 20 = " + valor + "<br>";

	valor = 12 * 20;
	 		 	miParrafo.innerHTML += 
	 		 	"multiplicando los numeros 12 y 20 = " + valor + "<br>";
	

	valor = 12 / 20;
	 		 	miParrafo.innerHTML += 
	 		 	"dividiendo los numeros 12 y 20 = " + valor + "<br>";


	valor = 12;
	 		 	miParrafo.innerHTML += 
	 		 	"sumado valor = " + (--valor) + "<br>";
	
	valor = 12;
	 		 	miParrafo.innerHTML += 
	 		 	"sumando valor los numeros = " + (++valor) + "<br>";
	
	
}