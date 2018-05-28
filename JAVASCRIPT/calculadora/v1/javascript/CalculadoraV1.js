function ObtenerOperando(idOperando) 
{
	var miOperando;

	miOperando = document.getElementById(idOperando);
	return parseInt(miOperando.value);
}

function Sumar() 
{
	var miResultado;

	miResultado = document.getElementById('Resultado');
	miResultado.innerHTML = ObtenerOperando('Operando1') + ObtenerOperando('Operando2');
}

function Restar() 
{
	var miResultado;

	miResultado = document.getElementById('Resultado');
	miResultado.innerHTML = ObtenerOperando('Operando1') - ObtenerOperando('Operando2');
}

function Multiplicar() 
{
	var miResultado;

	miResultado = document.getElementById('Resultado');
	miResultado.innerHTML = ObtenerOperando('Operando1') * ObtenerOperando('Operando2');
}

function Dividir() 
{
	var miResultado;

	miResultado = document.getElementById('Resultado');
	miResultado.innerHTML = ObtenerOperando('Operando1') / ObtenerOperando('Operando2');
}