---
tags:
  - HTML5
  # - JavaScript
  # - CSS
  - YAML
  - MkDocs
#   - Python
#   - Docker
#   - Podman
  # - MarkDown
#   - TypeScript
  # - CSV
  - Bash
---

# Versionado


MkDocs admite el uso de múltiples versiones de la documentación en el mismo proyecto. 
Para ello usa el plugin `mike`, el cual puede requerir instalación:

```bash title="versionado - instalación"
pip install mike
```

Las versiones disponibles de la paǵina se verán en una lista desplegable en el menú principal.


## Habilitacion

El plugin requiere habilitación para ser utilizado:

```yaml title="versionado - habilitación y opciones"
# archivo "mkdocs.yml"
extra:
  version:
    provider: mike      # habilitacion
    default: stable     # alias de rama por defecto
    alias: true         # muestra el alias de cada versión
```
En las opciones se incluye un alias para mostrar de manera predefinida y se permite indicar el alias actual de cada versión.

Para permitir múltiples alias se puede agregar una lista de alias:
```yaml title="versionado - multiples alias por defecto"
# archivo "mkdocs.yml"
extra:
  version:
    provider: mike      # habilitacion
    default: 
        - stable     # alias de rama por defecto
        - latest
        - develop
    alias: true         # muestra el alias de cada versión
```

## Uso local

### Crear version

`mike` crea una nueva versión de la documentación con ayuda del comando `deploy`.

```bash title="crear versión"
mike deploy <version> 
mike deploy <version> <alias>
mike deploy <version> <alias> --update-aliases
```

Las versiones habitualmente se indican con la notacion `<major>.<minor>` ignorando el numero de patch, en tanto que los alias dan información sobre el estado actual de la versión.

Alias habituales: `stable`, `latest`, `dev`.

La opción `--update-aliases` permite reasignar el alias elegido, pues cada alias sólo puede ser usado por una única versión a la vez.


!!! info "Rama de deploy"

    `mike` crea las versiones en la rama `gh-pages`, que es la misma que crea MkDocs para presentar la página para publicar. 
    Esta es independiente de las ramas del repositorio git, ya sea éste local o remoto.




### Alias

Los alias se pueden agregar o modificar después de crear el número de versión con el comando` alias`.

```bash title="crear alias"
mike alias <version> <alias>
```

Si se necesita reasignar el alias a una nueva version hay que agregar la opción `--update-aliases`:

```bash title="actualizar alias"
mike alias <version> <alias> --update-aliases
```

!!! example "Ejemplo: reasignar los alias `latest` y `stable`"


    ```bash title="actualizar alias"
    # Primera asignacion
    mike alias 1.0 stable
    mike alias 1.2 latest
    # Actualizacion
    mike alias 2.1 stable --update-aliases
    mike alias 2.3 latest --update-aliases
    ```


### Deploy local (*test*)

Con el fin de hacer las pruebas locales se dispone del comando `serve`:

```bash title="Test (deploy local)"
mike serve
```

Este comando pone en marcha la página en el puerto 8000. La versión aparece como parte de la URL local:
```http title="URL de versión - local"
http://localhost:8000/<version>/
```

### Listar paginas 


El comando `list` enumera todas las versiones creadas de la documentación:

```bash title="Test (deploy local)"
mike list
```

Si se indica una versión específica entonces el comando da información adicional sobre dicha versión.

```bash title="Test (deploy local)"
mike list <version>
```


### Version por defecto


El comando `set-default` permite elegir la versión predefinida a mostrar por el servidor en caso que no se haya asignado el alias predefinido a alguna versión.


```bash title="versión/alias predefinido"
mike set-default <version>
mike set-default <alias>
```

Típìcamente se indica el alias `latest` o `stable` como predefinido.

Con la version por defecto ya configurada, si se intenta ingresar a la página por su URL:

```http title="URL - local"
http://localhost:8000/
```

entonces el servidor redireccionará a dicha versión.


### Renombrado de version

```bash title="renombrado de versión"
mike retitle <version_actual> <version_nueva>
```


!!! warning "Alias"

    El renombrado de ramas (`alias`) puede dar error si se usa tras el renombrado. 



### Borrado de paginas


El comando `delete` permite eliminar tanto versiones específicas como también borrar la totalidad de las versiones locales: 


```bash title="Borrado"
mike delete <version>   # eliminar versión
mike delete --all       # eliminar todas las versiones
```


### Avertencia de versión

Suele ser conveniente agregar una barra de advertencia que indique cuando no se está viendo la última versión de la documentación.

Para implementarla, crear un archivo `main.html` dentro del directorio `overrides` y escribir en el el contenido:

```html title="barra de advertencia de versión"
<!-- archivo "main.html" -->
{% extends "base.html" %}

{% block outdated %}
  Esta versión no es la más actualizada.
  <a href="{{ '../' ~ base_url }}"> 
    <strong>Click aquí para ver la última versión.</strong>
  </a>
{% endblock %}
```

Para que esto funcione, no olvidar el habilitar el directorio `overrides` como `custom_dir`:

```yaml title="versionado - habilitar sobreescritura de barra"
# archivo "mkdocs.yml"
theme:
  custom_dir: overrides
```

[Más sobre la sobreescritura en MkDocs](sobreescritura.md)


!!! warning "Actualización de barra"

    Las versiones antiguas de la documentación **no se actualizan** al modificar la barra de advertencia. Por ello asegurarse que el formato de la misma sea el correcto antes de hacer el *deploy*.




## Publicación manual


Los comandos vistos previamente se usan también para publicar las versiones en el servidor remoto, agregándoles la opción `--push`. 

Para el deploy exitoso hay dos requisitos:

- El proyecto debe tener el repositorio remoto ya configurado;
- la propiedad `site_url` debe estar bien configurada en el archivo `mkdocs.yml`:

    ```yaml title="ruta de sitio"
    # archivo "mkdocs.yml"
    site_url: url_sitio
    ```

### Publicar version


Usa el comando `deploy`:

```bash title="deploy remoto"
mike deploy --push --update-aliases <version> <alias>
```

Este comando hace un *commit* y lanza el *deploy* sobre la rama `gh-pages` automáticamente. 

Una vez desplegado el proyecto, la nueva version de la página aparecerá en la lista desplegable del versionado. La ruta creada para dicha versión específica será:

```http title="URL de versión - global"
http://url_sitio/<version>/
```

Agregando la opción `--allow-empty` se puede repetir el contenido actual en la nueva versión.


### Version por defecto


Esta opción permite mostrar por defecto la ultima version etiquetada con el alias indicado:

```bash title="Versión por defecto - remota"
mike set-default --push <alias>
```

Popr ejemplo, si se elige el alias `latest`
```bash title="Ultima versión por defecto - remota"
mike set-default --push latest
```
La ruta raiz de la URL apunta la versión más nueva publicada:

```http title="URL por defecto - global"
http://url_sitio/
```



## Publicación automática

Algunos sistemas de deploy automático pueden traer problemas para publicar los *commits* , en tal caso [se requieren algunos pasos adicionales.](https://github.com/jimporter/mike?tab=readme-ov-file#deploying-via-ci)


## Referencias

[GitHub - Mike](https://github.com/jimporter/mike)

[Sitio oficial de MkDocs Material - Versioning](https://squidfunk.github.io/mkdocs-material/setup/setting-up-versioning/#setting-a-default-version) 