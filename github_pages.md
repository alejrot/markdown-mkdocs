

# GitHub Pages


Github Pages es el servicio de GitHub para publicar sitios web para usuarios y organizaciones. 


[Tutorial oficial](https://pages.github.com/)


Instrucciones básicas:

1. crear repositorio público con el nombre de usuario:

    ```
    <nombre_usuario>.github.io
    ```

2. clonar el repositorio al equipo local:

    ```bash
    git clone https://github.com/<nombre_usuario>/<nombre_usuario>.github.io
    ```

3. Holamundo (test):

    ```bash
    cd <nombre_usuario>.github.io
    echo "Hello World" > index.html
    ```

    
4. Publicar:

    ```bash
    git add --all
    git commit -m "Initial commit"
    git push -u origin main
    ```

El sitio aparecerá disponible finalmente en:

```bash
https://<nombre_usuario>.github.io/
```

La ruta concreta y las opciones aparecerán dentro del repositorio en Settings --> pestaña Pages

