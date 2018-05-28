class Contacto
{

	// CREACIÓN DEL CONSTRUCTOR
	// -n: Nombre, t: Teléfono, d: Dirección

	constructor(n,t,d)
	{
		this.nombre = n;
		this.telefono = t;
		this.direccion = d;
	}

	Escribir(elementoHTML)
	{
		var resultado;

		resultado = document.getElementById(elementoHTML);
		resultado.innerHTML +=
			"Nombre: " + this.nombre + "<br>" +
			"Teléfono: " + this.telefono + "<br>" +
			"Dirección: " + this.direccion + "<br>";
	}

	EscribirNombre(elementoHTML)
	{
		var resultado;

		resultado = document.getElementById(elementoHTML);
		resultado.innerHTML +=
			"Nombre: " + this.nombre + "<br>";
	}

	CambiarTelefono(nuevoT)
	{
		this.telefono = nuevoT;
	}

	CambiarNombre(nuevoN)
	{
		this.nombre = nuevoN;
	}

}

class ListaContactos
{
	// CREACIÓN DEL CONSTRUCTOR
	// -nContactos: Número de contactos
	// -lista: Lista de contactos

	constructor(n,t,d)
	{
		this.nContactos = 0;
		this.lista = new Array(5); // Crear una tabla
	}

	InsertarContacto(nom,tel,dir)
	{
		var contacto = new Contacto(nom,tel,dir);

		this.lista[this.nContactos] = contacto;
		this.nContactos ++;
	}

	EscribirNombre(elementoHTML)
	{
		// Escribir los elementos existentes en la lista
		//El número de elementos se almacena en this.nContactos
		var resultado;

		resultado = document.getElementById(elementoHTML);
		resultado.innerHTML = "";
		for (var i = 0; i < this.nContactos; i++) 
		{
			// this.lista[i]
			this.lista[i].EscribirNombre(elementoHTML);
		}
	}

}

// Objeto Global
var miLista = new ListaContactos();

function InsertarContactoLista(elementoHTML) {
	
	var miNombre, miTelefono, miDireccion;

	miNombre = document.getElementById('nombre').value;
	miTelefono = document.getElementById('telefono').value;
	miDireccion = document.getElementById('direccion').value;

	miLista.InsertarContacto(miNombre,miTelefono,miDireccion);
	miLista.EscribirNombre('ListaContactoNombre');

}