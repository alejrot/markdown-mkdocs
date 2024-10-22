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

# Texto


## Párrafos de texto

MarkDown reconoce todo el texto escrito como texto simple
salvo indicacion contraria. 

El texto debe comenzar siempre **sin tabulación ni espacios**,
y tiende a ser agrupado en un único párrafo.
Para terminar un párrafo y comenzar otro hay dos opciones:

- Dos espacios vacios o más al terminar el párrafo y cambiar de linea;
- Intercalar una línea vacía entre un párrafo y el otro. 


!!! tip "Fin de línea simple"

    Si se escriben varios renglones seguidos 
    sin agregar espacios entonces éstos se renderizarán
    uno a continuación del otro.

    Esto puede ser útil para mejorar el seguimiento 
    por parte de git u otros controles de versiones, 
    en caso de usarse.

    ```md title="párrafo previo"
    Si se escriben varios renglones seguidos 
    sin agregar espacios entonces éstos se renderizarán
    uno a continuación del otro.

    Esto puede ser útil para mejorar el seguimiento 
    por parte de git u otros controles de versiones, 
    en caso de usarse.
    ```


## Headings

Los encabezamientos (*headings*) funcionan como títulos y subtítulos del texto, 
permitiendo la división del texto en secciones.
Éstos se marcan con **numerales** (`#`) al comienzo del texto. 
Cuantos más numerales, menos prioridad. 

Ejemplo:

```md title="formato de headings - numerales"
# Titulo
Introducción

## Subtitulo 1
Párrafo seccion #1

## Subtitulo 2
Párrafo seccion #1
```

Se reconocen hasta 6 jerarquías, al igual que en HTML.


|Markdown| Jerarquía |
|:---|:---|
|`# texto heading`| 1  (máxima)|
|`## texto heading`| 2|
|`### texto heading`| 3|
|`#### texto heading`| 4|
|`##### texto heading`| 5|
|`###### texto heading`| 6  (mínima)|


Una forma alternativa de crear tiulos y subtitulos es poner triple guion o triple signo igual justo debajo del texto de encabezamiento:

```md title="formato de headings - subrayado"
Titulo
===

Subtitulo
---
```
Sin embargo, este método permite menos jerarquías que los numerales 
y es menos intuitivo en la escritura.
