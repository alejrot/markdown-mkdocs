---
tags:
  - HTML5
  # - JavaScript
  # - CSS
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


# Enlaces


Con Markdown se pueden hacer enlaces a contenidos tanto internos como externos al documento,
de modo de poder clickearlos.

## Links simples

<!-- Los intérpretes de MarkDown incluyen renderizado de links, de modo de poder clickearlos: -->

Los enlaces simples muestran la ruta destino en forma de texto. 
Se escriben así:


<div class="grid" markdown>

```md title="Sintaxis de links"
<!-- URLs -->
<https://www.mi_url.org>
<!-- correo -->
<yo@miserver.com>
```

Resultado:  
<https://www.mi_url.org>  
<yo@miserver.com>

</div>


## Links formateados

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

El texto descriptivo puede ser formateado en negrita, cursiva, etc.
como cualquier otro elemento de texto. 


## Navegación por secciones

### Enlaces Markdown

Una gran ventaja de los links formateados es la posibilidad 
de acceder a rutas de archivos internos, 
secciones del mismo documento, 
enlaces a otros documentos de Markdown, etc.

```md title="Links a secciones - Formato"
[Ir a la sección](#heading_codificado)
[Ir a otro archivo y sección](ruta_archivo#heading_codificado)
```

Como ejemplo, se muestran un link al título de esta página y uno a la página principal del proyecto:


<div class="grid" markdown>


```md title="Links a secciones - Ejemplos"
 <!-- Enlace local -->
[**Subir a 'Enlaces'**](#enlaces) 

<!-- Enlace a otro documento -->
[**Volver al inicio**](../index.md#markdown--mkdocs) 
```

Links a secciones:  
[**Subir a 'Enlaces'**](#enlaces)   
[**Volver al inicio**](../index.md#markdown--mkdocs) 

</div>


### Tags HTML

Con etiquetas HTML se pueden marcar ubicaciones especificas e ir a ellas con un simple link escrito en Markdown:


```md title="Links a secciones - tags HTML"
<a name="top"></a>      # Esta etiqueta va en el lugar de destino
...

[Subir al inicio](#top) # Enlace al destino
```


De esta forma, haciendo etiquetas con distintos nombres se pueden implementar saltos a lugares arbitrarios del documento.

