function Calculardia() {
	var campoResultado,
	     fechaActual,
	     diaActual; 
campoResultado = document.getElementById('Resultado');
fechaActual = new Date();
diaActual = fechaActual.getDay();
switch(diaActual){
	case 1:
campoResultado.innerHTML = "lunes";
break;
	case 2:
	case 3:
	case 4:
	case 5:
campoResultado.innerHTML += "entre semana";
break;
case 6:
case 0:

campoResultado.innerHTML = "fin de semana";
break;
default:

campoResultado.innerHTML = "dia no valido";
break;
}
	}