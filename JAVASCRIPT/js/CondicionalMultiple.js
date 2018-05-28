function CalcularEtapa() {
	
	var campoEdad,
		campoResultado,
		valorEdad;

	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = parseInt(campoEdad.value);
	campoResultado.innerHTML = "Tu etapa es: ";

	switch (valorEdad)
	{
		case 12:
		campoResultado.innerHTML += "Infancia";
		break;

		case 13:
		campoResultado.innerHTML += "Adolescente";
		break;

		case 17:
		campoResultado.innerHTML += "Juventud";
		break;

		case 23:
		campoResultado.innerHTML += "Adulto";
		break;

		default:
		campoResultado.innerHTML += "Deja de intentar fastidiar el programa";
		break;
	}
}