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
#   - Bash
---



# Listas


MkDocs renderiza las listas y viñetas de forma predeterminada. Además permite el uso de listas de definiciones y de listas de tareas, las cuales se muestran a continuación.


## Habilitación

Las listas de definiciones y las listas de tareas requieren habilitación para ser usadas: 

``` yaml title="Habilitación de listas especiales"
# "mkdocs.yml"
markdown_extensions:
  - def_list
  - pymdownx.tasklist:
      custom_checkbox: true
```


## Listas de definiciones

Las listas de definiciones son una forma atractiva de ordenar contenido como si fueran diccionarios.

```md title="Listas de definiciones"
`clase`
:   Es una "plantilla" que sirve para crear datos, los cuales tendrán una serie de variables y datos internos predefinidos llamados **atributos** y una serie de funciones hechas a medida llamadas **métodos**.

`instancia de clase`
:   Es cualquier objeto creado a partir de una *clase*, recibiendo su estructura interna y sus funcionalidades agregadas.
```


Resultado:

`clase`
:   Es una "plantilla" que sirve para crear datos, los cuales tendrán una serie de variables y datos internos predefinidos llamados **atributos** y una serie de funciones hechas a medida llamadas **métodos**.

`instancia de clase`
:   Es cualquier objeto creado a partir de una *clase*, recibiendo su estructura interna y sus funcionalidades agregadas.


## Listas de tareas

Combinando las secuencias `[x]` y `[ ]` con los items de lista se crean checkboxes para cada item de la lista.

```md title="Lista de tareas"
- [x] Paso 1
- [ ] Paso 2
    - [x] Condicion 1
    - [x] Condicion 2
    - [ ] Condicion 3
    - [x] Condicion 4
- [ ] Paso 3
```

Resultado:

- [x] Paso 1
- [ ] Paso 2
    - [x] Condicion 1
    - [x] Condicion 2
    - [ ] Condicion 3
    - [x] Condicion 4
- [ ] Paso 3