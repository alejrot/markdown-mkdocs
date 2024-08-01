
# mkdocs-material


Tema Material (de Google) adaptado para MkDocs

https://squidfunk.github.io/mkdocs-material/


## instalacion


```bash
pip install mkdocs-material
```


## importacion 



## crear proyecto

```bash
mkdocs new nombre-proyecto
```



## Usar Contenedor




Imagen de disco oficial:

    squidfunk/mkdocs-material


Imagen de disco desde [DockerHub](https://hub.docker.com/r/squidfunk/mkdocs-material/) :

    docker.io/squidfunk/mkdocs-material


### Docker

Ir a la ruta y ejecutar comando:

```bash  title="Live Server (serve)"
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs    docker.io/squidfunk/mkdocs-material     
```
Recordar que: `${PWD}:/docs` es la carpeta donde se ubican los archivos a renderizar. 

El comando por defecto es `serve` (*live server* en local ). Los otros comandos se agregan como opción al final:


```bash title="Crear (new)"
docker run --rm -it -v ${PWD}:/docs docker.io/squidfunk/mkdocs-material new .   # '.': ubicacion actual donde crear los archivos
```

```bash title="Construir (build)"
docker run --rm -it -v ${PWD}:/docs docker.io/squidfunk/mkdocs-material build
```

```bash title="Deploy en GitHub Pages (gh-deploy)"
docker run --rm -it -v ~/.ssh:/root/.ssh -v ${PWD}:/docs  docker.io/squidfunk/mkdocs-material gh-deploy 
```





### Caso de usar Podman:


Creacion de alias de Podman
```
alias docker=podman
```

Para que Podman permita la ejecucion se debe añadir la opcion `--security-opt label=disable`:

```
docker run --rm -it -p 8000:8000   --security-opt label=disable  -v ${PWD}:/docs docker.io/squidfunk/mkdocs-material
```


https://stackoverflow.com/questions/73814619/permission-denied-trying-to-use-rootless-podman-docker-compose-traefik-with








