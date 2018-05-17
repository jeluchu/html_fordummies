class Contacto
{
	//Creación del constructor
	// n = nombre
	// t = teléfono

	constructor(n,t)
	{
		this.nombre = n;
		this.telefono = t;
	}

	Escribir()
	{
		var resultado;

		resultado = document.getElementById('Resultado');
		resultado.innerHTML = 
			"Nombre: " 	 + this.nombre   + "<br>" +
			"Teléfono: " + this.telefono +"<br>";

	}

	CambiarTelefono(nuevoT)
	{
		this.telefono = nuevoT;
	}

}

function CrearContacto() {
	
	var c1 = new Contacto("Pepe", 1111),
		c2 = new Contacto("Ana", 2222);

	c1.Escribir();

}