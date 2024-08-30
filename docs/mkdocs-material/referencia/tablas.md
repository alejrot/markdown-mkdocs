---
tags:
#   - HTML5
#   - JavaScript
  # - CSS
  - YAML
  - MkDocs
#   - Python
#   - Docker
#   - Podman
  - MarkDown
#   - TypeScript
  - CSV
---


# Tablas


MkDocs habilita el uso de tablas por defecto y usa la notación estandar de MarkDown.


## Configuración

Por las dudas, agregar la extensión de tabals al archivo de configuración

```yaml title="Tablas - habilitación (redundante)"
# 'mkdocs.yml'
markdown_extensions:
  - tables
```



## Tablas ordenables

Se admite la posibilidad de crear tablas ordenables con ayuda del plugin Tablesort:


```yaml title="Tablas ordenables - habilitación"
# 'mkdocs.yml'
extra_javascript:
  - https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js                             # plugin remoto
  - javascripts/tablesort.js        # archivo JS local
```

Se requiere crear un archivo JavaScript adicional:

```js title="Tablas ordenables - archivo tablesort.js"
document$.subscribe(function() {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})
```


## Importar tablas desde archivo


MkDocs puede leer data desde archivos CSV para renderizarla sobre la página.

Requiere instalar el paquete `mkdocs-table-reader-plugin`:

```bash title="Tabla en archivo - Instalación"
pip install mkdocs-table-reader-plugin
```

Luego debe habilitarse el plugin desde el archivo YML:

```yaml title="Tabla en archivo - Habilitación"
# 'mkdocs.yml'
plugins:
  - search
  - table-reader
```
Por último, el formato de lectura desde MarkDown es el siguiente:

```md title="Tabla en archivo - Lectura"
{{ read_csv('archivo_datos.csv ') }}
```


!!! example "Ejemplo lectura"

    ```csv title="tabla.csv - archivo"
    columna 1, columna 2
    0,5
    1,3
    2,2
    3,8
    ```

    ```md title="tabla.csv - Lectura"
    {{ read_csv('   hola.csv ') }}
    ```


!!! warning "Renderizado automatico"

    Este plugin, al habilitarse, intenta renderizar incluso el contenido de los **bloques de código**.


## Referencias

[Documentación oficial - Data Tables](https://squidfunk.github.io/mkdocs-material/reference/data-tables/)

Documentación del plugin: [mkdocs-table-reader-plugin ](https://timvink.github.io/mkdocs-table-reader-plugin/)