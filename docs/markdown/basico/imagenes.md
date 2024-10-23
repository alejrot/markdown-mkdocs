---
tags:
  - HTML
  # - JavaScript
  # - CSS
#   - YAML
#   - MkDocs
#   - Python
#   - Docker
#   - Podman
  - Markdown
#   - TypeScript
  # - CSV
#   - Bash
---



# Imágenes 

Markdown permite mostrar imágenes tanto locales como remotas.
Si la imagen es local se indica una ruta relativa al documento, 
en tanto que si la imagen es remota se indica la URL de dicha imagen.

A modo de ejemplo se usan imágenes remotas aleatorias
procedentes de [Lorem Picsum](https://picsum.photos/).


## Formato de imagen

Para mostrar las imágenes hay dos opciones disponibles. Una es mediante un enlace de Markdown modificado 
y la otra es mediante una etiqueta HTML:

```md title="Imágenes en Markdown"
<!-- Formato MD -->
![Descripción de la imagen](ruta_imagen)

<!-- Formato HTML -->
<image src='ruta_imagen' alt="Descripción de la imagen">
```

Ambos formatos permiten implementar un texto alternativo en caso que la imagen no esté disponible.

Ejemplo: 

```md 
![Imagen desde Lorem Picsum](https://picsum.photos/256/256?0)
```


![Imagen desde Lorem Picsum](https://picsum.photos/256/256?0)


## Agregar un enlace


Las imágenes pueden traer integrado un enlace. 
Para ello el enlace debe incluir 
el link completo de la imagen.
<!-- 
```md title="Imagen remota - con enlace"
[![Descripción imagen](ruta_imagen)](ruta_enlace)
```
 -->


```md title="Imágenes con enlace"
[![Imagen con enlace](https://picsum.photos/256/256?1)](https://picsum.photos/)
```


[![Imagen con enlace](https://picsum.photos/256/256?1)](https://picsum.photos/)



## Agregar pie de foto

El pie de foto es un mensaje que puede aparecer justo debajo de la imagen o mostrarse de manera emergente al colocar el puntero.
Éste se coloca justo a la derecha del enlace, ambos rodeados por los paréntesis.


``` md title="Imágenes con pie"
![Imagen con pie](https://picsum.photos/256/256?2 "Leyenda de la imagen")
```


![Imagen con pie](https://picsum.photos/256/256?2 "Leyenda de la imagen")



## Agregar marco

El marco se agrega rodeando el enlace a la imagen
con las etiquetas `<kbd>` y `</kbd>`:

``` md  title="Imágenes con marco"
<kbd>
  ![Imagen con marco](https://picsum.photos/256/256?3)
</kbd> 
```
  
<kbd>
  ![Imagen con marco](https://picsum.photos/256/256?3)
</kbd> 






## Referencias

[Markdown Guide.org - Images](https://www.markdownguide.org/basic-syntax/#images-1)


[Den's Hub - Cómo añadir una imagen a un Markdown](https://denshub.com/es/hugo-post-insert-image/)