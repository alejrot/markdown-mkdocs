---
tags:
  - HTML
  # - JavaScript
  # - CSS
  - YAML
  - MkDocs
  - Python
#   - Docker
#   - Podman
  - Markdown
#   - TypeScript
  # - CSV
  - Bash
---


# Imágenes


MkDocs soporta por defecto el renderizado de imágenes y agrega opciones para el renderizado de imágenes para los documentos MarkDown: alinear imágenes, agregar subtítulos a las imágenes y la "Carga perezosa".


## Configuración

Estas opciones se agregan habilitando las siguientes extensiones en el archivo de configuración:


``` yaml title="habilitar extras para imágenes"        
# "mkdocs.yml"
markdown_extensions:
  - attr_list
  - md_in_html
```

!!! tip "Imágenes externas"

    Habilitando el plugin `privacy` se ordena al framework a guardar en el servidor una copia local de cada imagen remota a la que se haya asignado un enlace. De esta manera no es necesario agregar dichas imágenes al repositorio del proyecto, evitando desperdiciar almacenamiento al tiempo que las imágenes se pueden actualizar con mayor facilidad.

    ``` yaml title="habilitar copia local de imágenes"        
    # "mkdocs.yml"
    plugins:
      - privacy
    ```

    Más sobre el plugin privacy: [Privacidad de datos](../setup/privacidad_datos.md#plugin-privacy)  



## GLightBox

Este plugin permite abrir las imágenes en un carrousel y hacer zoom sobre ellas. No viene isntalado ni en el paquete de MkDocs ni en su imagen de contenedor, por ello requiere ser instalado:

```bash title="GLightBox - Instalación "
pip install mkdocs-glightbox
```

Para habilitarse debe agregarse a la lista de plugins dentro del archivo de configuración:

``` yaml title="GLightBox - Habilitación"        
# "mkdocs.yml"
plugins:
  - glightbox
```


El plugin afecta a la visualización de todas las imágenes de forma predeterminada; sin embargo el comportamiento del plugin es configurable tanto desde el archivo de configuración como desde los documentos y los enlaces a imágenes.






## Uso

### Alineación


Al enlace de la imagen se le puede asignar la alineación respecto a la página con la propiedad `align`.

Ejemplo aplicado: dos imágenes remotas de PicSum


```md title="Imágenes con alineación" hl_lines="3 4"
<div class="grid" markdown>

![Imagen de Picsum Nº3](https://picsum.photos/256/256?2){align=left}
![Imagen de Picsum Nº4](https://picsum.photos/256/256?3){align=right}   

</div>
```



<div class="grid" markdown>

![Imagen de Picsum Nº3](https://picsum.photos/256/256?2){align=left}
![Imagen de Picsum Nº4](https://picsum.photos/256/256?3){align=right}

</div>


Hay dos opciones implementadas: izquierda (`left`) y  derecha (`right`). Ambas alineaciones  habilitan el aprovechamiento del espacio vacío con otos contenidos: párrafos, otras imágenes, etc. Para anular el reparto del espacio se puede usar la etiqueta `<div class="grid" markdown>` y `</div>` tal como se mostró en el ejemplo previo.



### Pie de foto (*caption*)


Con ayuda de la etiqueta `<figure>` de HTML se puede centrar la imagen en la página y agregando la etiqueta `<figcaption>` se le puede agregar el pie de página o *caption*

```md title="Imágenes con alineación" hl_lines="3 4"
<figure markdown="span">
    ![Imagen de Picsum Nº5](https://picsum.photos/256/256?4){width=256}
  <figcaption>Pie de foto</figcaption>
</figure>
```

El resultado es el siguiente:

<figure markdown="span">
    ![Imagen de Picsum Nº5](https://picsum.photos/256/256?4){width=256}
  <figcaption>Pie de foto</figcaption>
</figure>


### Lazy-Loading

La "carga perezosa" o *lazy-loading* se habilita agregando una propiedad a los enlaces de imágenes:

```md title="Imágenes con carga perezosa" 
![Imagen de Picsum Nº5](https://picsum.photos/256/256?4){loading=lazy}
``` 



### Imágenes alternativas (por tema)

Se soportan enlaces a imágenes alternativas agregando las propiedades `only-light` y `only-dark` al final de las rutas de imagen.

```md title="Imágenes alternativas" 
![Imagen de Picsum Nº3](https://picsum.photos/256/256?2#only-light)
![Imagen de Picsum Nº4](https://picsum.photos/256/256?3#only-dark)  
``` 

Para probarlo, cambiar de tema para ver la imagen alternativa:

![Imagen de Picsum Nº3](https://picsum.photos/256/256?2#only-light)
![Imagen de Picsum Nº4](https://picsum.photos/256/256?3#only-dark)



## Referencias

[Página oficial de Material for MkDocs- Imágenes](https://squidfunk.github.io/mkdocs-material/reference/images/)

[Página oficial de GLightBox](https://blueswen.github.io/mkdocs-glightbox/)
