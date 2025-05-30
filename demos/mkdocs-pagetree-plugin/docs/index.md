# Mkdocs Pagetree Plugin


## Intro

Este plugin facilita el renderizado automático de índices de páginas
a partir de la sección `nav` del archivo `mkdocs.yml`
o, en su defecto, del árbol de documentos.


## Instalación


```bash
pip install mkdocs-pagetree-plugin
```

## Habilitación

```yaml
# archivo `mkdocs.yml`
plugins:
  - pagetree
```

## Ejemplo

En este proyecto se creó una sección `nav`
como la que sigue:

```yml
nav:
  - index.md
  - nivel 1:
    - opciones/all.md
    - opciones/siblings.md
    - opciones/subtree.md
    - opciones/children.md
    - nivel 2:
      - opciones/subdirectorio/1.md
      - opciones/subdirectorio/2.md
```

En las [**demás páginas**](sub/all.md) se exploran las opciones de renderizado.


## tags opcionales

Cada documento puede incluir de manera **opcional** los tags de estado `new` y `deprecated`,
los cuales sirven para el filtrado de las páginas.
Sintaxis:

```md 
---
status: deprecated
---
```



## Páginas del plugin

[PyPi.org](https://pypi.org/project/mkdocs-pagetree-plugin/)

[Github Pages - MkDocs Pagetree Plugin](https://tombreit.github.io/mkdocs-pagetree-plugin/)

[GitHub - Repositorio del proyecto](https://github.com/tombreit/mkdocs-pagetree-plugin)