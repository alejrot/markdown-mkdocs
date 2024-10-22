---
# social:
#   cards: true
tags:
#   - HTML
#   - JavaScript
  # - CSS
  - YAML
#   - MkDocs
  - Python
#   - Docker
#   - Podman
  # - Markdown
#   - TypeScript
  # - CSV
  - Bash
---


# RSS

MkDocs permite incluir un agregador RSS para facilitar las notificaciones a posibles lectores cada vez que se agregue contenido al [blog del proyecto](blog.md).

## Instalación

Se necesita un complemento externo para que funcione el agregador RSS:

```bash title="RSS - instalación"
pip install mkdocs-rss-plugin
```

## Habilitación

El agregador debe habilitarse desde el archivo de configuración YAML:

```yaml title="RSS - Habilitación"
# archivo "mkdocs.yml"
plugins:
    - ...
    - rss:
        enabled: true                 # habilitado por defecto
        match_path: "blog/posts/.*"   # ruta de los posts
        date_from_meta:
          as_creation: date.created
          as_update: date.updated
```
!!! tip "Renderizado en local"
    El renderizado del archivo XML resultante puede llevar mucho tiempo adicional. 
    Para minimizar este problema en entornos locales se puede deshabilitar el plugin manualmente. 
<!-- 
Otra alternativa es utilizar una variable de entorno para hacer el deploy local. 
-->


!!! warning "Campos obligatorios y caracteres permitidos"

    El plugin exige configurar correctamente los campos `#!yaml site_name`, 
    `#!yaml site_url` y `#!yaml site_description` 
    para generar el documento XML correctamente.

    Asimismo se debe tener cuidado con el uso de caracteres reservados por el protocolo HTTP 
    (`&`, `!`, `=`, etc) 
    porque se puede dar lugar a la creación de un archivo XML mal renderizado.

    Ejemplo: 
    `#!yaml site_name: MarkDown & MkDocs` da error,
    en tanto que `#!yaml site_name: MarkDown - MkDocs` es correcto.



## Test


El plugin crea un archivo XML llamado `feed_rss_created.xml` que se ubica en la ruta raíz del sitio web. 
Por ejemplo, si se usa el live server la ruta habital será [http://localhost:8000/feed_rss_created.xml](http://localhost:8000/feed_rss_created.xml).





## Referencias


[Engagement and Dissemination](https://squidfunk.github.io/mkdocs-material/tutorials/blogs/engage/)


[Setting up a blog](https://squidfunk.github.io/mkdocs-material/setup/setting-up-a-blog/?h=rss#rss)