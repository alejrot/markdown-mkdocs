
# Material for Mkdocs


[Página oficial - GitHub Pages](https://squidfunk.github.io/mkdocs-material/)


## Instalación

La forma más habitual de instalar este framework es via PIP, el gestor de paquetes de Python:

```bash title="Instalación con PIP"
pip install mkdocs-material
```

La alternativa es descargar la imagen oficial, la cual permite crear un contenedor ejecutable con Docker o con Podman.

```bash title="Descarga de imagen"
docker pull squidfunk/mkdocs-material
```

La tercera opción es instalar desde el repositorio oficial en GitHub

```bash title="Instalación desde repositorio oficial"
git clone https://github.com/squidfunk/mkdocs-material.git
pip install -e mkdocs-material
```


## Crear proyecto

Mkdocs implementa su propio ejecutable llamado `mkdocs`. Para crear el proyecto se usa el comando `new`:

```bash title="Crear proyecto"
mkdocs new .            # ruta actual
```

El proyecto creado es un demo muy simple con la siguiente estructura:

```bash title="Estructura de proyecto"
# directorio raiz del proyecto
├─ docs/            # carpeta para documentos
│  └─ index.md      # archivo demo
└─ mkdocs.yml       # archivo configuración
```

El directorio `docs/` es la ruta predefinida para colocar todos los documentos MD a publicar.

El archivo YAML es el que require incorporar todas las configuraciones: plugins, datos del sitio, organización interna de documentos, etc. Éste comienza casi vacío. Al configurarlo toma una estructura como la mostrada a continuación:


```yaml title="Archivo de configuración - Sintaxis básica"
# archivo "mkdocs.yml" 
site_name: nombre_sitio

site_url: https://url_dominio/nombre_sitio   

# Tema elegido
theme: 
  name: material    # tema predefinido
  ... # opciones de tema
  


# extensiones usadas
markdown_extensions: 
  - extension_1
  - extension_2
  - ....
    

# hojas de estilo adicionales
extra_css:

# rutinas JS adicionales
extra_javascript:

#  componentes y opciones adicionales
extra:


# Plugins habilitados
plugins:
    - plugin_1
    - plugin_2
    - ...


# navegación
nav:
    # nombre y link de documentos internos
    - Pagina 1: ruta_1
    - Pagina 2: ruta_2
    - ...
```

La sección `nav` describe la organización en secciones , subsecciones  y páginas del proyecto recurriendo a pares clave-valor. Cada clave será el texto del índice y cada valor será la ruta relativa del documento destino. Combinando ambos MkDocs crea cada link y los muestra en el mismo orden de definición. 
En caso de omitir la sección `nav` MkDocs creará un indexado automático donde leerá los títulos de los documentos internos.


El tema elegido se reemplaza con el campo `name`. Las opciones instaladas son `material` (tema por defecto), `mkdocs` (tema original del plugin) y `readthedocs` (tema alternativo del plugin).


```yaml title="Archivo de configuración - Elección de tema" hl_lines="4 9"
# archivo "mkdocs.yml" 

# Tema elegido
theme: 
  # tema predefinido
  # name: material    
  # temas alternativos
  # name: mkdocs   
  name: readthedocs    
```


## Live server

Con fines de desarrollo se dispone de un servidor local disponible con el comando `serve`:

```bash
mkdocs serve    
```

## Construir sitio

La conversión a sitio estático se realiza con el comando `build`:

```bash
mkdocs build    
```

Este comando crea la carpeta `site/` con el contenido listo para publicar en cualquier servidor web.

!!! tip ".gitignore"
    En caso de usar **git**, incorporar `site/` al archivo `.gitignore` para prevenir el seguimiento de estos archivos en el repositorio.  También guardar en él `.cache/` para prevenir el seguimiento de objetos creados por los plugins internos:

    ```bash title="Archivo gitignore - ruta" hl_lines="2"
    # directorio raiz del proyecto
    ├─ .gitignore       # archivo de exclusión
    ├─ docs/            # carpeta para documentos
    │  └─ index.md      # archivo demo
    └─ mkdocs.yml       # archivo configuración
    ```

    ```bash title="Archivo gitignore - contenido" 
    site/       
    .cache/     
    ```







## Deploy manual


Mkdocs permite hacer el *deploy* (publicación) remoto desde el repositorio de git.

Para forzar el deploy manual se usa el comando `gh-deploy`

```bash
mkdocs gh-deploy --force
```
Este comando actualiza una rama oculta del repositorio llamada `gh-pages` .

!!! warning "GitHub Pages"
    Para que el sitio creado sea visible desde GitHub Pages hay que configurar su repositorio. Para ello hay que ir a su página en GitHub, ir a la pestaña 'Settings' y luego configurar la subpestaña 'Pages'. Allí se elige la rama `gh-pages` y el directorio donde se ubica el archivo YML, el cual normalmente es `/` (*root*).


## Deploy automático

Se puede configurar al repositorio remoto para que reconstruya el sitio cada vez que hay una actualización de su rama principal.

### GitHub Pages

Crear un archivo `ci.yml` dentro de la carpeta oculta indicada:

```bash hl_lines="2-4" title="GitHub Pages - Ruta de GitHub Actions"
# directorio raiz del proyecto
├─ .github/
│  └─ workflows/
│     └─ ci.yml     # archivo de GitHub Actions
├─ docs/            # carpeta para documentos
│  └─ index.md      # archivo demo
└─ mkdocs.yml       # archivo configuración
```

y cargar en él la rutina:

```yaml title="GitHub Pages - Rutina de deploy automático" hl_lines="28-31"
name: ci 
on:
  push:
    branches:
      - master 
      - main
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure Git Credentials
        run: |
          git config user.name github-actions[bot]
          git config user.email 41898282+github-actions[bot]@users.noreply.github.com
      - uses: actions/setup-python@v5
        with:
          python-version: 3.x
      - run: echo "cache_id=$(date --utc '+%V')" >> $GITHUB_ENV 
      - uses: actions/cache@v4
        with:
          key: mkdocs-material-${{ env.cache_id }}
          path: .cache
          restore-keys: |
            mkdocs-material-
      # instalación básica
      - run: pip install mkdocs-material 
      # deploy
      - run: mkdocs gh-deploy --force
```

El servidor de GitHub se encargará de descargar e instalar todos los paquetes Python requeridos y de ejecutar el framework.

!!! tip "Paquetes adicionales"

    En caso de requerirse plugins adicionales la instalación de éstos se agrega a la tarea de GitHub Pages:
    
    ```yaml title="GitHub Pages - Paquetes adicionales" hl_lines="2 3 8 9"
    # ....
      # instalación base
      - run: pip install mkdocs-material 
      # plugins agregados
      - run: pip install mkdocs-git-revision-date-localized-plugin
      - run: pip install mkdocs-glightbox
      - run: pip install mkdocs-table-reader-plugin
      # deploy
      - run: mkdocs gh-deploy --force
    ```

### GitLab Pages



Crear un archivo oculto `.gitlab-ci.yml` dentro de la carpeta raíz del proyecto:

```bash  hl_lines="2" title="GitLab Pages - Ruta de archivo"
# directorio raiz del proyecto
├─ .gitlab-ci.yml
├─ docs/            # carpeta para documentos
│  └─ index.md      # archivo demo
└─ mkdocs.yml       # archivo configuración
```

y cargar en él la rutina:

```yaml title="GitLab Pages - Rutina de deploy automático"
pages:
  stage: deploy
  image: python:latest
  script:
    - pip install mkdocs-material
    - mkdocs build --site-dir public
  artifacts:
    paths:
      - public
  rules:
    - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'
```




