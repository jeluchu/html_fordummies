function CalcularDia() 
{
	var campoResultado,
		fechaActual,
		diaActual;

	campoResultado = document.getElementById('Resultado');
	// Instanciación DEL OBJETO DATE
	fechaActual = new Date();
	// La Función getDay devuelve el día de la semana
	// de la fecha:
	//
	//	0: Domingo
	//	1: Lunes
	//	6: Sábado
	diaActual = fechaActual.getDay(); // getDay(FechaActual)
	switch(diaActual)
	{
		case 1:
			campoResultado.innerHTML = "Lunes";
		break;
		case 2:
			campoResultado.innerHTML = "Martes";
		break;
		case 3:
			campoResultado.innerHTML = "Miércoles";
		break;
		case 4:
			campoResultado.innerHTML = "Jueves";
		break;
		case 5:
			campoResultado.innerHTML = "Viernes";
		break;
		case 6:
			campoResultado.innerHTML = "Sábado";
		break;
		case 0:
			campoResultado.innerHTML = "Fin de semana - Domingo";
		break;
		default:
			campoResultado.innerHTML = "Día no válido";
		break;
	}


}