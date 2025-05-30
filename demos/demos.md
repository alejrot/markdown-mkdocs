# Demos de MkDocs

Estos demos se realizaron para poner a prueba
distintas opciones y herramientas relacionadas con MkDocs.
Se despliegan mediante gestores de contenedores como Docker o Podman.


## Despliegue

Buscar la ruta al archivo `compose.yml` del demo elegido
y ubicar la *shell* en el:

```bash
cd ruta_al archivo_compose
``` 

Entonces ejecutar el comando Compose (puede requerir instalación previa).
```bash
# (Elegir la opción que corresponda)
docker compose up
docker-compose up
podman compose up
podman-compose up
```

El borrado de los containers se puede hacer con la opción `down`

```bash
# (Elegir la opción que corresponda)
docker compose down
docker-compose down
podman compose down
podman-compose down
```

## Elección de puertos

Cada demo se despliega en el puerto `8000` de la dirección `localhost`:
[**http://localhost:8000/**](http://localhost:8000/)

Si hay varios contenedores juntos se parte desde el numero `8000`.


Esto se puede cambiar creando archivos `.env` al lado del archivo `compose.yml`
y asignar valores, por ejemplo:
```
PUERTO=9999
```
o:
```
PUERTO_1=7777
PUERTO_2=7778
PUERTO_3=7779
```




