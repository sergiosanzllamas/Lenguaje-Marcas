function CalcularEtapa() {

	var CampoEdad,
	    CampoResultado,
	    valorEdad;

CampoResultado = document.getElementById('Resultado');
	    CampoEdad = document.getElementById('Edad');

	    valorEdad = CampoEdad.value;


	    if(valorEdad <=12){
	    	CampoResultado.innerHTML = "infancia";
	    }
	 else if(valorEdad > 12 && valorEdad <=16){
CampoResultado.innerHTML = "adolescencia";
}
	 else if(valorEdad > 17 && valorEdad <=22){
CampoResultado.innerHTML = "juventud";
}
	 else if(valorEdad > 23){
CampoResultado.innerHTML = "adulto";
}


}