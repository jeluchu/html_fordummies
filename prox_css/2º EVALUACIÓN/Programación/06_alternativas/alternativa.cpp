//PROGRAMA EN C++
//AUTOR: JESÚS MARÍA CALDERÓN - GITHUB JELUCHU
//https://github.com/Jeluchu
//

#include <stdio.h>
#include <stdlib.h>

int main(){
 int bit1, bit2;

  printf("Introduce el primer número: ");
  scanf(" %i", &bit1);

  printf("Introduce el segundo número: ");
  scanf(" %i", &bit2);

  printf("\n");

  if(bit2 == 0)
      if(bit1 == 0)
        printf("Esto vale 0\n");
      else
        printf("Esto vale 1\n");
  else
      if(bit1 == 0)
        printf("Esto vale 2\n");
      else
        printf("Esto vale 3\n");

    return EXIT_SUCCESS;
}
