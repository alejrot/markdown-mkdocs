
# MkDocs


[Documentacion oficial](https://www.mkdocs.org)

## Instalacion

```bash
pip install mkdocs
```


## Crear nuevo proyecto
```bash
mkdocs new proyecto-demo
cd proyecto-demo
```
Configuración: archivo mkdocs.yml

## Ver version desarrollo (live server)

```bash
mkdocs serve
```

Ruta local predefinida: [localhost:8000](http://localhost:8000)



## Agregar páginas

Se agregan más páginas en formato MD a la carpeta 'docs'
Se crea la barra de navegación agregando al archivo de configuración:

```yml
nav:
  - Home: index.md
  - About: about.md
```

## Temas (estilos)

Se cambia el tema de página agregando al archivo de configuración YML:

```yml
theme: readthedocs
```
Temas adicionales (pueden requerir instalacion)
https://github.com/mkdocs/catalog?tab=readme-ov-file#-theming

https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes



### Elegir un tema

[Elegir un tema](https://www.mkdocs.org/user-guide/choosing-your-theme/#readthedocs-locale)









## Favicon

crear subdirectorio **'img'** dentro de **'docs'**.
colocar dentro el ***favicon.ico*** adentro.



## Agregado de CSS

Se pueden agregar archivos CSS con propiedades personalizadas. 

Ejemplo: archivo "styles.css" dentro de la carpeta con las paginas MarkDown.

```css
h1 {
    color: red;
    border-color: blue;
    border-width: 5px;
    border-style: solid;
    background-color: silver;
}
```

Al archivo YAML se le agrega el atributo *extra_css* con la lista de archivos CSS incorporados: 
```yml
extra_css:
  - styles.css
```


## Construir y publicar (*deploy*) 

La compilacion del sitio web se realiza con el comando *build*:

```bash
mkdocs build
```

El contenido creado se guarda en la carpeta ***site*** y está listo para copiarlo al host de destino.

Es conveniente agregar esta carpeta a la lista de excluidos de Git (archivo *.gitignore*) para evitar su respaldo inútil:

```bash
echo "site/" >> .gitignore
```

## GitHub Pages

https://www.mkdocs.org/user-guide/deploying-your-docs/


Hay un comando específico para publicar en GitHub Pages de forma manual:

```bash
mkdocs gh-deploy
```

IMPORTANTE:
- Nunca modificar las páginas remotas porque sus cambios serán reescritos en el próximo deploy.
- Los archivos no seguidos (*untracked*) y no guardados (*uncommitted*) dentro de la carpeta de proyecto TAMBIÉN se suben a la página al hacer deploy













