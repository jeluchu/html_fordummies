function CalcularOperadores () {
	
	/* 
	   Realiza operaciones aritméticas
	   con elementos del documento HTML
	*/

	var miParrafo;
	var valor;

	miParrafo = document.getElementById('Resultado');

	valor = 12 + 20;
	miParrafo.innerHTML +=
		"Sumando los numeros 12 y 20 = " + valor + "<br>";

	valor = 12 - 20;
	miParrafo.innerHTML +=
		"Restando los numeros 12 y 20 = " + valor + "<br>";

	valor = 3 * 20;
	miParrafo.innerHTML +=
		"Multiplicando los numeros 3 y 20 = " + valor + "<br>";

	valor = 34 / 6;
	miParrafo.innerHTML +=
		"Dividiendo los numeros 34 y 6 = " + valor + "<br>";

	valor = 8;
	miParrafo.innerHTML +=
		"Sumando valor = " + (++valor) + "<br>";
	miParrafo.innerHTML +=
		"Sumando valor = " + (++valor) + "<br>";

}