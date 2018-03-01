## Introducción
Una vez que sabemos la estructura de los documentos de HTML, comenzamos paso a paso a adentrarnos en este lenguaje de marcas. Por eso ahora empezaremos con las etiquetas que se encuentran en la parte del **HEAD** de nuestro documento.

##

### ETIQUETAS EN EL HEAD
#### < COMENTARIOS >
Los comentarios son líneas que el intérprete omite y que utilizan para ayudar a la claridad del código del documento.
```
	<!-- COMENTARIO -->
```
##
#### < TÍTULO >
Define el título del documento que aparecerá en la barra superior del navegador. También aparecerá como nombre al agregar la página a favoritos y se utilizará como índice para los motores de búsqueda.
```
	<title> Mi título </tittle>
```
##
####  < META >
Proporciona información sobre la página que usarán los navegadores. Mediante **"meta"** se pueden especificar distintos tipos de información no visible que el navegador utiliza para identificar la página.
- **CHARSET:**  Juego de caractéres empleado
- **VALORES PERMITIDOS**: UTF-8, ISO-8859-1. Para ello podemos incluirlo del siguiente modo
```
  <meta charset="utf-8"/>
```
 - **NAME**: Especifica valores de la página no visibles, empleados por los motores de búsqueda para indexar la página. Un atributo name se asocia a un atributo content con el valor asociado.
```
  <meta name="nombre" content="valor"/>
```
Valores más usados en name:
> **AUTHOR:** Autor de la página

> **DESCRIPTION:** Descripción de la página

> **KEYWORDS:** Palabras clave que definen la página

>	**GENERATOR:** Tecnología empleada en desarrollo

 - **HTTP-EQUIV**: Cabecera de información de la página. Un atributo http-equiv va asociado a un atributo content.
```
  <meta http-equiv="nombre" content="valor/>
```
Los posibles valores de nombre son:
> **CONTENT-TYPE:** Especifica el juego de caracteres utilizando en el documento
> ```
> (HTML 5 <meta charset="utf-8">)
> <meta http-equiv="content-type"
>             content="text/html; charset="UTF-8"/>
>  ```

> **REFRESH:** Intervalo de tiempo en segundos para la recarga automática de la página
> ```
> <meta http-equiv="refresh" content="3"/>
> ```

> **DEFAULT-STYLE:** Indica la hoja de estilos (CSS), que usará por defecto en el documento
> ```
> <meta http-equiv="default-style" content="NombreDeHoja"/>
>
> <link rel="stylesheet" type="text/css" href="fichero.css" tittle="NombreHoja">
> ```
  ##
  #### < BASE >
  **Especifica la dirección URL** para todas las direcciones relativas exixtentes en el documento. Solo puede haber una etiqueta base en un documento HTML.
  ```
  <base href="RutaRelativa" target="ModoEnlace">
  ```
Dónde:
- **RutaRelativa:** Ruta para los elementos del documento
- **ModoEnlace:** Especifica el modo de apertura de un enlace del documento (**< a >**)
- **_blanck:** Abre el enlace en una ventana o pestaña nueva
- **_parent:** Abre el enlace en el marco padre que lo contiene
- **_self:** Abre el enlace en el mismo documento que lo llama por defecto
- **_top:** Abre el enlace en el cuerpo que contiene al marco
##
#### < LINK >

Define un enlace entre el documento actual y un fichero externo
```
<link href="nombreFichero"
	  rel="tipoFichero"
	  type="tipoFichero"/>
```
##
#### < SCRIPT >
Se utiliza para incluir elementos escritos en un lenguaje de cliente para completar las acciones del código HTML. Se puede incluir tanto en línea o mediante un fichero.
- **En línea**
```
<script type="text/javascript">
		-------------
		-------------
</script>
```
- **Mediante un fichero**
```
<script type="text/javascript"
		src="RutaFichero">
		-------------
		-------------
</script>
```
> RutaFichero: Fichero de código fuente del lenguaje correspondiente (.js)

##
#### < STYLES >
 Se utiliza para definir el estilo que se le aplica a un documento. Se puede indicar de varias maneras:
 - **Inline**
```
<stye type="text/css">
		-------------
		-------------
</style>
```
- **Offine**
```
<link rel="stylesheet"
	  type="text/css"
	  href="RutaFichero">
```
- **Con atributo style de objeto HTML**
```
<p style="CodigoCSS">
		-------------
		-------------
</p>
```
##
  ![Etiquetas](./fotos/fotos.png) 
