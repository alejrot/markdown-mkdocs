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
  # - MarkDown
#   - TypeScript
  # - CSV
---


# Blog


MkDocs da soporte a la creación de un blog interno por cada proyecto. Las entradas o *posts* se escriben en formato MarkDown.


## Configuracion


### Habilitación


El blog debe habilitarse para su uso:

```yaml title="Blogs - Habilitación"
# archivo "mkdocs.yml"
plugins:
  - blog        # Habilitacion
```

Al realizar el *deploy* se crea la carpeta `blog` de manera automática.
La estructura de archivos es la siguiente:

```bash title="Blogs - Organizacion de archivos"
.  # ruta raiz del proyecto
├─ docs/
│  └─ blog/
│     ├─ posts/
│     └─ index.md
└─ mkdocs.yml
```

El indice `index.md` se crea por si mismo y habitualmente no es necesario modificarlo.

Las entradas del blog se cargan adentro de la carpeta `posts`.

Si se necesita modificar la estructura de archivos del blog se modifican los campos `blog_dir` y `post_dir`

```yaml title="Blogs - Organizacion interna"
# archivo "mkdocs.yml"
plugins:
  - blog:
    enabled: true       # habilitacion manual ('true' por defecto)
    blog_dir: blog      # carpeta del blog (ruta relativa a la carpeta 'docs')
    post_dir: "{blog}/posts"  # carpeta de los artículos
```


### Opciones de navegación


Hay varias opciones personalizables de la navegación por el blog.

Habilitando la opción `navigation.indexes` se previene la repetición del enlace al blog:

<!-- ```yaml title="Blogs - Navegación" hl_lines="4 10 15-16" -->
```yaml title="Navegación - Indice único" 
# archivo "mkdocs.yml"
theme:
  features:
    - navigation.indexes    # Previene el duplicado del indice de blog
```

La barra de contenidos se habilita con la propiedad `blog_toc`. Ésta se ubicará a la derecha del post y se cargará con los títulos de cada post disponible. 

```yaml title="Navegación - Barra de contenido"
plugins:
  - blog:
    # barra de navegación derecha
    blog_toc: true      # Genera una barra  con los títulos 
```

Finalmente, a la entrada del blog se lo puede renombrar dentro de la propiedad `nav`:

```yaml title="Blogs - Navegación" hl_lines="4 10 15-16"
nav:
  - ...
  - Mi Blog:            # agregado del blog al menu de navegacion
    - blog/index.md     # ubicacion del indice
```
Este enlace aparecerá también en la barra de menú como una pestaña, si es que ésta está habilitada. 
[Más sobre las pestañas](navegacion.md#pestañas-de-contenido).

### Fechas

Las fechas asignadas a los posts.

```yaml title="Configuracion de fechas"
# archivo "mkdocs.yml"
plugins:
  - blog:
    # formato de visualización de fecha
    post_date_format: full
    # formato de la URL del post
    post_url_date_format: yyyy
    post_url_format: "{date}/{slug}"
```

Hay varios formatos de visualización disponibles para la visualización de la fecha de los posts:

|Formato de visualización| Ejemplo|
|:---|:----|
|`short`| 17/9/24 |
|`medium`| 17 sept 2024 |
|`long`| 17 de septiembre de 2024 |
|`full`|martes, 17 de septiembre de 2024 |


Las URLs pueden configurarse para que la fecha aparezca como parte del *path*. 
Formatos:

|Formato de URL| Resumen|
|:---|:----|
|`yyyy`| año|
|`yyyy/MM`|año y mes|
|`yyyy/MM/dd`|año, mes y día|


!!! tip "Lenguaje del proyecto"

    La configuración global del lenguaje afecta a la presentación del blog, en particular el formato de las fechas.
    Por ello es importante especificar el lenguaje del sitio con la propiedad `language`.
    [Más sobre la configuración de lenguaje](lenguaje.md)



### Sección *Categories*


Esta sección enumera todos los posts organizados en base a las categorías que incluye cada uno.



```yaml title="Seccion Categories - habilitacion"
# archivo "mkdocs.yml"
plugins:
  - blog:
    # Habilitacion
    categories: true              
    # Nombre de seccion
    categories_name:  Categorias  
    # Formato de la URL
    post_url_format: "{categories}/{slug}"
    # máximo nº de categorias en la URL
    post_url_max_categories: 2          
```

Nótese que en este caso el campo `post_url_format` está repetido respecto a la configuración de fechas. 
Hay que elegir un formato para todos los casos.

### Sección *Archive*

Esta sección enumera todas las entradas creadas en base a su fecha de publicación, de la más reciente a la más antigua.

```yaml title="Seccion Archive - habilitacion"
# archivo "mkdocs.yml"
plugins:
  - blog:
    # Habilitacion de seccion
    archive: true    # 'true' por defecto)
    # Formato del menú de navegacion izquierdo
    # nombre de sección
    archive_name: Archivo   
    # formato de URL del post
    archive_url_format: "archivo/{date}"  
```


La sección permtie elegir el formato de la presentación de fechas tanto en el menú de navegación izquierdo como en la URL del post:


<div class="grid" markdown>

```yaml title="Seccion Archive - Organizacion por año"
# archivo "mkdocs.yml"
plugins:
  - blog:
    # Formato del menú de navegacion izquierdo
    archive_date_format: yyyy
    # formato de URL del post
    archive_url_date_format: yyyy

```

```yaml title="Seccion Archive - Organización por mes y año"
# archivo "mkdocs.yml"
plugins:
  - blog:
    # Formato del menú de navegacion izquierdo
    archive_date_format: MMMM yyyy
    # formato de URL del post
    archive_url_date_format: yyyy/MM
```

</div>



### Tiempo de lectura

El tiempo estimado de lectura se indica en la parte superior del post. Éste es visible de forma predeterminada y se estima automáticamente:

```yaml 
# archivo "mkdocs.yml"
plugins:
  - blog:
    # indicador de tiempo visible 
    post_readtime: true             # 'true' por defecto
    # calculo automatico de tiempos de lectura
    post_readtime_words_per_minute: 300    # tasa de lectura estimada para adultos
```

### Borradores

Los posts pueden ser marcados como borradores (*draft*), los cuales tendrán su visibilidad condicionada por la configuración.


```yaml title="Configuracion de borradores"
# archivo "mkdocs.yml"
plugins:
  - blog:
    draft: true                     # habilitacion de borradores ('true' por defecto)
    draft_on_serve: false           # borradores disponibles en preview ('true' por defecto)
    draft_if_future_date: true      # si la fecha del post es futura se considera borrador
```

### Extractos (*excerpt*)


Con los extractos se puede reducir el contenido a incluir en el índice del blog, limitando tanto el texto como los autores y las categorías del post.

```yaml title="Configuracion de extractos" hl_lines="5 10"
# archivo "mkdocs.yml"
plugins:
  - blog:
      # separador de resumen - cuerpo de cada post
      post_excerpt: required    # por defecto: 'optional'
      # Truncamiento de categorías y de autores en el resumen
      post_excerpt_max_categories: 2  
      post_excerpt_max_authors: 2 
      # seecuencia delimitadora
      post_excerpt_separator: <!-- more -->
```

Con ayuda de la secuencia de delimitación se puede separar la introducción de las entradas del post del resto del contenido:

``` md  title="Uso de extractos" hl_lines="5"
# Titulo

Párrafo introductorio

<!-- more -->

Resto del contenido
```

De esta forma MkDocs renderizará el índice de manera de mostrar sólo el título y la introducción de cada artículo y a continuación un enlace con la leyenda "seguir leyendo" o similar. 




### Declaración de autores

Los autores se registran en un archivo YAML oculto llamamdo `.authors.yml` al lado del archivo `index.md`


```bash hl_lines="6" title="Archivo de autores - Ubicación"
.
├─ docs/
│  └─ blog/
│     ├─ posts/
│     ├─ index.md
│     └─ .authors.yml
└─ mkdocs.yml
```

Dentro del archivo de autores se enumeran todos los autores autorizados mediante un apodo o diminutivo y cada uno de ellos debe de disponer de tres datos: 

- nombre, sea éste real o seudónimo;
- descripción (típicamente su rol en el proyecto);
- avatar, el cual puuede ser una imagen local o remota.

``` yaml title="Archivo de autores - Contenido"
# archivo ".authors.yml"
authors:
  Yo:                         # apodo
    name: Yo                    # nombre o seudónimo
    description: Creador        # rol en el proyecto
    avatar: blog/avatar.jpg    # ruta local (desde carpeta 'docs')

```




## Uso 
 
Las opciones de cada posteo se configuran en el encabezamiento de cada archivo en forma de metadata.
[Maś sobre los encabezamientos](../referencia/headers.md#uso-de-headers)


### Autores

```yaml
---
authors:
  - Yo      # apodo
---
```

!!! tip "Posts anónimos"

    No es obligatorio asignar un autor o autores a cada post. De hecho estos pueden ser anónimos.


!!! warning "Autores no registrados"

    Si el autor de un post no está registrado en el archivo `.authors.yml` entonces MkDocs dará error e interrumpirá el renderizado.



### Categorías

A los posts se los puede clasificar por categorías, las cuales se agregan en la metadata. 


```yaml
---
categories:
  - YAML
  - MarkDown
  - MkDocs
---
```

A diferencia de los autores, no es necesario declarar las categorías usadas en archivos de configuración.


### Fechas

Las fechas se enumeran al comienzo del documento:


<div class="grid" markdown>

```yaml title="Fecha simple"
---
date: 2024-01-31


---
```

```yaml title="Fechas de creación y modificación"
---
date:
  created: 2024-01-31 
  updated: 2024-02-01
---
```

</div>

### Borradores (*draft*)

Los posteos borradores tienen marcadores propios y pueden tener visibilidad reducida. El post se clasifica como borrador con el campo `draft`:


```yaml title="Declaracion de borrador"
---
draft: true
---
```





### Tiempo de lectura

El indicador de tiempo de lectura se puede forzar a un valor específico con el campo `readtime`: 

```yaml title="Tiempo de lectura"
---
readtime: 15
---
```


###  Acortamiento de rutas (*slug*)



El `slug` reescribe de forma forzada el final de la ruta del post, permitiendo acortar o personalizar la URL del articulo.

```yaml title="Slug del post"
---
slug: ruta-reducida
---
```

### Tarjetas (*cards*)


El blog de MkDocs permite que sus posts tengan sus propias tarjetas de miniatura. Estas se adjuntan automaticamente en metadatos.

```yaml title="Card del post"
---
social:
  cards: true
---
```

Las tarjetas deben ser habilitadas previamente para su uso.


## Referencias

[Sitio oficial - Blogs](https://squidfunk.github.io/mkdocs-material/plugins/blog/)