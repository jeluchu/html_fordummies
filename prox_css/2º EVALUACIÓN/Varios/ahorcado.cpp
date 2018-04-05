#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>

// Variables que representan los punteros

FILE *F_palabras;

char archivo_ahorcado[100]="/palabrejas/listado.txt";

int palabras_dichas[50]; // Variable donde almaceno las preguntas que voy haciendo
int *p_dichas=&palabras_dichas[0];
int numero_palabras=0;  // Número de preguntas que vamos haciendo



//Función que nos devolvera el archivo y en caso de q no se encuntre saldrá.
FILE* abrir_archivo(FILE *F_archivo, char* p_nombre_archivo, char* modo)
{

    F_archivo=fopen(p_nombre_archivo, modo);

    if(F_archivo==NULL)
    {
        printf("No se encuentran el fichero %s!", p_nombre_archivo);
        exit(-1);

    }

    return(F_archivo);

}
int n_palabras()
{
    char buffer[200];
    int contador=0;

    F_palabras=abrir_archivo(F_palabras, archivo_ahorcado,"rt");

    while(fgets(buffer, 200, F_palabras))
    {
        contador++;
    }

    fclose(F_palabras);

    return(contador);

}
void obten_palabra()
{
    char buffer[200];
    int total_palabras;
    total_palabras=n_palabras();
    int i=(rand()%(total_palabras-numero_palabras))+1;
    int j, x;

    F_palabras=abrir_archivo(F_palabras, archivo_ahorcado,"rt");

    for(j=0; j<i ;j++)
    {
        fgets(buffer, 200, F_palabras);

        for(x=0; x<numero_palabras; x++)
        {
            if(palabras_dichas[x]==j+1)
            {
                i++;
            }
        }

    }

    printf("%s", buffer);

    *p_dichas=i;
    p_dichas++;
    numero_palabras++;  // Sumamos  1 al número de preguntas que hemos hecho

    fclose(F_palabras);

}
void jugar()
{

}
void introduce()
{
    char nueva_palabra[30];
    char buffer[30];
    int opcion, encontrado=0, salir;
    F_palabras=abrir_archivo(F_palabras, archivo_ahorcado, "at");

    do
    {
        do
        {

            encontrado=0;
            printf(" Escriba salir para dejar de introducir elementos\n");
            scanf("%s", nueva_palabra);
            printf("La palabra que quieres introducir es:%sn",nueva_palabra);
            printf("Pulsa 1 si es correcto.n");
            scanf("%d",&opcion);
            if(opcion==1)
            {
                F_palabras=abrir_archivo(F_palabras, archivo_ahorcado, "rt");
                while(fgets(buffer, 80, F_palabras)!=NULL)
                {
                    if(strncmp(buffer,nueva_palabra,strlen(nueva_palabra))==0)
                    {
                        printf("Esta palabra esta en el registro.n");
                        encontrado=1;

                    }
                }
                fclose(F_palabras);

            }
        }while(encontrado==1);
                F_palabras=abrir_archivo(F_palabras, archivo_ahorcado, "at");
                fprintf(F_palabras,"n%s", nueva_palabra);
                printf("La palabra que has introducido ha sido guardada en el registro correctamenten");

    }while(strncmp(nueva_palabra, "salir", 5)!=0);
    fclose(F_palabras);
}
void instrucciones()
{
    char buffer[100];
    char archivo_instrucciones[100]="/palabrejas/listado.txt";
    FILE *f_instrucciones;
    f_instrucciones=abrir_archivo(f_instrucciones, archivo_instrucciones,"rt");

     while(fgets(buffer, 60, f_instrucciones))
    {
        printf("%s", buffer);
    }
    fclose(f_instrucciones);
}



int main()
{
    int opcion;

    printf("|||||||||||||||||||||||||||||||||||||||||||||||");
    printf("||||||||||||Juego del ahorcado|||||||||||||||||");
    printf("|||||||||||||||||||||||||||||||||||||||||||||||");

    printf("n1. Jugarn");
    printf("2. Introducir nuevas palabrasn");
    printf("3. Instruccionesn");
    scanf("%d",&opcion);

    if(opcion==1)
    {
        obten_palabra();
    }
    else if(opcion==2)
    {
        introduce();
    }
    else if(opcion==3)
    {
        instrucciones();
    }
    else
    {
        printf("Adiosn");
    }
}
