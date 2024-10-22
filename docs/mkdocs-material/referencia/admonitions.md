---
tags:
#   - HTML
#   - JavaScript
  - CSS
  - YAML
  - MkDocs
#   - Python
#   - Docker
#   - Podman
  - Markdown
#   - TypeScript
---

## Advertencias (*admonitions*)

Las cajas de advertencias (*admonitions*) son una prestación de MkDocs que permite crear recuadros coloridos y con íconos predefinidos para resaltar advertencias, tips, etc.


## Configuración

Las admonitions se habilitan desde el archivo de configuración:

``` yaml
# "mkdocs.yml"
markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences
```

## Formato de admonitions

El formato de las *admonitions* es:


``` md title="Formato de admonitions" hl_lines="1 4 7"
!!! tip "caja fija"
    texto y mas texto.

??? tip "caja colapsada"
    texto y mas texto.

???+ tip "caja desplegada"
    texto y mas texto.
```

!!! tip info  "caja fija"
    Parrafo visible

??? tip  "caja colapsada"
    Párrafo oculto (desplegable).

???+ tip  "caja desplegada"
    Párrafo visible (ocultable).


Las *admonitions* se llaman con  varias secuencias posibles:


|secuencia| opción|
|---|---|
| `!!!` |  caja fija |
| `???` |  caja desplegable (colapsada)  |
| `???+` | caja colapsable (desplegada)  |

## Opciones

Hay varias opciones con íconos y colores diferenciados:

!!! note  "note"
!!! abstract  "abstract"
!!! info  "info"
!!! tip  "tip"
!!! success  "success"
!!! question  "question"
!!! warning  "warning"
!!! failure   "failure"
!!! danger  "danger"
!!! bug  "bug"
!!! example   "example"
!!! quote  "quote"



Los íconos se pueden cambiar en el archivo YML:

``` yaml
# "mkdocs.yml"
theme:
  icon:
    admonition:
      <type>: <icono>
```



## Alineacion

Las adminitions permiten varias alineaciones:

- Si no se indica nada se cubre todo el ancho de página;
- Si se indica `inline` se acomoda a izquierda de los elementos posteriores;
- Si se indica `inline end` se acomoda a derecha;

Ejemplo:
``` md
!!! note inline "note"
!!! abstract inline end "abstract"
!!! info inline  "info"  
!!! tip  inline end "tip"  

<!-- saltos de linea extra para evitar problemas con elementos siguientes -->
<br>
<br>
<br>

```

!!! note inline "note"
!!! abstract inline end "abstract"
!!! info inline  "info"  
!!! tip  inline end "tip"  

<br>
<br>
<br>


## Admonition personalizada

Supóngase que se quiere crear una nueva caja de advertencia con un ícono como el [`grap up arrow` de Bootstrap](https://icons.getbootstrap.com/icons/graph-up-arrow/).


En el archivo de configuración se agrega el archivo CSS que debe contener la información de la nueva advertencia:

```yaml title="Nuevo admonition - habilitación"
# "mkdocs.yml"
extra_css:
  - stylesheets/extra.css # ruta a archivo CSS
```

Dentro del archivo CSS se carga el HTML del icono usado (etiquetas `<svg></svg>`) y se agrega el nombre de la nueva admonition donde corresponda, en este caso se la llamó `graph-up`:


``` css title="Nuevo admonition - Estilos"
/*  Archivo "docs/stylesheets/extra.css" */
:root {
    --md-admonition-icon--graph-up: url('data:image/svg+xml;charset=utf-8, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/></svg>')
}
  .md-typeset .admonition.graph-up,
  .md-typeset details.graph-up {
    border-color: rgb(76, 00, 188);
  }
  .md-typeset .graph-up > .admonition-title,
  .md-typeset .graph-up > summary {
    background-color: rgba(76, 00, 188, 0.1);
  }
  .md-typeset .graph-up > .admonition-title::before,
  .md-typeset .graph-up > summary::before {
    background-color: rgb(76, 00, 188);
    -webkit-mask-image: var(--md-admonition-icon--graph-up);
            mask-image: var(--md-admonition-icon--graph-up);
  }
```

Entonces se puede llamarla por su nombre asignado:
!!! graph-up "graph-up"
    *Mi admonition especial*.