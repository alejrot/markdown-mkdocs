# Lenguajes


## Idioma predefinido

``` yaml title="Idioma predefinido"
# "mkdocs.yml"
theme:
  language: es    # Idioma predefinido
```


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