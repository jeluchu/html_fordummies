//PROGRAMA EN C++
//AUTOR: JESÚS MARÍA CALDERÓN - GITHUB JELUCHU
//https://github.com/Jeluchu
//Programa que se encarga de decir si un número es par o impar

#include <stdio.h>
#include <stdlib.h>

int main(){

  int numero;

  printf("Número: ");
  scanf(" %i", &numero);

  if(numero % 2 == 0){
     printf("El número %i es par\n", numero);
     printf("Y los pares me gustan\n");
  } else
      printf("¡Impar!");
      printf("Y colorín colorado este cuento se ha acabado\n");

  return EXIT_SUCCESS;

}
