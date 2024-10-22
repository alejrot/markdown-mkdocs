---
tags:
  - HTML5
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



Para mostrar las imágenes hay dos opciones disponibles. Una es mediante un enlace de Markdown modificado 
y la otra es mediante una etiqueta HTML:

```md title="Imágenes en Markdown"
<!-- Formato MD -->
![Descripción de la imagen](ruta_imagen)

<!-- Formato HTML -->
<image src='ruta_imagen' alt="Descripción de la imagen">
```

Si la imagen es local se indica una ruta relativa al documento, 
en tanto que si la imagen es remota se indica la URL de dicha imagen.

Además, ambos formatos permiten implementar un texto alternativo en caso que la imagen no esté disponible.

Ejemplo: imagen remota aleatoria desde [Lorem Picsum](https://picsum.photos/).

```md 
![Imagen desde Lorem Picsum](https://picsum.photos/256/256?0)
```


![Imagen desde Lorem Picsum](https://picsum.photos/256/256?0)


<!-- # Imagenes con enlace -->

Las imágenes pueden traer integrado un enlace. Para ello, los corchetes del enlace rodean el link completo de la imagen.

```md title="Imagen remota - con enlace"
[![Descripción imagen](ruta_imagen)](ruta_enlace)
```

Ejemplo: imagen remota aleatoria desde [Lorem Picsum](https://picsum.photos/) , esta vez con enlace.

```md 
[![Imagen desde Lorem Picsum](https://picsum.photos/256/256?1)](https://picsum.photos/)
```


[![Imagen desde Lorem Picsum](https://picsum.photos/256/256?1)](https://picsum.photos/)



