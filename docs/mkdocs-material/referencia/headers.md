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



## Opciones

```md 
---
search:
  <!-- Bonificar página en búsqueda -->
  boost: 2  
  <!-- Excluir página de búsqueda -->
  exclude: true 

hide:
  <!-- Encuestas -->
  - feedback
  <!-- Pie de pagina -->
  - footer
  <!-- Navegacion -->
  - navigation
  - toc
---
```



## Tags de carpetas


Creando un archivo `.meta.yml` dentro de un directorio se configuran las opciones y tags de todos los documentos internos del directorio
