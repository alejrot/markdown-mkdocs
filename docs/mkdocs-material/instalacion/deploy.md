---
tags:
#   - HTML
  # - JavaScript
  # - CSS
  - YAML
  - MkDocs
  - Python
#   - Docker
#   - Podman
  # - Markdown
#   - TypeScript
  # - CSV
---



# Publicacion

Mkdocs permite hacer la publicación (*deploy*) en los servidores de GitHub y GitLab fácilmente, tanto de manera manual como de manera automática.



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
.  # directorio raiz del proyecto
├─ .github/
│  └─ workflows/
│     └─ ci.yml     # archivo de GitHub Actions
├─ docs/            # carpeta para documentos
│  └─ index.md      # archivo demo
└─ mkdocs.yml       # archivo configuración
```

y cargar en él la rutina:

```yaml title="GitHub Pages - Rutina de deploy automático" hl_lines="29-32"
# archivo "ci.yml"
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

    En caso de requerirse plugins adicionales la instalación de éstos se pueden agregar a la tarea de GitHub Pages:
    
    ```yaml title="GitHub Pages - Paquetes adicionales"
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

    O mejor aún, usar un **archivo de requisitos** en formato TXT: 


    ```yaml title="GitHub Pages - paquetes desde requirements.txt" hl_lines="3"
    # ....
      # instalación desde archivo de requisitos 
      - run: pip install -r requirements.txt 
      # deploy
      - run: mkdocs gh-deploy --force
    ```

    El archivo de requisitos debe incorporar los nombres de todos los paquetes necesarios:
    ``` py title="requirements.txt"
    # paquete básico
    mkdocs-material 

    # paquetes agregados
    mkdocs-git-revision-date-localized-plugin
    mkdocs-glightbox
    mkdocs-material[imaging]
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




## Referencias


[Material for MkDocs - Publising your site](https://squidfunk.github.io/mkdocs-material/publishing-your-site/)