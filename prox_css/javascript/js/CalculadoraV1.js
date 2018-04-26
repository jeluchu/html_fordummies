function ObtenerDato1() {

	var miParrafo;
	var miDato;

	miDato = document.getElementById('Dato1');
	miResultado = document.getElementById('Resultado');
	miResultado.innerHTML =
		"El valor es " + miDato.value;

}