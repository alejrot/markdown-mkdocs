---
tags:
#   - HTML
  # - JavaScript
  # - CSS
  - YAML
  - MkDocs
  - Python
  # - Docker
  # - Podman
  # - Markdown
#   - TypeScript
  # - CSV
  - Plugins
---

# Material for Mkdocs



## Instalación

La forma más habitual de instalar este *framework* es via PIP, el gestor de paquetes de Python:

```bash title="Instalación con PIP"
pip install mkdocs-material
```

La segunda opción es instalar desde el repositorio oficial en GitHub
<!-- La tercera opción es instalar desde el repositorio oficial en GitHub -->

```bash title="Instalación desde repositorio oficial"
git clone https://github.com/squidfunk/mkdocs-material.git
pip install -e mkdocs-material
```

!!! tip "Entornos virtuales"

    Se recomienda instalar MkDocs en un entorno virtual para prevenir posibles conflictos con otros paquetes de Python ya instalados.
    Para crear un entorno local en la carpeta de proyecto escribr los comandos:

    ```bash
    # crear entorno local, carpeta oculta 'venv'
    py -m venv .venv    
    # activacion entorno virtual
    source .venv/bin/activate       # sistemas Linux / Mac
    source .venv/Scripts/activate   # sistemas Windows
    ```
    y desde ahí proceder con la instalación de MkDocs.



!!! info "Imágenes y contenedores"

    La tercera alternativa es ejecutar el *framework* 
    mediante el uso de contenedores con ayuda de gestores como Docker o Podman, 
    aunque en este caso los comandos necesarios son algo más complejos. 
    [Ver capítulo de imagenes y contenedores.](contenedores.md)




## Crear proyecto

Mkdocs implementa su propio ejecutable llamado `mkdocs`. Para crear el proyecto se usa el comando `new`:

```bash title="Crear proyecto"
mkdocs new .            # ruta actual
```

### Estructura de archivos

El proyecto creado es un demo muy simple con la siguiente estructura:

<!-- 
```bash title="Estructura de proyecto"
# directorio raiz del proyecto
├─ docs/            # carpeta para documentos
│  └─ index.md      # archivo demo
└─ mkdocs.yml       # archivo configuración
``` 
-->

```bash title="Estructura de proyecto"
📂 .                    # directorio raiz del proyecto
┣━━ 📂 docs             # carpeta para documentos
┃   ┗━━ 📄 index.md     # archivo demo
┗━━ ⚙️ mkdocs.yml       # archivo configuración
``` 

El directorio `docs/` es la ruta predefinida 
para colocar todos los documentos Markdown 
a publicar.

### Archivo de configuracion

El archivo YAML es el que require incorporar todas las configuraciones: 
plugins, datos del sitio, organización interna de documentos, etc. 
Éste comienza casi vacío : 

```yaml title="Archivo de configuración - Estado inicial"
# archivo "mkdocs.yml" 
site_name: My Docs
```
donde la única configuración prearmada es el nombre de sitio que será `My Docs`.

Al configurarlo toma una estructura como la mostrada a continuación:


```yaml title="Archivo de configuración - Sintaxis básica"
# archivo "mkdocs.yml" 

# informacion del sitio
site_name: nombre_sitio
site_description: Una breve descripcion del sitio
site_url: https://url_dominio/nombre_sitio   

# carpeta del sitio
docs_dir: docs/     # valor prefefinido: docs    

# Tema elegido
theme: 
  name: material    # tema predefinido
  ... # opciones de tema
```

### Tema

El tema elegido se reemplaza con el campo `name`. 
Las opciones instaladas son `material` (tema por defecto), 
`mkdocs` (tema original del *framework* MkDocs) 
y 
`readthedocs` (tema alternativo del *framework*).

```yaml title="Archivo de configuración - Elección de tema" hl_lines="4 6"
# archivo "mkdocs.yml" 

# Tema elegido
theme: 
  # tema predefinido
  name: material    
  # temas alternativos
  # name: mkdocs   
  # name: readthedocs    
```




### Menú de navegacion

La sección `nav` describe la organización en secciones , subsecciones  y páginas del proyecto recurriendo a pares clave-valor. 
Cada clave será el texto del índice y cada valor será la ruta relativa del documento destino. 
Combinando ambos MkDocs crea cada link y los muestra en el mismo orden de definición.

```yaml title="Archivo de configuración - Configuracion de navegacion"
# archivo "mkdocs.yml" 

# navegación
nav:
  # nombre y link de documentos internos
  - Pagina 1: ruta_1
  - Pagina 2: ruta_2
  - ...
```

En caso de omitir la sección `nav` MkDocs creará un indexado automático donde leerá los títulos de los documentos internos.

### Extensiones y plugins

Por último, en el archivo de configuración se agregan y configuran extensiones de Markdown, plugins de Python, hojas de estilo CSS, etc:

```yaml title="Archivo de configuración - Extensiones y plugins"
# archivo "mkdocs.yml" 

# extensiones de markdown usadas 
markdown_extensions: 
  - extension-1
  - extension-2
  - ...
    
# hojas de estilo adicionales
extra_css:
  - ruta-css-1
  - ruta-css-2
  - ...

# rutinas JS adicionales
extra_javascript:
  - ruta-js-1
  - ruta-js-2
  - ...

#  componentes y opciones adicionales
extra:
  - extra-1
  - extra-2
  - ...

# plugins de Python habilitados
plugins:
  - plugin_1
  - plugin_2
  - ...
```

Los plugins, las extensiones, etc. 
que están disponibles en este *framework*
se exploran en las siguientes secciones.

!!! warning "Temas y compatibilidad de plugins"

    Algunos plugins y extensiones no son compatibles con todos los temas. 
    Por ello el cambio de tema de MkDocs puede producir errores de publicación sobre proyectos con plugins agregados. 


## Live server

Con fines de desarrollo se dispone de un servidor local disponible con el comando `serve`:

```bash title="Live Server"
mkdocs serve    
```

Por defecto el sitio está disponible en el puerto 8000:

``` http title="Ruta local"
http://127.0.0.1:8000/
http://localhost:8000/
```

El número de puerto se puede cambiar usando la opción `-a`:

```bash title="Live Server - puerto custom"
mkdocs serve -a    0.0.0.0:numero:_puerto   
mkdocs serve -a  localhost:numero:_puerto   
```

Por otra parte, la publicación del sitio de pruebas puede requerir mucho tiempo en caso de que el proyecto sea muy grande. 
En este caso es útil usar la opción `--dirtyreload` la cual renderiza primero la página actual:


```bash title="Live Server - dirty reload"   
mkdocs serve --dirtyreload
```


## Construir sitio

La conversión a sitio estático se realiza con el comando `build`:

```bash title="Construcción de sitio"
mkdocs build    
```

Este comando crea la carpeta `site/` con el contenido listo para publicar en cualquier servidor web.

```bash hl_lines="7-17"
📂 .
┣━━ 📂 .github
┃   ┗━━ 📂 workflows
┃       ┗━━ ⚙️ ci.yml
┣━━ 📂 docs
┃   ┗━━ 📄 index.md
┣━━ 📂 site
┃   ┣━━ 📂 css
┃   ┣━━ 📂 img
┃   ┃   ┣━━ 📄 favicon.ico
┃   ┃   ┗━━ 🖼️ grid.png
┃   ┣━━ 📂 js
┃   ┣━━ 📂 webfonts
┃   ┣━━ 📄 404.html
┃   ┣━━ 📄 index.html
┃   ┣━━ 📄 sitemap.xml
┃   ┗━━ 📄 sitemap.xml.gz
┣━━ ⚙️ .gitlab-ci.yml
┗━━ ⚙️ mkdocs.yml
```




!!! tip "Git"

    En caso de usar **git**, crear el archivo `.gitignore` para prevenir el seguimiento de archivos generables por el framework en el repositorio:

    ```bash title="Archivo gitignore - ruta" hl_lines="2"
    📂 .                    # directorio raiz del proyecto
    ┣━━ ⚙️ .gitignore       # archivo de exclusión
    ┣━━ 📂 docs             # carpeta para documentos
    ┃   ┗━━ 📄 index.md     # archivo demo
    ┗━━ ⚙️ mkdocs.yml       # archivo configuración
    ```

    En el archivo  `.gitignore`  incorporar `site`para prevenir el seguimiento de estos archivos en el repositorio.
    También guardar en él `.cache` para prevenir el seguimiento de objetos creados por los plugins internos.
    Por último también conviene guardar la carpeta `venv` del entorno virtual, en caso de utilizarse.

    ```bash title="Archivo gitignore - contenido" 
    site       
    .cache     
    .venv
    venv
    ```



## Referencias


[Material for MkDocs - Getting started](https://squidfunk.github.io/mkdocs-material/getting-started/)


[Material for MkDocs - Create your site](https://squidfunk.github.io/mkdocs-material/creating-your-site/)


[NullSafe Architect - Crea documentación y sitios web estáticos como un PRO con MkDocs](https://www.youtube.com/watch?v=YGg39_zG1fk&t=105s)
