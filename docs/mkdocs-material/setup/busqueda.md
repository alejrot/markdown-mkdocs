

# Búsqueda


MkDocs proporciona una caja de texto para búsquedas dentro del sitio. Dicha caja aparece en el encabezamiento (*heading*) del sitio.

## Configuración

### Habilitación

El plugin de búsqueda se habilita en la sección de plugins del archivo de configuración:

```yaml title="Caja 'Search' - Habilitación"
# archivo 'mkdocs.yml'
plugins:
    - search
```

### Características


Hay prestaciones adicionales para la búsqueda que afectan al tema de la página:


```yaml title=" Caja 'Search' - Características adicionales"
# archivo 'mkdocs.yml'
theme:
  features:
    - search.suggest      # sugerencias en caja de búsqueda
    - search.highlight  # remarcado en página
    - search.share      # link 'compartir' en caja de búsqueda

```

- `suggest` propone palabras presentes en el texto que coinciden con el patrón de búsqueda ingresado a la caja de texto;
- `highlight` remarca las coincidencias de búsqueda dentro de la página actual;
- `share` crea un enlace clickeable para compartir resultados de búsqueda.




## Uso


### Ponderar (*boost*)


Las páginas pueden resaltarse o penalizarse para aparecer como resultados de búsqueda. Sólo hay que agregar al encabezamiento de la página:
``` md hl_lines="3 4" title="Boosteo de página"
<!-- Header para el archivo MD -->
---
search:
  boost: 2  
---
<!-- Contenido -->
# Titulo
```

Si el valor es mayor a 1 se da prioridad a la página actual, en tanto que si el valor es menor a 1 a ésta se la penaliza en la búsqueda.



### Excluir (*exclude*)


En caso de querer omitir por completo a la página actual de la búsqueda se le agrega al encabezamiento:

``` md hl_lines="3 4" title="Exclusión de página"
<!-- Header para el archivo MD -->
---
search:
  exclude: true 
---
<!-- Contenido -->
# Titulo
```






## Referencias

[Sitio oficial - Configurando la búsqueda del site](https://squidfunk.github.io/mkdocs-material/setup/setting-up-site-search/)



[Sitio oficial - Plugins: search](https://squidfunk.github.io/mkdocs-material/plugins/search/)