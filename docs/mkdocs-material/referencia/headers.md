# Encabezamientos (*headers*)


Los encabezamientos son componentes auxiliares que permiten configurar opciones de los documentos MD.


## Sintaxis

Los encabezamientos se indican con triple guión `---` antes y después del contenido:

```md linenums="1" title="Headers - Sintaxis" hl_lines="1 3"
---
<!-- Contenido del header -->
---
```

Los encabezamientos deben ser agregados a partir de la **primera línea** del documento, de otra manera no serán reconocidos por MkDocs como tales y por tanto serán mostrados como parte del contenido.


Los encabezamientos siguen la sintaxis YAML.