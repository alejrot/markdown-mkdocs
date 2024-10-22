---
tags:
#   - HTML
  # - JavaScript
  - CSS
  - YAML
  - MkDocs
#   - Python
#   - Docker
#   - Podman
  - Markdown
#   - TypeScript
  # - CSV
---

# Íconos y Emojis


MkDocs-Material incluye emojis e íconos ya integrados desde los sitios:


- [Material Design](https://materialdesignicons.com/)
- [FontAwesome](https://fontawesome.com/search?m=free)
- [Octicons](https://octicons.github.com/)
- [Simple Icons](https://simpleicons.org/)


También admite el uso de íconos locales.


## Configuración 

### Mínima

Si sólo se requiere usar los íconos integrados alcanza con agregar estas líneas al archivo de configuración:

``` yaml title="Iconos - Habilitación"
# "mkdocs.yml"
markdown_extensions:
  - attr_list
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
```

### Iconos locales

Con el fin de agregar iconos locales debe indicarse la carpeta contenedora dentro del archivo de configuración. Dicha carpeta suele llamarse `overrides`.

``` yaml title="Iconos - Habilitación (con iconos locales)" hl_lines="4 12-14"
# "mkdocs.yml"
theme: 
  # carpeta local con extras (opcional)
  custom_dir: overrides  # ruta desde directorio raiz del proyecto

markdown_extensions:
  - attr_list
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
      # Iconos locales (Opcional)
      options:
        custom_icons:
          - overrides/.icons  # Carpeta local - ruta desde directorio raiz del proyecto
```

En este caso los íconos locales se guardan adentro de la carpeta `overrides/.icons`.

!!! info "overrides"

    El directorio `custom_dir` es usado porMkDocs para incluir todo el material personalizado que habrá de sobreescribir los componentes estandarizados de MkDocs. Por ese motivo se lo suele llamar `overrides` ("anular" , "sobreescribir").
    [Más informacion sobre la sobreescritura de componentes](https://squidfunk.github.io/mkdocs-material/customization/#environment-setup-material-for-mkdocs)



##  Uso en documentos MarkDown

### Uso básico

Los íconos y emojis integrados se llaman con su nombre clave rodeado de dos puntos `:`:

```md title="Iconos"
:simple-markdown:
:simple-materialformkdocs: 
```

:simple-markdown:
:simple-materialformkdocs: 


!!! hint "Buscador de iconos"

    La [página oficial](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/) incluye un buscador de íconos y emojis integrados disponibles.



### Estilos CSS

A los iconos se les puede cambiar las propiedades con ayuda de clases CSS. Lo más habitual es cambiar el color, que se afecta con la propiedad `color`, y las dimensiones, que se modifican con  la propiedad `font-size`.

Las propiedades se crean en un archivo CSS adicional:


```css title="Clases CSS"
/* archivo "stylesheets/iconos_demo.css" */
.rojo {
    /* color en RGB o RGBA */
    color: #B00000;
}

.verde {
    /* color en RGB o RGBA */
    color: #00B000;
}

.gigante {
    /* dimensiones relativas al tamaño de fuente */
    font-size: 3em;     
}
```

El archivo CSS se carga al archivo de configuración

``` yaml
extra_css:
  - stylesheets/iconos_demo.css
```


Esas clases se usan llamándolas entre corchetes justo después de la secuencia del ícono:

```md title="Iconos con propiedades CSS"
:simple-markdown:{.verde .gigante}
:simple-materialformkdocs:{.rojo .gigante}
```

Y así se ven los íconos:

:simple-markdown:{.verde .gigante}
:simple-materialformkdocs:{.rojo .gigante}




### Animaciones

CSS admite implementar animaciones, las cuales se definen como clases CSS.

Por ejemplo:

```css title="Animacion CSS"
/* archivo "stylesheets/iconos_demo.css" */
@keyframes corazon {
    0%, 40%, 80%, 100% {
      transform: scale(1);
    }
    20%, 60% {
      transform: scale(1.15);
    }
  }
  
.corazon {
    animation: corazon 1000ms infinite;
  }
```


```md title="Icono animado"
:octicons-heart-fill-24:{ .corazon .rojo .gigante}
```

:octicons-heart-fill-24:{ .corazon .rojo .gigante}



### Iconos locales

Supóngase que se incorporan íconos de Bootstrap. Estos se ubican  manualmente en la carpeta `bootstrap` dentro de  `overrides/.icons`. Para llamarlo se coloca su ruta relativa desde la carpeta de íconos, reemplazando la barra por guion y sin indicar la extensión:

``` md title="Icono local en MD - Activity de Bootstrap" hl_lines="2"
<!-- ruta relativa: 'bootstrap/activity.svg'  -->
:bootstrap-activity:{.gris .gigante} 
```

Resultado:

:bootstrap-activity:{.gris .gigante}

Si en cambio se busca usarlo en el archivo de configuración YML se asigna directamente su ruta relativa, sin extensión. Ejemplo: como logo de página 

``` yaml title="Icono de logo - Activity de Bootstrap" hl_lines="4"
# "mkdocs.yml"
theme: 
  icon:
    logo: bootstrap/activity  # icono local 
    # ruta relativa: 'bootstrap/activity.svg' 
```



!!! tip "Iconos de Bootstrap"

    [Galería de iconos SVG online](https://icons.getbootstrap.com/)

    Descarga del pack - via NPM: `#!bash npm i bootstrap-icons`     



## Íconos de sitio


Los íconos predefinidos del sitio se cambian desde el archivo de configuración YAML. Éste obliga a cambiar la sintaxis de los íconos. Por ejemplo, para llamar el ícono :simple-markdown: se convierte su string de de `:simple-markdown:` a `simple/markdown` :


``` yaml title="Logo de página - ícono" hl_lines="6  9 10"
# "mkdocs.yml"
theme: 
  icon:
    
    #icono de pagina
    logo: simple/markdown  
    
    # iconos de avance y retroceso 
    previous: fontawesome/solid/angle-left
    next: fontawesome/solid/angle-right
```

La lista de iconos modificables desde configuración es la siguiente:


|Nombre de ícono| Uso|
|:---:|:----|
| `logo`|  logo de pagina |
| `menu`| 	menú desplegable |
| `alternate`| 	cambiar lenguaje |
| `search`| busqueda |
| `share`	| compartir búsqueda |
| `close`	| borrar búsqueda |
| `top`| botón de volver al comienzo |
| `edit`	| editar página actual |
| `view`	| View page source |
| `repo`	| repositorio |
| `admonition`	| "advertencias" |
| `tag`	| etiquetas e identificadores de páginas |
| `previous`	| página previa en footer |
| `next`	| página siguiente en footer |


!!! tip "Enlace del logo"

    El logo de la página es un link que por defecto apunta al indice. El enlace se modifica con el parámetro `homepage` en la seccion `extra`:


    ``` yaml title="Logo de página - enlace"
    # "mkdocs.yml"
    extra: 
      homepage: ruta_inicio
    ```

    El link puede ser una URL absoluta o una ruta relativa.


## Favicon

El *favicon* es el icono que aparece en la pestaña del navegador. Para cambiarlo hay que ubicarlo manualmente dentro del directorio del proyecto e importarlo. Debe tener **formato ICO**.


``` yaml title="Favicon" hl_lines="3"
# "mkdocs.yml"
theme:
  favicon: images/favicon.png
```





## Referencias

[Sitio oficial - Icons, Emojis](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/)



[Sitio oficial - Changing logo and icons](https://squidfunk.github.io/mkdocs-material/setup/changing-the-logo-and-icons)



[Sitio oficial - Customization ](https://squidfunk.github.io/mkdocs-material/customization/#environment-setup-material-for-mkdocs)