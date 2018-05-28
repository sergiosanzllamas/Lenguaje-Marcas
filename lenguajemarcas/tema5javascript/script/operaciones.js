

function ObtenerOperando1() {
	var operando1;
	 var valoroperando1;
	operando1 = document.getElementById('Operando1');
	valoroperando1 = parseInt(operando1.value);
	return valoroperando1;
}
function ObtenerOperando2(){
	var operando2;
 	var valoroperando2;
	operando2 = document.getElementById('Operando2');
	valoroperando2 = parseInt(operando2.value);
	return valoroperando2;

}
function Sumar() {
	var  miResultado,
	     valoroperando2,
	     valoroperando1,
	    valorsuma;
//mas variables mas siemple 
	
	miResultado = document.getElementById('Resultado');
valoroperando1 =  ObtenerOperando1('Operando1');
valoroperando2 =  ObtenerOperando2('Operando2');
valorsuma = valoroperando1 + valoroperando2;
miResultado.innerHTML = valorsuma;



// es menos variables es mas compleajos pero te ahorras tiempo
/*document.getElementById('Resultado').innerHTML =
parseInt(document.getElementById('Operando1').value) + 
parseInt(document.getElementById('Operando2').value);*/

}

function Restar() {
	var mioperando1,
	     mioperando2,
	     miResultado,
	    valoroperando1,
	    valoroperando2,
	    valorresta;

	mioperando1 = document.getElementById('Operando1');
	mioperando2 = document.getElementById('Operando2');
	miResultado = document.getElementById('Resultado');
valoroperando1 =  parseInt(mioperando1.value);
valoroperando2 =  parseInt(mioperando2.value);
valorresta = valoroperando1 - valoroperando2;
miResultado.innerHTML = valorresta;
}
function Multiplicar() {
	var mioperando1,
	     mioperando2,
	     miResultado,
	    valoroperando1,
	    valoroperando2,
	    valormul;

	mioperando1 = document.getElementById('Operando1');
	mioperando2 = document.getElementById('Operando2');
	miResultado = document.getElementById('Resultado');
valoroperando1 =  parseInt(mioperando1.value);
valoroperando2 =  parseInt(mioperando2.value);
valormul = valoroperando1 * valoroperando2;
miResultado.innerHTML = valormul;
}
function Dividir() {
	var mioperando1,
	     mioperando2,
	     miResultado,
	    valoroperando1,
	    valoroperando2,
	    valordiv;

	mioperando1 = document.getElementById('Operando1');
	mioperando2 = document.getElementById('Operando2');
	miResultado = document.getElementById('Resultado');
valoroperando1 =  parseInt(mioperando1.value);
valoroperando2 =  parseInt(mioperando2.value);
valordiv = valoroperando1 / valoroperando2;
miResultado.innerHTML = valordiv;
}

