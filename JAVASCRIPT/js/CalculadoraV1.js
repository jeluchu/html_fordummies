function ObtenerDato1() {

	var miParrafo;
	var miDato;

	miDato = document.getElementById('Dato1');
	miResultado = document.getElementById('Resultado');
	miResultado.innerHTML =
		"El valor es " + miDato.value;

}

function Sumar(){

	var miOperando1,
		miOperando2,
		miResultado,
		valorOperando1,
		valorOperando2,
		valorSuma;

	miOperando1 = document.getElementById('miOperando1');
	miOperando2 = document.getElementById('miOperando2');
	miResultado = document.getElementById('Resultado');
	valorOperando1 = parseInt(miOperando1.value); 
	valorOperando2 = parseInt(miOperando2.value); 
	valorSuma = valorOperando1 + valorOperando2;
	miResultado.innerHTML = valorSuma;
}

function Resta(){

	var miOperando1,
		miOperando2,
		miResultado,
		valorOperando1,
		valorOperando2,
		valorResta;

	miOperando1 = document.getElementById('miOperando1');
	miOperando2 = document.getElementById('miOperando2');
	miResultado = document.getElementById('Resultado');
	valorOperando1 = parseInt(miOperando1.value); 
	valorOperando2 = parseInt(miOperando2.value); 
	valorResta = valorOperando1 - valorOperando2;
	miResultado.innerHTML = valorResta;
}

function Multiplicacion(){

	var miOperando1,
		miOperando2,
		miResultado,
		valorOperando1,
		valorOperando2,
		valorMultiplicacion;

	miOperando1 = document.getElementById('miOperando1');
	miOperando2 = document.getElementById('miOperando2');
	miResultado = document.getElementById('Resultado');
	valorOperando1 = parseInt(miOperando1.value); 
	valorOperando2 = parseInt(miOperando2.value); 
	valorMultiplicacion = valorOperando1 * valorOperando2;
	miResultado.innerHTML = valorMultiplicacion;
}

function Division(){

	var miOperando1,
		miOperando2,
		miResultado,
		valorOperando1,
		valorOperando2,
		valorDivision;

	miOperando1 = document.getElementById('miOperando1');
	miOperando2 = document.getElementById('miOperando2');
	miResultado = document.getElementById('Resultado');
	valorOperando1 = parseInt(miOperando1.value); 
	valorOperando2 = parseInt(miOperando2.value); 
	valorDivision = valorOperando1 * valorOperando2;
	miResultado.innerHTML = valorDivision;
}