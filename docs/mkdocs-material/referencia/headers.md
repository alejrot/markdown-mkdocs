---
title: Headers y Tags

description: Mas de etiquetas, metadata, etc. 

# icon: material/emoticon-happy 

# iconos de estado
# status: new
# status: happy
# status: deprecated


tags:
#   - HTML5
#   - JavaScript
#   - CSS
  - YAML
  - MkDocs
#   - Python
#   - Docker
#   - Podman
  - MarkDown
#   - TypeScript

---

# Encabezamientos y Etiquetas


Los **encabezamientos** (*headers*) son componentes auxiliares que permiten configurar opciones de los documentos MarkDown. Además, permiten la asignación de **etiquetas** (*tags*) que facilitan la búsqueda de contenidos y aparecen enumerados sobre el título de página.


## Configuración

### Habilitar etiquetas

Los tags deben habilitarse para su uso:

``` yaml title="Habilitación de etiquetas"
# "mkdocs.yml"
plugins:
  - tags
```

### Iconos de etiquetas


A cada tag se le puede asignar íconos específicos, para lo cual hace falta un identificador auxiliar en el medio.

``` yaml title="Iconos personalizados" hl_lines="5 7 12"
# "mkdocs.yml"
theme:
  icon:
    tag:
      <identificador>: <icono>
      # icono comodín
      default: <icono_default>


extra:
  tags:
    <tag>: <identificador>
```

Si la etiqueta especificada en el documento no tiene un icono especificado se le asigna una 'X'. Ésta puede reemplazarse con ayuda del campo `default`.


!!! example "Ejemplo: asignación de iconos"

    En este ejemplo, las etiquetas que se usan en los documentos son 'HTML5', 'CSS' y 'JS', y a cada uno se le asigna un ícono representativo.

    ``` yaml title="Iconos HTML, CSS, JS" hl_lines="4-6  11-13"
    theme:
      icon:
        tag:
          html: fontawesome/brands/html5
          js: fontawesome/brands/js
          css:  fontawesome/brands/css3


    extra:
      tags:
        HTML5: html
        JavaScript: js
        CSS: css
    ``` 

### Indice de etiquetas


MkDocs puede crear un índice con todas las etiquetas usadas en el proyecto y las páginas donde aparece cada una especificando un archivo MD al cual puede estar o no vacío. El indice aparece al final del contenido.

``` yaml title="Crear índice de etiquetas" hl_lines="3-4"
# "mkdocs.yml"
plugins:
  - tags:
      tags_file: ruta_archivo_indice.md
``` 

La ruta de archivo debe ser especificada respecto a la carpeta `docs/`.

El archivo de índice elegido puede ser linkeado a la navegación (sección `nav`) sin problemas.



## Uso de headers


### Sintaxis

Los encabezamientos de cada página se indican con triple guión `---` antes y después del contenido y siguen la sintaxis YAML:

```yaml linenums="1" title="Headers - Sintaxis" hl_lines="1 3"
---
<!-- Contenido del header -->
---
```

Los encabezamientos deben ser agregados a partir de la **primera línea** del documento, de otra manera no serán reconocidos por MkDocs como tales y por tanto serán mostrados como parte del contenido.



### Etiquetas de contenido


Las etiquetas se asignan en el *header* bajo el campo `tags`: 

```yaml title="Tags de contenido"
---
tags:
  - HTML5
  - JavaScript
  - CSS
---
```

Los tags incluidos serán visibles justo al comenzar el contenido, arriba del título.


### Etiquetas de estado


Cada página puede tener su propio icono de estado, el cual aparece a la derecha del nombre de sección:

Tres opciones: `new` , `happy` y `deprecated`


``` yaml title="Tags de estado"
---
status: new
---
```




### Icono de página

Cada página puede tener su propio icono de estado, el cual aparece a la izquierda del nombre de sección:

```yaml title="Tags de estado"
---
icon: material/emoticon-happy 
---
```

### Titulo y descripción

El *header* permite agregar o modificar la metadata de la página, cambiando la leyenda de etiqueta


```yaml title="Tags de estado"
---
title: Headers y Tags
description: Mas de etiquetas, metadata del documento, etc. 
---
```


### Configuración de página


En cada página se puede alterar la aparición de elementos de página, como tambien potenciar o degradar de la búsqueda las etiquetas y el contenido del documento.

Aquí hay un ejemplo de uso:


``` yaml title="Configuración de página"
---
# Opciones de configuración
search:
  # Bonificar página en búsqueda 
  boost: 2  
  # Excluir página de búsqueda 
  exclude: true 

# ocultar elementos 
hide:
  # Encuestas 
  - feedback
  # Pie de pagina 
  - footer
  # Navegacion 
  - navigation
  - toc
  # Etiquetas de página 
  - tags
---
```

### Componentes HTML personalizados

Al documento actual se le puede asignar plantillas HTML para agregar o sustituir componentes de la página con ayuda del campo `template`.

```yaml title="Componentes"
---
template: ruta_archivo.html
---
```

El archivo HTML debe estar ubicado en la carpeta indicada en por el campo `custom_dir`, la cual típicamente se llama `overrides`. [Más sobre la personalizacion.](../setup/sobreescritura.md#configuración)



<!-- 
## Tags de carpetas


Creando un archivo `.meta.yml` (archivo oculto) dentro de un directorio se configuran las opciones y tags de todos los documentos internos del directorio.


``` yaml title="archivo de metadata"
# archivo ".meta.yml"
tags:
  - HTML5
  - JavaScript
  - CSS
```

SOLO PARA CLIENTES PREMIUM
 -->



## Referencias

[Pagina oficial - Tags](https://squidfunk.github.io/mkdocs-material/setup/setting-up-tags/)


[Pagina oficial - Referencia](https://squidfunk.github.io/mkdocs-material/reference/)