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

# Configuración general

La configuración del proyecto se realiza
con el archivo `mkdocs.yml`

Éste comienza casi vacío: 

```yaml title="Archivo de configuración - Estado inicial"
# archivo "mkdocs.yml" 
site_name: My Docs
```
donde la única configuración prearmada es el nombre de sitio que será `My Docs`.


En este archivo se incorporan manualmente
todos los detalles de las configuraciones: 
plugins, datos del sitio, organización interna de documentos, etc. 

<!-- 
## Parámetros básicos

Al configurar dicho archivo, éste toma una estructura como la mostrada a continuación:

```yaml title="Archivo de configuración - Sintaxis básica"
# archivo "mkdocs.yml" 

# informacion del sitio
site_name: nombre_sitio
site_description: Una breve descripcion del sitio
site_url: http://dominio_web/path_sitio   # URL completa

# carpeta del sitio
docs_dir: docs/     # (ruta predefinida)   

# Tema elegido y opciones
theme: 
  name: material    # tema elegido
  ... # opciones de tema
``` 
-->


## Parámetros web

Los parámetros que tendrá el sitio al ser publicado deben ser configurados:

```yaml title="Parámetros de sitio online"
# archivo "mkdocs.yml" 
site_name: nombre_sitio
site_description: Una breve descripcion del sitio
site_url: http://dominio_web/path_sitio   # URL completa
```





!!! info "URL local"

    En caso de desplegarse el sitio localmente,
    el live server adaptará la URL a la direccón IP 
    y al número de puerto elegido.


    Por ejemplo, este proyecto está configurado para 
    ser desplegado en GitHub Pages:

    ```yaml title="URL - configuración"
    # archivo "mkdocs.yml" 
    site_url: https://alejrot.github.io/markdown-mkdocs/
    ```

    y al ser utilizado con el live server en el puerto 8000 
    entonces la URL local será:

    ```http title="URL - local"
    http://localhost:8000/markdown-mkdocs/
    http://127.0.0.1:8000/markdown-mkdocs/
    ```


## Ubicación de archivos

La ubicación de archivos predeterminada es la carpeta `docs`.
La ubicación puede cambiarse con el parámetro `docs_dir`:

```yaml title="Directorio de documentos"
# archivo "mkdocs.yml" 
docs_dir: ruta_directorio/        
```

La ruta es relativa  al directorio que contiente el archivo `mkdocs.yml`.


## Tema

La configuración de los aspectos vinculados al tema (estilo general del sitio) se realiza en la sección `theme`

### Nombre 

El tema elegido se especifica con el campo `name`. 
Las opciones instaladas son:

- `mkdocs` (tema original del *framework* MkDocs, 
usado de manera predefinida); 
- `readthedocs` (tema alternativo heredado del *framework* MkDocs);
- `material` (tema agregado). 

=== "Material"

    ```yaml title="Elección de tema" hl_lines="4 5"
    # archivo "mkdocs.yml" 

    # estilo general
    theme: 
      name: material     
    ```

=== "MkDocs"

    ```yaml title="Elección de tema" hl_lines="4 5"
    # archivo "mkdocs.yml" 

    # estilo general
    theme:  
      name: mkdocs   
    ```

=== "ReadTheDocs"

    ```yaml title="Elección de tema" hl_lines="4 5"
    # archivo "mkdocs.yml" 

    # estilo general
    theme:  
      name: readthedocs 
    ```



### Modo

El tema `material` dispone de dos modos predefinidos:
uno claro y otro oscuro.

|Opción | Tema|
|:---:|:---:|
|`default`| tema claro |
|`slate`|tema oscuro|


El valor se especifica dentro de la subsección `palette`:  

=== "modo claro"

    ``` yaml title="Modo fijo" hl_lines="6"
    # "mkdocs.yml"
    theme:
      name: material   
      palette:
        # modo claro (default)
        scheme: default  
    ``` 
=== "modo oscuro"

    ``` yaml title="Modo fijo" hl_lines="6"
    # "mkdocs.yml"
    theme:
      name: material   
      palette:
        # modo oscuro
        scheme: slate   
    ``` 


Para ver opciones de personalización, 
el agregado de un control de modo para el usuario, etc.
ver  la sección [Temas y Colores](../setup/colores_temas.md).





## Menú de navegacion

La sección `nav` describe la organización en secciones , subsecciones  y páginas del proyecto.
Estos elementos serán mostrados en el mismo orden 
en que sean incluidos.


### Agregado manual

Los enlaces a los documentos internos se especifican como una lista de enlaces. 
Cada enlace consta de una ruta al archivo `.md` elegido y puede tener un texto de enlace especificado: 

```yaml title="Configuracion de navegacion - titulo y ruta"
# archivo "mkdocs.yml" 

# navegación
nav:
  # enlaces y links de documentos internos
  - texto enlace 1: ruta_1
  - texto enlace 2: ruta_2
  - ...
```
Las rutas indicadas son relativas al directorio `docs/`.



!!! tip "Documentos no indexados"

    Aquellos elementos no listados en la sección `nav` 
    no aparecerán enumerados en el índice; 
    sin embargo, 
    sí serán publicados dentro del proyecto
    y podrán ser visitados mediante su URL equivalente.


### Títulos como enlaces

No es indispensable asignar un texto de enlace a cada archivo incluido. 
Si dicho texto no se indica
entonces se tomará como texto el título del documento:

```yaml title="Configuracion de navegacion - Títulos como enlaces"
# archivo "mkdocs.yml" 

# navegación
nav:
  # link de documentos internos
  - ruta_1
  - ruta_2
  - ...
```

### Organizacion en secciones

Las secciones se crean como una lista de elementos.
A cada sección se le pone un título y con ayuda de la tabulación se le asignan los elementos internos:

```yaml title="Configuracion de navegacion - Reparto en secciones"
# archivo "mkdocs.yml" 

# navegación
nav:
  - Seccion 1:  
    # links de la primera sección
    - titulo enlace 1: ruta_1
    - titulo enlace 2: ruta_2
    - ...
  - Seccion 2:  
    # links de la segunda sección
    - ruta_a
    - ruta_b
    - ...
```
Cada sección puede tener múltiples subsecciones, 
usando el tabulado para anidar los elementos.


### Organización automática


En caso de omitir la sección `nav`, 
MkDocs creará un indexado automático 
donde creará los enlaces 
leyendo los títulos de los documentos internos
y creará las secciones 
imitando la organizacíón
de dichos documentos en las carpetas internas al directorio `docs/`.

Usando esta opción
MkDocs incluirá todos los documentos Markdown disponibles
en el índice. 


## Extensiones y plugins

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









## Control de versiones - git

En caso de usar **git**, crear el archivo `.gitignore` para prevenir el seguimiento de archivos generables por el framework en el repositorio:

```bash title="Archivo gitignore - ruta" hl_lines="3"
📂 .                    # directorio raiz del proyecto
┣━━ 📂 docs             # carpeta para documentos
┣━━ ⚙️ .gitignore       # archivo de exclusión
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