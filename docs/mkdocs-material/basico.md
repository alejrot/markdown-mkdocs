
#Material for Mkdocs


https://squidfunk.github.io/mkdocs-material/


## Instalación

La forma más habitual de instalar este framework es via PIP, el gestor de paquetes de Python:

```bash
pip install mkdocs-material
```

La alternativa es descargar el contenedor oficial, el cual se puede ejecutar con Docker o con Podman.

```bash
docker pull squidfunk/mkdocs-material
```

La tercera opción es instalar desde el repositorio oficial en GitHub

```bash
git clone https://github.com/squidfunk/mkdocs-material.git
pip install -e mkdocs-material
```


## Crear proyecto

Mkdocs implementa su propio ejecutable llamado `mkdocs`. Para crear el proyecto se usa el comando `new`:

```bash
mkdocs new .            # ruta actual
```

El proyecto creado es un demo muy simple con la siguiente estructura:

```bash
├─ docs/            # carpeta para documentos
│  └─ index.md      # archivo demo
└─ mkdocs.yml       # archivo configuración
```

El archivo YML es el que require incorporar todas las configuraciones: plugins, datos del sitio, organización interna de documentos, etc. Éste comienza casi vacío


```yml

site_name: nombre_sitio

site_url: https://url_dominio/nombre_sitio   #

theme: 
  name: material    # tema predefinido
  # opciones de tema



markdown_extensions: 
    # extensiones usadas


plugins:
    # opciones de plugins


nav:
    # nombre y link de documentos internos
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
    En caso de usar **git**, incorporar `site/` al archivo `.gitignore` para prevenir el seguimiento de estos archivos en el repositorio.



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

Se puede configurar al repositorio remoto para que reconstruya el sitio cada vez que hay una actualuización de su rama principal.

### GitHub Pages

Crear un archivo `ci.yml` dentro de la carpeta oculta indicada:

```bash 
# directorio raiz del proyecto
.github/workflows/ci.yml
```

y cargar en él la rutina:

```yml
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
      - run: pip install mkdocs-material 
      - run: mkdocs gh-deploy --force
```


### GitLabs Pages



Crear un archivo oculto `.gitlab-ci.yml` dentro de la carpeta raíz del proyecto:

```bash 
# directorio raiz del proyecto
.gitlab-ci.yml
```

y cargar en él la rutina:

```yml
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




