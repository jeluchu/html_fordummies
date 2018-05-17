class Contacto
{
	public char nombre[30];
	public long telefono;

	public Contacto(char n[30], long t) {

		strcpy(this.nombre,n);
		this.telefono = t;

	}

	void Escribir() {

		printf("Nombre %s Teléfono: %ld", this.nombre, this.telefono);

	}

	void CambiarTelefono(long nt) {

		this.telefono = nt;

	}
}

main () {

	Contacto c1;

	c1 = new Contacto("Pepe",1111);
	c1.Escribir();
	c1.CambiarTelefono(22222); 
}