---
tags:
#   - HTML
  # - JavaScript
  # - CSS
#   - YAML
  - MkDocs
#   - Python
  - Docker
  - Podman
  # - Markdown
#   - TypeScript
  # - CSV
---

# Contenedores

El uso de contenedores es una alternativa al uso de entornos virtuales, la cual permite mejorar la portabilidad, asignar puertos específicos para el acceso, ahorrar algo de espacio en disco, etc.

A continuación se muestra cómo crear y usar contenedores de MkDocs Material con Docker y con Podman, los cuales son gestores de contenedores muy populares y bastante similares entre sí en cuanto al uso práctico.



## Descargar imagen original

El primer paso descargar la imagen oficial, la cual es necesaria para crear los contenedores.

=== "Docker"

    ```bash title="Descarga de imagen oficial"
    docker pull squidfunk/mkdocs-material  
    ```

=== "Podman"

    ```bash title="Descarga de imagen oficial"
    podman pull squidfunk/mkdocs-material   
    ```

Esta imagen incluye preinstalados algunos de los plugins opcionales recomendados por los desarrolladores por MkDocs Material.


## Uso básico 

Con motivos de uso rápido se puede crear un contenedor descartable que se eliminará al detenerse. 
Para ello se usa el comando `run` con la opción `--rm`. 
El comando de MkDocs a ejecutar por el contenedor se añade al final de la instrucción.
A continuación se muestran varios ejemplos de uso.




### Crear proyecto (*new*)

Para inicializar el proyecto desde la imagen de MkDocs se coloca al final el comando `new` y la ruta al directorio del proyecto. 

=== "Docker"

    ``` bash title="Contenedor - new (descartable)"
    cd ruta_proyecto
    # Imagen estándar
    docker run --rm -it  -v ${PWD}:/docs squidfunk/mkdocs-material new  .    
 
    ```

=== "Podman"

    ``` bash title="Contenedor - new (descartable)"
    cd ruta_proyecto
    # Imagen estándar
    podman run --rm -it --security-opt label=disable  -v ${PWD}:/docs squidfunk/mkdocs-material new  .    
    ```

En el ejemplo se usa un punto para indicar la ruta porque el comando se ejecuta desde el directorio del proyecto. 

!!! info "Permisos de acceso"
    La opción `--security-opt label=disable` se agrega a los comandos de Podman porque éste tiene una política más restrictiva que Docker en cuanto a los permisos de acceso y ejecución de sus contenedores respecto a los archivos externos.


### Construir sitio (*build*)

En el caso de requerirse la construción del sitio estático se crea un contenedor descartable agregando el comando `build` al final:

=== "Docker"

    ``` bash title="Contenedor - build (descartable)"
    cd ruta_proyecto
    # Imagen estándar
    docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material build
    ```

=== "Podman"

    ``` bash title="Contenedor - build (descartable)"
    cd ruta_proyecto
    # Imagen estándar
    podman run --rm -it --security-opt label=disable -v ${PWD}:/docs squidfunk/mkdocs-material build
    ```

Esta instrucción puede repetirse cuantas veces sea necesario.


### Live server (*serve*)

El deploy para pruebas puede hacerse con contenedores descartables, en tal caso se agrega el *port mapping* con la opción `-p`:

=== "Docker"

    ``` bash title="Contenedor - live server (descartable)"
    cd ruta_proyecto
    # Imagen estándar
    docker run --rm -it -p 8000:8000  -v ${PWD}:/docs squidfunk/mkdocs-material
    ```

=== "Podman"

    ``` bash title="Contenedor - live server (descartable)"
    cd ruta_proyecto
    # Imagen estándar
    podman run --rm -it -p 8000:8000 --security-opt label=disable -v ${PWD}:/docs squidfunk/mkdocs-material
    ```

En este ejemplo el puerto de acceso al contenedor es el 8000. 
(El comando a ejecutar por la imagen MkDocs es `serve` de manera predefinida, por ello éste no se indica).


### Live server configurado


El comando `run` permite configurar el nombre de contenedor y el número de puerto para la conexión:


=== "Docker"

    ``` bash title="Contenedor - live server (configurado)"
    cd ruta_proyecto
    # Imagen estándar
    docker run  -it -p puerto_conexion:8000 --name nombre_contenedor -v ${PWD}:/docs squidfunk/mkdocs-material 
    ```

=== "Podman"

    ``` bash title="Contenedor - live server (configurado)"
    cd ruta_proyecto
    # Imagen estándar
    podman run  -it -p puerto_conexion:8000 --name nombre_contenedor  --security-opt label=disable  -v ${PWD}:/docs squidfunk/mkdocs-material 
    ```

Especificar distintos números de puerto para cada contenedor permite acceder a ellos en simultáneo, de modo de poder correr múltiples documentos MkDocs en local al mismo tiempo. Asimismo el indicar un nombre a cada contenedor ayuda a identificarlos claramente. Si no se indica el nombre de cada contenedor entonces éste será aleatorio. 




## Imágenes modificadas 

### Crear imagen modificada


Si se necesita crear una version de la imagen que incluya paquetes adicionales se crea un archivo `Dockerfile` donde se ordene la instalación de todos los paquetes necesarios:



<div class="grid" markdown>

``` dockerfile title="Archivo Dockerfile"
# imagen original
FROM squidfunk/mkdocs-material
# instalación de paquetes adicionales - uno a uno
RUN pip install --no-cache-dir  mkdocs-glightbox
RUN pip install --no-cache-dir  mkdocs-git-revision-date-localized-plugin
# actualizacion de PIP (opcional)
RUN pip install --no-cache-dir  --upgrade pip
```


``` dockerfile title="Dockerfile - desde archivo de requisitos"
# imagen original
FROM squidfunk/mkdocs-material:latest
# instalación de paquetes adicionales
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
# actualizacion de PIP
RUN pip install --no-cache-dir --upgrade pip
```
</div>



Y con el archivo ya escrito se crea la nueva imagen desde la ruta del archivo Dockerfile con el comando `build`: 


=== "Docker"

    ``` bash title="Crear imagen desde Dockerfile"
    cd ruta_dockerfile
    docker build -t nuevo_mkdocs:version  .     
    ```

=== "Podman"

    ``` bash title="Crear imagen desde Dockerfile"
    cd ruta_dockerfile
    podman build -t nuevo_mkdocs:version  .  
    ```

En este contexto `nuevo_mkdocs` es el nombre asignado a la nueva imagen obtenida, 
en tanto que `version` es un texto (*'latest'*, *'stable'*, etc.) o un número de versión.

La imagen creada servirá para crear múltiples contenedores. 



### Uso local


Con el comando `run` se crea nuevamente el contenedor para el uso local, pero esta vez se indica el nombre y versión de la nueva imagen creada en reemplazo de la imagen oficial.
Por ejemplo, para crear un contenedor para el *live server* de pruebas:

=== "Docker"

    ``` bash title="Contenedor - live server (imagen modificada)"
    cd ruta_dockerfile
    # Imagen modificada
    docker run  -it  -p puerto_conexion:8000 --name nombre_contenedor  --replace -v ${PWD}:/docs  nuevo_mkdocs:version 
    ```

=== "Podman"

    ``` bash title="Contenedor - live server (imagen modificada)"
    cd ruta_dockerfile
    # Imagen modificada
    podman run  -it -p puerto_conexion:8000 --name nombre_contenedor --security-opt label=disable --replace -v ${PWD}:/docs nuevo_mkdocs:version 
    ```

Con la opcion `--replace` se permite reemplazar el contenedor preexistente con igual nombre.

En caso de necesitarse la contrucción del sitio estático:


``` bash title="Contenedor - build (descartable)"
cd ruta_proyecto
# Imagen estándar
docker run --rm -it                              -v ${PWD}:/docs  nuevo_mkdocs:version  build
podman run --rm -it --security-opt label=disable -v ${PWD}:/docs  nuevo_mkdocs:version  build
```



### `docker-compose`

Con ayuda del archivo `docker-compose.yaml` se puede facilitar el despliegue del *live server*.
Se asume
El contenido necesario para este documento es el siguiente:

<div class="grid" markdown>

``` yaml title="docker-compose - imagen estándar"
services:

  contenedor_mkdocs:
    image: squidfunk/mkdocs-material:latest
    ports:
      - "${PUERTO:-8000}:8000"
    security_opt: 
      - label=disable
    volumes:
      - ./:/docs
    stdin_open: true
    tty: true

```

``` yaml title="docker-compose - imagen desde Dockerfile"
services:

  contenedor_mkdocs:
    build: .   # 'Dockerfile' en la ruta actual de archivo
    ports:
      - "${PUERTO:-8000}:8000"
    security_opt: 
      - label=disable
    volumes:
      - ./:/docs
    stdin_open: true
    tty: true

```
</div>


En el ejemmplo el contenedor creado se llama `contenedor_mkdocs`
y el número de puerto se configura con la variable de entorno `PUERTO`.

``` bash title="Compose"
export PUERTO=35678
```

Si no se define un número de puerto entonces se usa el `8000`.

La creación del contenedor se hace con el comando `compose`:

=== "Docker"

    ``` bash title="Compose"
    cd ruta_docker_compose
    docker compose up
    ```

=== "Podman"

    ``` bash title="Compose"
    cd ruta_docker_compose
    podman compose up
    ```


!!! warning "Compose"

    El comando `compose` exige que la extensión `docker-compose` o equivalente esté instalada y habilitada en el sistema. Esto se puede verificar en los clientes gráficos de Docker o de Podman, según corresponda.
