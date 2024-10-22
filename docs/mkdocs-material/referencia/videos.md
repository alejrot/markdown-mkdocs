---
tags:
#   - HTML
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
    # - CSV
  - Bash
---

# Videos






Para agregar el soporte de videos locales se puede usar el plugin `mkdocs-video`.


## Instalación


El plugin no viene instalado sino que debe agregarse para su uso.

``` bash title="Instalacion de plugin"
pip install mkdocs-video
```


## Configuración

La habilitación del plugin se realiza desde el archivo de configuración YAML:

``` yaml title="Habilitación básica"
# archivo "mkdocs.yml"
plugins:
    - mkdocs-video
```

Dentro de la habilitación pueden configurarse algunas opciones como dimensiones de visualización, reproducción automática, etc.


``` yaml title="Habilitación y configuración"
# archivo "mkdocs.yml"
plugins:
    - mkdocs-video:
        is_video: true
        video_type: ogg
        # opciones de reproducción
        video_muted: true
        video_autoplay: false
        video_controls: false
        # estilos CSS
        css_style:
            width: "100%"
            height: "22.172vw"
```


## Uso





### Videos locales


```md title="Video local"
![type:video](ruta_relativa_video)
```


La ruta de archivo local es relativa a la ruta del documento MD.



### Videos remotos


```md title="Video remoto"
![type:video](url_video)
```



No todas las URLs son compatibles. 
Por ejemplo: YouTube no admite visualizaciones desde sitios externos al oficial con la palabra `watch?v=` en su URL. 
En cambio, sí admite visualizaciones si se adapta la ruta con la palabra `embed`.

A continuacion se muestra la equivalencia entre enlaces a varios servidores populares:


|Sitio|enlaces rechazados |enlaces admitidos|
|:----|:---|:----|
|YouTube|https://www.youtube.com/watch?v=id_video|https://www.youtube.com/embed/id_video|
|Vimeo|https://vimeo.com/id_video|https://player.vimeo.com/video/id_video|
|Dailymotion|https://www.dailymotion.com/video/id_video|https://www.dailymotion.com/embed/video/id_video|


### Opciones de enlace


A cada video enlazado se le pueden agregar o modificar algunas propiedades.

Por ejemplo,para ajustar el ancho relativo del vídeo se usa la propiedad `style`:

```md title="Estilo - ancho relativo"
![type:video](video.mp4){: style='width:100%' }
```

Esto equivale a leer la propiedad `style`del enlace HTML:

``` html  title="Estilo - equivalente HTML"
<video style="width: 100%" muted="" controls="" alt="type:video">
   <source src="video.mp4" type="video/mp4">
</video>
```




## Referencias


[PyPi - MkDocs Video](https://pypi.org/project/mkdocs-video/)