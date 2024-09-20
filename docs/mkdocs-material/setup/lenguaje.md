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
  # - MarkDown
#   - TypeScript
  # - CSV
#   - Bash
---



# Lenguajes


## Idioma predefinido

La configuración del lenguaje afecta tanto a la visualización de los datos del sitio web como al SEO al ser publicado. 
Se asigna con la propiedad `language` en el archivo de configuración:

``` yaml title="Idioma predefinido"
# "mkdocs.yml"
theme:
  language: es    # Idioma elegido: español
```

El lenguaje de configuración por defecto es el inglés (`en`) salvo indicación contraria.


## Opciones de idioma

Se habilita el selector de idiomas en la barra principal con el campo `extra`. Se presupone que los archivos de contenido ya están traducidos y ordenados dentro de subcarpetas.

``` yaml title="Idiomas - Inglés y Español"
# "mkdocs.yml"
extra:
  # Idiomas seleccionables
  alternate:
    - name: Cambiar a Español # Mensaje desplegable
      link: /       # ruta relativa al contenido en español (desde `docs/`)
      lang: es      # tag de idioma
    - name: Change to English   # Mensaje desplegable
      link: /en/    # ruta relativa al contenido en inglés (desde `docs/`)
      lang: en      # tag de idioma
```


## Direccionalidad de lectura


La direccionalidad de lectura afecta a la distribución de los componentes gráficos de acuerdo al idioma elegido, para mayor comodidad de lectura. Puede alterarse manualmente con la propiedad `direction`:

``` yaml title="Idiomas - Direccionalidad"
# "mkdocs.yml"
theme:
  direction: ltr
```

Opciones: `ltr` (*left to right*) y `rtl` (*right to let*)



## Referencias

[Sitio oficial - cambio de lenguaje](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/)