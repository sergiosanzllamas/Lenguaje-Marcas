function CalcularEtapa() {

	var CampoEdad,
	    CampoResultado,
	    valorEdad;

CampoResultado = document.getElementById('Resultado');
	    CampoEdad = document.getElementById('Edad');
	    valorEdad = CampoEdad.value;
	    switch(valorEdad)
	    {

	    	case 12:
	    	CampoResultado.innerHTML = "INFANCIA";
	    	break;

	    	case 13:
	    	CampoResultado.innerHTML = "PAV";
	    	break;
	    	case 17:
	    	CampoResultado.innerHTML = "JUVENTUD";
	    	break;
	    	case 22:
	    	CampoResultado.innerHTML = "ADULTO";
break;

	    }


}