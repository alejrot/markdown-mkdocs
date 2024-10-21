---
tags:
#   - HTML5
  # - JavaScript
  # - CSS
  - YAML
  - MkDocs
  - Python
#   - Docker
#   - Podman
  # - MarkDown
#   - TypeScript
  # - CSV
  - Bash
---

# Tarjetas Sociales


MkDocs incluye el plugin `social`, el cual permite renderizar tarjetas de presentación para cada página del proyecto. Estas tarjetas serán visibles al compartir enlaces a las páginas, mostrándose como previsualizaciones.


## Instalación


En caso de trabajarse en un entorno local de Python se requiere un paquete adicional para el renderizado de las tarjetas:

```bash title="Instalación"
pip install "mkdocs-material[imaging]"
```
En algunos sistemas pueden requerirse [componentes adicionales](https://squidfunk.github.io/mkdocs-material/plugins/requirements/image-processing/) como *Cairo Graphics* y *pngquant*


!!! tip "Contenedores"
  
    En caso de usarse la imagen oficial de MkDocs no es necesario instalar  estos componentes adicionales.




## Configuración

Las tarjetas necesitan habilitación para su uso:


```yaml
# archivo "mkdocs.yml"
plugins:
  - social
```

Las tarjetas generadas aparecerán en formato PNG dentro de la carpeta `.cache/plugin/social`.


## Opciones

```yaml
# archivo "mkdocs.yml"
plugins:
  - social:
      enabled: !ENV [CI, false]     # habilitacion - con variable de entorno 'CI'
      cards_layout: default/accent  # estilo (unico disponible gratuitamente)
```

La propiedad `enabled` controla la generación de las tarjetas y suele usarse con variables de entorno.

De forma predeterminada se usa el estilo `default/accent`, el cual es el único disponible de forma gratuita.
El color usado para las letras es el color blanco, en tanto que el color de fondo es el asignado como color primario (`primary`) en la configuración de tema.



## Personalización

Se permite modificar tanto el color como la familia de la fuente usada, como así también el color de fondo:

```yaml title="Configuracion - Colores y familia de fuente"
# archivo "mkdocs.yml"
plugins:
  - social:
      cards_layout_options:
        color: "#AAAA00"              # color letras 
        font_family: Ubuntu           # estilo de fuente
        background_color: "#AA0000"   # color fondo
```

Los colores pueden especificarse en tres formatos:

- Hexadecimal - ejemplo: `"#ff1493`   
- Función RGB - ejemplo: `rgb(255, 20, 147)`
- Nombre de color - ejemplo: `deeppink`

## Estilos para Insiders

La versión paga de MkDocs permite múltiples opciones adicionales para el renderizado de las tarjetas sociales:
diferentes *layouts* prearmados,
uso de transparencias e imágenes de fondo,
posibilidad de renderizar *layouts* personalizados,
 etc.





## Referencias



[Material for MkDocs - Basic Social Cards](https://squidfunk.github.io/mkdocs-material/tutorials/social/basic/)

[Material for MkDocs - Built-in Social Plugin](https://squidfunk.github.io/mkdocs-material/plugins/social/)

[Material for MkDocs - Image processing](https://squidfunk.github.io/mkdocs-material/plugins/requirements/image-processing/)