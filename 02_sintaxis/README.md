## Introducción
En este apartado vamos a comenzar a aprender más acerca de la sintaxis de HTML, así que presta atención para no perderte ni un detalle. Además, podrás ver algunos ejemplos sobre como hacer cada apartado que viene.

##

### ETIQUETAS
Se componen de dos partes
- **Apertura:** De forma general: ```<etiqueta>```. Dentro de una etiqueta de apertura, pueden especificarse atributos entre comillas como:
```<etiqueta atrib1=”valor1” atrib2=”valor2”...>```
- Un **atributo** especifica un parámetro que modifica el comportamiento de la etiqueta.
- **Cierre:** De forma general: ```</etiqueta>```
- **Algunas** etiquetas **no necesitan** etiqueta de **cierre** ya que son autocontenidas.

Una etiqueta puede ser:
- **Vacía:** No contiene elementos dentro de la apertura y cierre. Se utilizan para saltos de línea, las líneas horizontales, etc
```<etiqueta> ó <etiqueta/>```
Como por ejemplo ```<br> ó <br/>```
 - **Contenedoras:** Consta de una etiqueta de apertura y una etiqueta de cierre. Todo lo que se incluye dentro de las etiquetas contenedoras está sujeto al formato indicado por la etiqueta. La mayoría de etiquetas de HTML pueden contener a su vez otras etiquetas que pueden ser vacías o contenedoras.
```
<etiqueta>
	Bloque
</etiqueta>
```
  ##
  ### ATRIBUTOS
Las etiquetas de un documento HTML pueden contener atributos que son **una serie de valores que harán que los efectos que producen las etiquetas varíen,** ya sean colores, alineación, estilos, etc. Los atributos se especifican:
```
<etiqueta atributo1=”valor1"
	  atributo2=”valor2”>
     Bloque de la etiqueta
</etiqueta>
```
Un ejemplo sencillo de esto podríamos decir que sería el siguiente:
```
<p align="center">
	Texto centrado
</p>
```
  ##
  ### CONSIDERACIONES SOBRE HTML
 - No es sensible a mayúsculas/minúsculas en los nombres de etiquetas (case sensitive)
```
<html> =<HTML> = <Html> = <HtML>
```
 - Es importante mantener la anidación correcta de las etiquetas. Cerrar las etiquetas en orden contrario al abierto y utilizar tabulaciones adecuadas.

  ##

  ![Sintaxis](./fotos/foto.png)
  
