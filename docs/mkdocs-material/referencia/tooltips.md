---
tags:
#   - HTML5
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
---

# Tooltips

Los tooltips son mensajes emergentes que aparecen al colocar el cursor sobre un elemento (*hover*).



## Configuración

Las tooltips se habilitan desde el archivo de configuración:

``` yaml title="Habilitación de tooltips"
# archivo "mkdocs.yml"
markdown_extensions:
  - abbr
  - attr_list
  - pymdownx.snippets


# tooltips mejoradas
theme:
  features:
    - content.tooltips
```

Si se desea habilitar el [glosario](#agregar-glosario) se agrega un directorio al sistema, el cual habitualmente se llama `includes`, y se indica el archivo de glosario: 


``` yaml title="Habilitación de tooltips - con glosario" hl_lines="6-8 18-19"
markdown_extensions:
  - abbr
  - attr_list
  - pymdownx.snippets
  # agregado archivo de glosario
  - pymdownx.snippets:
    auto_append:
      - includes/glosario.md


# tooltips mejoradas
theme:
  features:
    - content.tooltips


# directorio agregado al sistema: watch
watch:
  - includes
```

!!! info "Archivo de glosario"

    En la documentación oficial se recomienda llamar al archivo de glosario `abbreviations.md`.


## Uso


### Enlaces

El mensaje emergente se agrega dentro de los paréntesis, justo al lado del enlace:

``` md  title="Enlaces con tooltips"
[Hover me](https://example.com "Este enlace va a un sitio dummy")
```

Test: [Hover me](https://example.com "Este enlace va a un sitio dummy")



### Iconos

Los íconos también aceptan mensajes emergentes, los cuales se asigan con el campo `title`:

``` md  title="Íconos con tooltips"
:material-information-outline:{ title="Información importante"  .verde}
```

Test: :material-information-outline:{ title="Información importante" .verde}



### Abreviaciones

Las abreviaciones permiten agregar tooltips en todos los párrafos donde se use la secuencia. Esto es muy práctico para asignar definiciones desplegables. Las secuencias detectadas aparecerán subrayadas con línea de puntos.

Ejemplo: palabras **tooltip** y **tooltips** como abreviación.
``` md title="Abreviaciones con tooltips"
*[tooltip]: Es un mensaje emergente que se despliega ante el hover
*[tooltips]: mensajes emergentes que se despliegan con el hover
```

Las abreviaciones definidas en una página son locales, por ello no afectarán el contenido de las otras. Para hacer abreviaciones globales se usa el **glosario**.


*[tooltip]: Es un mensaje emergente que se despliega ante el hover
*[tooltips]: mensajes emergentes que se despliegan con el hover



### Agregar glosario

Las abreviaciones se pueden condensar en un archivo de glosario, el cual permite mayor facilidad de acceso y además se agrega a todas las páginas del proyecto de manera automática.

```md title="Ejemplo - contenido de glosario"
<!-- archivo 'includes/glosario.md' -->
*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium
```


Test: **HTML** , **W3C**


## Referencias

[Sitio oficial - Tooltips](https://squidfunk.github.io/mkdocs-material/reference/tooltips/)

