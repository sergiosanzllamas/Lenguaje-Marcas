
function CrearElemento() {

var mitabla = new Array(4),
resultado;
resultado = document.getElementById('Resultado');

mitabla[0] = "pepe";
mitabla[1] = "ana";
mitabla[2] = "rumano";
mitabla[3] = "bulgaro";

for (var i = 0; i< mitabla.length; i++) {
	resultado.innerHTML += mitabla[i] + " ";
}


}