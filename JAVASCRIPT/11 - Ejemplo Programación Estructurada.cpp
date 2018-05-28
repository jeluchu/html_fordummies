typedef struc
{

	char nombre [30];
	long telefono;

} Contacto;

void CrearContacto(Contacto *c, char[30], long t) {

	strcpy(c->nombre,n);
	c->telefono = t;

}

void EscribirContacto(Contacto c) {

	printf("Nombre %s Teléfono: %ld", c.nombre, c.telefono);

}

void CambiarTelefono(Contacto *c, long nt) {

	c->telefono = nt;

}

main (){

	Contacto c1;

	CrearContacto($c1, "Pepito", 1111);
	EscribirContacto(c1);
	CambiarTelefono(&c1, 22222);

}