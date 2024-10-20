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
---

# Exportar a PDF


Material for Mkdocs es compatible con el plugin `mkdocs-pdf-export-plugin`, el cual permite exportar el proyecto completo en forma de documentos PDF.


## Instalación

El plugin no viene preinstalado con MkDocs, por ello debe agregarse via PIP:

``` bash title="Instalacion de plugin"
pip install mkdocs-pdf-export-plugin
```

## Configuración

El plugin requiere ser habilitado y configurado para su uso desde el archivo de configuración:

```yaml title="Configuración"
# archivo "mkdocs.yml"
plugins:
  # ... 
  # Exportación a PDF
  - pdf-export:
    verbose: true                      # reporte largo por terminal 
    media_type: print                  # estilo CSS para impresión
    enabled_if_env: ENABLE_PDF_EXPORT  # habilitación condicional por variable de entorno
    combined: true                     # renderizar todas las paginas del  proyecto
```

En esta configuración se especifican varias opciones:

- La opción `verbose` da un reporte extendido sobre el proceso de exportación a PDF;

- La opción `media_type` acomoda los estilos CSS para que el estilo del documento sea compatible con la impresión en papel;

- La habilitación por variable de entorno (`enabled_if_env`) permite ejecutar el plugin únicamente si la variable de entorno elegida 
(en este ejemplo es `ENABLE_PDF_EXPORT` ) 
sea preexistente en el sistema y tenga valor `1`. 
De esta manera se ahorra mucho tiempo y procesamiento en generar los documentos PDF donde éstos no son necesarios, 
por ejemplo en servidores remotos durante el deploy; 

- La opción `combined` unifica todas las páginas del proyecto en un único archivo PDF, 
el cual incluye un índice interno para facilitar la lectura. 
Si se deshabilita esta opción entonces cada página del documento se exportará como un archivo PDF aparte;



<!-- 
!!! critical "Blog"
    El plugin de exportacion de PDF es incompatible con el plugin de blog de Material for MkDocs. 
    Por tanto este último debe ser *deshabilitado* para permitir la creacion del documento. 
 -->


## Uso

La exportación a PDF se realiza durante la construcción del sitio (`build`) y a condición que la variable de entorno ya haya sido creada e inicializada correctamente: 

``` bash title="Crear PDFs"
export ENABLE_PDF_EXPORT=1    
mkdocs build
```

El documento PDF (o los documentos PDF) se crea dentro de la carpeta `site/pdf/`.






## Referencias

[NullSafe Architect - Crea documentación y sitios web estáticos como un PRO con MkDocs](https://www.youtube.com/watch?v=YGg39_zG1fk&t=105s)
