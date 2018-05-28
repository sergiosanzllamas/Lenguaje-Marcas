function ObtenerOperando(idOperando) {
	// body...
	var mioperando;
	mioperando = document.getElementByid(idOperando);
	return parseInt(mioperando.value);
}
function RealizacionOperacion(operacion){
	var op1;
	var op2;
	
	var valor;


	op1 = ObtenerOperando('Operando1');
	op2 = ObtenerOperando('Operando2');

if(operacion == '+')
	valor = op1 + op2;
else if(operacion == '-')
	valor = op1 - op2;
else if(operacion == '*')
	valor = op1 * op2;
else if(operacion == '/')
	valor = op1 / op2;
else 
	valor = 0;
document.getElementByid('Resultado').innerHTML = valor;
}