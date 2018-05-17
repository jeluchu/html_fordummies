function EscribirNumeros() 
{
	var campoResultado,
		contador,
		numero;

	campoResultado = document.getElementById('Resultado');
	numero = parseInt(document.getElementById('Numero').value);
	contador = 1;

	// Escribir los números del 1 al número:
	// 		- Con While

	while (contador <= numero)
	{
		campoResultado.innerHTML += " " + contador++;
	}

	//		- Con Do-While

	contador = 1;
	do 
	{

		campoResultado.innerHTML += " " + contador++;

	} while (contador <= numero)



}