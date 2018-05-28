function CrearElemento()
{
	// Creación de una tabla de 4 elemento: 0,1,2,3
	var miTabla = new Array(4),
	    resultado;

	miTabla[0] = "Pepito";
	miTabla[1] = "Ana";
	miTabla[2] = "Laura";
	miTabla[3] = "Juan";
	resultado = document.getElementById('Resultado');
	for(var i = 0; i < miTabla.length;i++)
	{
		resultado.innerHTML += miTabla[i] + " ";
	}
 } 