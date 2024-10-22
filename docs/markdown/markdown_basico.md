---
tags:
  - HTML5
  # - JavaScript
  - CSS
#   - YAML
#   - MkDocs
#   - Python
#   - Docker
#   - Podman
  - MarkDown
#   - TypeScript
  # - CSV
#   - Bash
---






## Líneas de División

Se pueden crear lineas de división con una serie asteriscos, guiones y guiones bajos:

```md
---     # triple guion
***     # triple asterisco
___     # triple guion bajo
```

Todas estas opciones dan como resultado una línea horizontal que va de lado a lado de la pantalla:

---     
  




<!-- 


## Remarcado de texto

El marcado de texto se realiza rodendo el texto con símbolos o secuencias específicos. Opciones


|Caracteres| Efecto |
|:---|:---|
|`*`| Cursiva (*italic*)|
|`**`|Negrita (*bold*)|
|`***`|Negrita y Cursiva|
|`~~`|Tachado (*strike*)|
|\`|Código|

Ejemplos de uso:

```
*Texto en cursiva*  
**Texto en negrita**  
***Texto en cursiva y negrita***  
~~Texto tachado~~  
`Texto de código`  
```

*Texto en cursiva*  
**Texto en negrita**  
***Texto en cursiva y negrita***
~~Texto tachado~~  
`Texto de código`  

El uso de asteriscos puede reemplazarse por guiones bajos; sin embargo esta opción es menos versátil.


|Caracteres| Efecto |
|:---|:---|
|`_`| Cursiva (*italic*)|
|`__`|Negrita (*bold*)|
|`___`|Negrita y Cursiva|

Ejemplos:
```
_Texto en cursiva_
__Texto en negrita__
___Texto en cursiva y negrita___

```

Para tachar rodear con dos virguillas seguidas (~):
~~Este texto está tachado.~~




## Texto en color

MarkDown **no incluye por sí mismo** opciones de color, sin embargo algunos lectores de MarkDown aceptan el coloreo de texto insertando código HTML o propiedades CSS. Algunas opciones posibles:

### Insertando código HTML y CSS:

Ejemplos:
```html
Markdown con <font color='red'>Texto en *rojo*</font>
```
Resultado: Markdown con <font color='red'>Texto en *rojo*</font>
```html
Markdown con <span style="color:green">algo de texto en *verde*</span>.
```
Resultado: Markdown con <span style="color:green">algo de texto en *verde*</span>.

### Estilos con código CSS:

Se crean etiquetas personalizadas  de HTML para rodear el texto a colorear. 

Por ejemplo, se puede insertar un bloque de CSS para definir nuevas etiquetas que asignarán estilos:
```css
<style>
r { color: Red } 
o { color: Orange }
g { color: Green }
Y { background: Yellow }
```
Y se aplican al texto con la notación de HTML:
```html
</style>
<r>ROJO</r>
<o>VERDE</o> 
<g>NARANJA</g> 
<Y><r>remarcado</r></Y> 
```
El resultado es:
<style>
r { color: Red } 
o { color: Orange }
g { color: Green }
Y { background: Yellow }
</style>
<r>ROJO</r>
<o>VERDE</o> 
<g>NARANJA</g> 
<Y><r>remarcado</r></Y>   

 -->



<!-- 


## Listas ordenadas

Las listas se crean con un número y un punto al comienzo de cada item. Si se agrega tabulado adelante de un ítem entonces éste pasa a ser parte de una sublista.

```md
1. Primero
2. Segundo
3. Tercero
    1. Subitem 1
    1. Subitem 2
        1. Extra 2
        1. Extra 2
        1. Extra 3
1. Cuarto
```
Resultado:  

1. Primero  
2. Segundo  
3. Tercero  
    1. Subitem 1
    1. Subitem 2
        1. Extra 2
        1. Extra 2
        1. Extra 3
1. Cuarto  

Nótese que Markdown corrige automáticamente los números de listas mal asignados. Además asigna distintos caracteres para cada jerarquía: primero números, luego letras minúsculas y por último números romanos.



## Viñetas (listas no ordenadas)
Las viñetas se crean con guiones al comienzo de cada item. Se permitecrear sublistas mediante indentación.
```md
- Primero
- Segundo
    - Subitem 1
    - Subitem 2
        - extra 1 
        - extra 2
- Tercero
```
Resultado:

- Primero
- Segundo
    - Subitem 1
    - Subitem 2
        - extra 1 
        - extra 2
- Tercero -->


<!-- 
## Tablas 

El maquetado de las tablas se realiza con barras verticales (`|`) para delimitar las columnas, y al menos tres guiones (`---`)  para delimitar los encabezamientos de tabla

```md
| Columna 1 | Columna 2 | Columna 3 |
|:------ | :-------:| ------:|
| A      | $\alpha$ |  1     |
| B      | $\beta$  |  2     |
| C      | $\gamma$ |  3     |
```
Así se ve la tabla creada:

| Columna 1 | Columna 2 | Columna 3 |
|:------ | :-------:| ------:|
| A      | $\alpha$ |  1     |
| B      | $\beta$  |  2     |
| C      | $\gamma$ |  3     |

El uso de los dos puntos (**:**) en los lados de los guiones bajos en la segunda fila es **opcional**. Éste indica la alineacion de los elementos de la columna:

|Uso dos puntos| Alineación contenido|
|-----|----|
|`---` (sin puntos) |Izquierda (predeterminado) |
|`:---` |Izquierda  |
|`---:` |Derecha    |
|`:---:`|Centrado   |

 -->


## Citas

Se hacen con el corchete triangular (`>`) al comienzo del texto.
```md
> Wikipedia siempre pide citas.
```

> Wikipedia siempre pide citas.

Se admiten citas anidadas usando múltiples corchetes triangulares:

```md
> Texto de cita
>> Texto de subcita
```
> Texto de cita
>> Texto de subcita

## Comentarios

MarkDown acepta el comentado de texto, el cual no será visible al renderizarlo. El formato del comentario es idéntico al que usa HTML:

```md
<!-- Comentario een Markdown -->
```

## Enlaces


### Links simples

Los intérpretes de MarkDown incluyen renderizado de links, de modo de poder clickearlos:

```md
<!-- URLs -->
<https://www.mi_url.org>

<!-- correo -->
<yo@miserver.com>
```

Resultado:

<!-- URLs -->
<https://www.mi_url.org>

<!-- correo -->
<yo@miserver.com>



### Links formateados

Los links formateados consisten en un texto descriptivo rodeado por corchetes seguido de un enlace con la ruta de destino:

```md title="Enlaces formateados"
[Texto descriptivo](ruta_enlace)
```

Una alternativa para crear links consiste en asignar un número o secuencia entre corchetes (`[]`)y asignarle la ruta a posteriori:


```md title="Enlaces formateados"
[Texto descriptivo Nº1][1]
[Texto descriptivo Nº2][2]

[1]: ruta_enlace_1
[2]: ruta_enlace_2
```


### Ir a secciones

Una gran ventaja de los links formateados es la posibilidad de acceder a rutas de archivos internos, secciones del mismo documento, enlaces a otros documentos de MarkDown, etc.

```md title="enlaces relativos"
[Ir a la sección](#heading_codificado)
[Ir a otro archivo y sección](ruta_archivo#heading_codificado)
```

Como ejemplo, se muestran un link al título de esta página y uno a la página principal del proyecto:

```md title="Links a secciones - Ejemplos"
 <!-- Enlace local -->
[**Subir a 'Enlaces'**](#enlaces) 

<!-- Enlace a otro documento -->
[Volver al inicio](../index.md#markdown--mkdocs) 
```

Los enlaces obtenidos son los siguientes:

[**Subir a 'Enlaces'**](#enlaces) 

[**Volver al inicio**](../index.md#markdown--mkdocs) 



### Ir a secciones - tags HTML

Con etiquetas HTML se pueden marcar ubicaciones especificas e ir a ellas con un simple link escrito en MarkDown:


```md title="Links a secciones - tags HTML"
<a name="top"></a>      # Esta etiqueta va en el lugar de destino
...

[Subir al inicio](#top) # Enlace al destino
```


De esta forma, haciendo etiquetas con distintos nombres se pueden implementar saltos a lugares arbitrarios del documento.









## Imágenes 

MarkDown permite mostrar imágenes tanto locales como remotas.

Para mostrar las imágenes hay dos opciones disponibles:
```md
<!-- Formato MD -->
![Descripción de la imagen](ruta_imagen)

<!-- Formato HTML -->
<image src='ruta_imagen' alt="Descripción de la imagen">
```

Ejemplo: imagen remota aleatoria desde Picsum
```md
![Imagen de Picsum](https://picsum.photos/256/256?0)
```
![Imagen de Picsum](https://picsum.photos/256/256?0)


<!-- # Imagenes con enlace -->

Las imágenes pueden traer integrado un enlace. Para ello, los corchetes del enlace rodean el link completo de la imagen.

```md 
[![Descripción imagen](ruta_imagen)](ruta_enlace)
```

Ejemplo: imagen remota aleatoria desde Picsum (con enlace)

```md 
[![Imagen de Picsum](https://picsum.photos/256/256?1)](https://picsum.photos/)
```


[![Imagen de Picsum](https://picsum.photos/256/256?1)](https://picsum.photos/)





## Referencias

[Tutorial de MarkDown](https://https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/tutorial-de-markdown/)

[Insertar Imágenes](https://denshub.com/es/hugo-post-insert-image/)


[Markdown Guide - Basic Syntax](https://www.markdownguide.org/basic-syntax/#line-breaks)





[Microsoft Learn - How to write links](https://learn.microsoft.com/es-es/contribute/content/how-to-write-links)


