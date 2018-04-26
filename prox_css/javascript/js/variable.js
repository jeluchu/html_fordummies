function CambiarTexto() {

	/* CAMBIAR EL TEXTO DE UN ELEMENTO
	   CON ID = "RESULTADO" DEL
	   DOCUMENTO HTML
	*/	

	var miParrafo;
	var precio = 22.36;

	miParrafo = document.getElementById('Resultado');
	precio = precio + 10;
	miParrafo.innerHTML +=
	"El precio es " + precio + "<br>" + 
	"El doble del precio es " + (precio*2) + "<br>";

	/* CAMBIAMOS EL TIPO DE DATOS DEL PRECIO */
	precio = 'Muy Caro'; //Tipo de datos String
	miParrafo.innerHTML +=
	"Tipo de datos: String" + "<br>" +
	"El precio es " + precio + "<br>" + 
	"El doble del precio es " + (precio*2) + "<br>";

	precio = false; //Tipo de datos Boolean
	miParrafo.innerHTML +=
	"Tipo de datos: Boolean" + "<br>" +
	"El precio es " + precio + "<br>" + 
	"El doble del precio es " + (precio*2) + "<br>";

}