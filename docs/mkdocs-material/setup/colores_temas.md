---
tags:
#   - HTML5
  # - JavaScript
  - CSS
  - YAML
  - MkDocs
#   - Python
#   - Docker
#   - Podman
  # - Markdown
#   - TypeScript
  # - CSV
#   - Bash
---



# Temas y Colores


*Material for MkDocs* usa la [paleta de colores del tema Material de Google](https://materialui.co/colors).



## Colores

MkDocs permite elegir los colores para el menú principal (propiedad `primary`) y para remarcar los enlaces seleccionados (propiedad `accent`):

``` yaml title="Colores" hl_lines="4 5"
# "mkdocs.yml"
theme:
  palette:
    primary: indigo
    accent: lime
``` 

Colores preestablecidos:


`red`, `pink`, `purple`, `deep purple`, `indigo`, `blue`, `light blue`, `cyan`, `teal`, `green`, `light green`, `lime`, `yellow`, `amber`, `orange`, `deep orange`, `brown`, `grey`, `blue grey`, `black`, `white`




## Temas


### Tema por defecto


``` yaml title="Tema predefinido" hl_lines="4"
# "mkdocs.yml"
theme:
  palette:
    scheme: default
``` 

|Opción | Tema|
|:---:|:---:|
|`default`| tema claro |
|`slate`|tema oscuro|



### Tema seleccionable



``` yaml title="Cambio de tema" hl_lines="5 10"
# "mkdocs.yml"
theme:
  palette: 
    # Cambio de paleta al modo claro
    - scheme: default
      toggle:
        icon: material/brightness-7     # icono
        name: Cambia al modo oscuro     # mensaje
    # Cambio de paleta al modo oscuro
    - scheme: slate
      toggle:
        icon: material/brightness-4     # icono
        name: Cambia al modo claro      # mensaje
``` 



Iconos recomendados:


|Iconos| Códigos|
|:---:|:---|
|:material-brightness-7: + :material-brightness-4: | `material/brightness-7` + `material/brightness-4`|
 |:material-toggle-switch: + :material-toggle-switch-off-outline: |`material/toggle-switch` + `material/toggle-switch-off-outline`|
 |:material-weather-night: + :material-weather-sunny:  | `material/weather-night` + `material/weather-sunny`|
 |:material-eye: + :material-eye-outline: |`material/eye` + `material/eye-outline`|
 |:material-lightbulb: + :material-lightbulb-outline: |`material/lightbulb` + `material/lightbulb-outline`|


!!! tip "Temas con colores personalizados"

    Los colores de barra principal y de enlaces se pueden adjudicar a cada tema, de modo de poder cambiarlos también:

    ``` yaml title="Temas con cambio de colores" hl_lines="9 10  16 17"
    # "mkdocs.yml"
    theme:
    palette: 
      # Cambio de paleta al modo claro
      - scheme: default
        toggle:
            icon: material/brightness-7     # icono
            name: Cambia al modo oscuro     # mensaje
        primary: indigo
        accent: blue
      # Cambio de paleta al modo oscuro
      - scheme: slate
        toggle:
            icon: material/brightness-4     # icono
            name: Cambia al modo claro      # mensaje
        primary: deep purple
        accent: pink
    ``` 





### Preferencias del sistema

``` yaml title="Cambio de tema" hl_lines="5 6 11 12"
# "mkdocs.yml"
theme:
  palette: 
    # Cambio de paleta al modo claro
    - media: "(prefers-color-scheme: light)"
      scheme: default
      toggle:
        icon: material/brightness-7     # icono
        name: Cambia al modo oscuro     # mensaje
    # Cambio de paleta al modo oscuro
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      toggle:
        icon: material/brightness-4     # icono
        name: Cambia al modo claro      # mensaje
``` 



### Modo automatico

``` yaml title="Cambio de tema" hl_lines="5 10 11 16 17"
# "mkdocs.yml"
theme:
  palette:
    # Palette toggle for automatic mode
    - media: "(prefers-color-scheme)"
      toggle:
        icon: material/brightness-auto
        name: Cambia al modo claro      # mensaje
    # Palette toggle for light mode
    - media: "(prefers-color-scheme: light)"
      scheme: default
      toggle:
        icon: material/brightness-7 
        name: Cambia al modo oscuro     # mensaje
    # Cambio de paleta al modo oscuro
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      toggle:
        icon: material/brightness-4         # icono
        name: Cambia al modo automatico     # mensaje
``` 



## Temas personalizados


Agregando contenido CSS se puede crear nuevos temas como también modificar los preexistentes.


``` yaml title="Agregar temas desde CSS"
# "mkdocs.yml"
extra_css:
  - stylesheets/colores_custom.css
```


Lista completa con todos los [atributos de color en el repositorio oficial](https://github.com/squidfunk/mkdocs-material/blob/master/src/templates/assets/stylesheets/main/_colors.scss)



### Crear temas


Dentro del archivo CSS se asigna a la propiedad
`data-md-color-scheme` un nuevo nombre de tema y se definen los valores que deberán tener los atributos de color.

Ejemplo oficial: nuevo tema `youtube`

```css title="Nuevo tema en CSS" hl_lines="4"
/* archivo "colores_custom.css" */

/* Nuevo esquema de colores */
[data-md-color-scheme="youtube"] {
    --md-primary-fg-color:        #EE0F0F;  
    --md-primary-fg-color--light: #ECB7B7;  
    --md-primary-fg-color--dark:  #90030C;
  }
```


### Modificar temas

Este caso es muy similar al anterior. Se asigna a la propiedad `data-md-color-scheme` un nombre de tema preexistente y se hacen las modificaciones de las variables de color pertinentes.


```css title="Tema modificado en CSS" hl_lines="4"
  /* archivo "colores_custom.css" */

/* Afecta al modo oscuro */
[data-md-color-scheme="slate"] {
    --md-hue: 360;        
  }
```

!!! info "Tono (*hue*)"

    El parámetro de tono proviene de los valores HSV de color. Éste es un ángulo que va de 0 a 360 grados.



## Colores de código


Los colores de los distintos componentes de código se pueden alterar agregando contenido CSS. En él se modifica el valor de las variables CSS predefinidas

``` css title="Bloques código - Cambio de colores"
/* archivo CSS */
:root > * {
    /* comentarios color verde oscuro */
    --md-code-hl-comment-color      : #009000;
  }
``` 

De esta forma el estilo se aplica a todos los bloques de código, de forma independiente del lenguaje que se indique a cada uno.

Las variables CSS predefinidas son:

|variable CSS| parametro |
|:---|:---|
| `--md-code-hl-number-color` |  numeros     |
| `--md-code-hl-special-color` |      |
| `--md-code-hl-function-color` |     |
| `--md-code-hl-constant-color` |  constantes  |
| `--md-code-hl-keyword-color` |    |
| `--md-code-hl-string-color` | |
| `--md-code-hl-name-color` | nombres de variables |
| `--md-code-hl-operator-color` | operadores  |
| `--md-code-hl-punctuation-color` | |
| `--md-code-hl-comment-color` | comentarios |
| `--md-code-hl-generic-color` |  |
| `--md-code-hl-variable-color` | variables |

|variable CSS| parametro |
|:---|:---|
| `--md-code-fg-color`| *foreground*|
| `--md-code-bg-color`| *background*|
| `--md-code-hl-color`| *higlight*|


## Referencias

[Documentacion oficial - Changing the colors](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/)