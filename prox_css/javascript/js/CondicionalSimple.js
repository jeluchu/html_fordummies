function CalcularEtapa() {
	
	var campoEdad,
		campoResultado,
		valorEdad;

	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = campoEdad.value;
	campoResultado.innerHTML = "Tu etapa es: ";

	if (valorEdad >= 23)
		campoResultado.innerHTML += "Adulto";
	else
	if ((valorEdad <= 22) && (valorEdad >= 17))
		campoResultado.innerHTML += "Juventud";
	else
	if ((valorEdad <= 16) && (valorEdad >= 13))
		campoResultado.innerHTML += "Adolescente";
	else
	if ((valorEdad >= 0) && (valorEdad <= 12))
		campoResultado.innerHTML += "Infancia";
	else
	if (valorEdad < 0)
		campoResultado.innerHTML += "Estás intentando jugar con el programa";
}