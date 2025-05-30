---
tags:
#   - HTML
  # - JavaScript
  # - CSS
  - YAML
  - MkDocs
#   - Python
#   - Docker
#   - Podman
  - Markdown
#   - TypeScript
  # - CSV
    # - CSV
  - Bash
---

# Árbol de documentos - Mkdocs Pagetree Plugin


## Intro

Este plugin facilita el renderizado automático de índices de páginas
a partir de la sección `nav` del archivo `mkdocs.yml`
o, en su defecto, del árbol de documentos.


## Instalación

La instalación se hace desde PIP:

```bash
pip install mkdocs-pagetree-plugin
```

## Habilitación

El plugin se agrega a la sección `plugins`
como un item más.

```yaml 
# archivo `mkdocs.yml`
plugins:
  - pagetree
```

No se necesitan configuraciones extras.


## Uso

Este plugin crea el índice de manera automática en cada lugar que se incluya la secuencia:

``` yaml
{{ pagetree(OPCION) }}
```

Se admiten varias opciones, las cuales son:


### `all`

Esta opción incluye todo el árbol de archivos del proyecto:

`{{` `pagetree(all)` `}}`

### `children`

Esta opción incluye solamente los archivos con menos jerarquía
que el documento actual
y que están incluidos en su misma sección o carpeta:

`{{` `pagetree(children)` `}}`

### `subtree`

Esta opción incluye al documento actual,
a sus archivos aledaños
y a los archivos que están incluidos en su misma sección o carpeta:

`{{` `pagetree(subtree)` `}}`


### `siblings`

Esta opción renderiza solamente los archivos 
aleadaños al documento actual,
sin incluir a este último:

`{{` `pagetree(siblings)` `}}`

No se incluyen páginas con menor jerarquía.



## Tags opcionales

Cada documento puede incluir de manera **opcional** los tags de estado `new` y `deprecated` en su encabezamiento,
los cuales son detectados por el plugin
y sirven para el filtrado de las páginas.

Sintaxis:

```md 
---
status: deprecated
---
```


## Referencias

[PyPi.org](https://pypi.org/project/mkdocs-pagetree-plugin/)

[Github Pages - MkDocs Pagetree Plugin](https://tombreit.github.io/mkdocs-pagetree-plugin/)

[GitHub - Repositorio del proyecto](https://github.com/tombreit/mkdocs-pagetree-plugin)