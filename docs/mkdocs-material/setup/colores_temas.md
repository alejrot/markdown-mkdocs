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


### Color primario (`primary`)

El color primario es el elegido para colorear la barra de tareas,
la sección actual en la barra lateral, 
el color de los enlaces y de ciertas gráficas, etc.


Click en un botón para probar los colores disponibles:

<style>
  .md-typeset button[data-md-color-primary] > code {
    background-color: var(--md-primary-fg-color);
    color: var(--md-primary-bg-color);
  }
</style>

<div class="mdx-switch">
  <button data-md-color-primary="red"><code>red</code></button>
  <button data-md-color-primary="pink"><code>pink</code></button>
  <button data-md-color-primary="purple"><code>purple</code></button>
  <button data-md-color-primary="deep-purple"><code>deep purple</code></button>
  <button data-md-color-primary="indigo"><code>indigo</code></button>
  <button data-md-color-primary="blue"><code>blue</code></button>
  <button data-md-color-primary="light-blue"><code>light blue</code></button>
  <button data-md-color-primary="cyan"><code>cyan</code></button>
  <button data-md-color-primary="teal"><code>teal</code></button>
  <button data-md-color-primary="green"><code>green</code></button>
  <button data-md-color-primary="light-green"><code>light green</code></button>
  <button data-md-color-primary="lime"><code>lime</code></button>
  <button data-md-color-primary="yellow"><code>yellow</code></button>
  <button data-md-color-primary="amber"><code>amber</code></button>
  <button data-md-color-primary="orange"><code>orange</code></button>
  <button data-md-color-primary="deep-orange"><code>deep orange</code></button>
  <button data-md-color-primary="brown"><code>brown</code></button>
  <button data-md-color-primary="grey"><code>grey</code></button>
  <button data-md-color-primary="blue-grey"><code>blue grey</code></button>
  <button data-md-color-primary="black"><code>black</code></button>
  <button data-md-color-primary="white"><code>white</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-primary]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-primary")
      document.body.setAttribute("data-md-color-primary", attr)
      var name = document.querySelector("#__code_1 code span.l")
      name.textContent = attr.replace("-", " ")
    })
  })
</script>


Código utilizado: [**demo**](#demo).


### Color acento (`accent`)


El color de acento afecta a los enlaces apuntados por el cursor del mouse.

Click en un botón para cambiar el color de resaltado:

<style>
  .md-typeset button[data-md-color-accent] > code {   
    background-color: var(--md-code-bg-color);
    color: var(--md-accent-fg-color);
  }
</style>

<div class="mdx-switch">
  <button data-md-color-accent="red"><code>red</code></button>
  <button data-md-color-accent="pink"><code>pink</code></button>
  <button data-md-color-accent="purple"><code>purple</code></button>
  <button data-md-color-accent="deep-purple"><code>deep purple</code></button>
  <button data-md-color-accent="indigo"><code>indigo</code></button>
  <button data-md-color-accent="blue"><code>blue</code></button>
  <button data-md-color-accent="light-blue"><code>light blue</code></button>
  <button data-md-color-accent="cyan"><code>cyan</code></button>
  <button data-md-color-accent="teal"><code>teal</code></button>
  <button data-md-color-accent="green"><code>green</code></button>
  <button data-md-color-accent="light-green"><code>light green</code></button>
  <button data-md-color-accent="lime"><code>lime</code></button>
  <button data-md-color-accent="yellow"><code>yellow</code></button>
  <button data-md-color-accent="amber"><code>amber</code></button>
  <button data-md-color-accent="orange"><code>orange</code></button>
  <button data-md-color-accent="deep-orange"><code>deep orange</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-accent]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-accent")
      document.body.setAttribute("data-md-color-accent", attr)
      var name = document.querySelector("#__code_2 code span.l")
      name.textContent = attr.replace("-", " ")
    })
  })
</script>


Código utilizado: [**demo**](#demo).


## Temas

Material for MkDocs implementa dos temas: uno claro (`default`) y otro oscuro (`slate`).

### Modo fijo

El tema se fija con el parámetro `scheme`:

``` yaml title="Tema predefinido" hl_lines="4"
# "mkdocs.yml"
theme:
  palette:
    scheme: default
``` 

Click en un botón para cambiar de tema:

<div class="mdx-switch">
  <button data-md-color-scheme="default"><code>tema 'default'</code></button>
  <button data-md-color-scheme="slate"><code>tema 'slate'</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-scheme]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      document.body.setAttribute("data-md-color-switching", "")
      var attr = this.getAttribute("data-md-color-scheme")
      document.body.setAttribute("data-md-color-scheme", attr)
      var name = document.querySelector("#__code_0 code span.l")
      name.textContent = attr
      setTimeout(function() {
        document.body.removeAttribute("data-md-color-switching")
      })
    })
  })
</script>

Código utilizado: [**demo**](#demo).


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

!!! tip "Atributos CSS"

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

<!-- 
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

 -->

## Demo

Este es el código HTML y Javascript insertado en esta página para implementar los demos de color y tema
(click para desplegar):

??? quote "Primary"

    ``` html
    <style>
      .md-typeset button[data-md-color-primary] > code {
        background-color: var(--md-primary-fg-color);
        color: var(--md-primary-bg-color);
      }
    </style>

    <div class="mdx-switch">
      <button data-md-color-primary="red"><code>red</code></button>
      <button data-md-color-primary="pink"><code>pink</code></button>
      <button data-md-color-primary="purple"><code>purple</code></button>
      <button data-md-color-primary="deep-purple"><code>deep purple</code></button>
      <button data-md-color-primary="indigo"><code>indigo</code></button>
      <button data-md-color-primary="blue"><code>blue</code></button>
      <button data-md-color-primary="light-blue"><code>light blue</code></button>
      <button data-md-color-primary="cyan"><code>cyan</code></button>
      <button data-md-color-primary="teal"><code>teal</code></button>
      <button data-md-color-primary="green"><code>green</code></button>
      <button data-md-color-primary="light-green"><code>light green</code></button>
      <button data-md-color-primary="lime"><code>lime</code></button>
      <button data-md-color-primary="yellow"><code>yellow</code></button>
      <button data-md-color-primary="amber"><code>amber</code></button>
      <button data-md-color-primary="orange"><code>orange</code></button>
      <button data-md-color-primary="deep-orange"><code>deep orange</code></button>
      <button data-md-color-primary="brown"><code>brown</code></button>
      <button data-md-color-primary="grey"><code>grey</code></button>
      <button data-md-color-primary="blue-grey"><code>blue grey</code></button>
      <button data-md-color-primary="black"><code>black</code></button>
      <button data-md-color-primary="white"><code>white</code></button>
    </div>

    <script>
      var buttons = document.querySelectorAll("button[data-md-color-primary]")
      buttons.forEach(function(button) {
        button.addEventListener("click", function() {
          var attr = this.getAttribute("data-md-color-primary")
          document.body.setAttribute("data-md-color-primary", attr)
          var name = document.querySelector("#__code_1 code span.l")
          name.textContent = attr.replace("-", " ")
        })
      })
    </script>
    ``` 

??? quote "Accent"

    
    ``` html
    <style>
      .md-typeset button[data-md-color-accent] > code {   
        background-color: var(--md-code-bg-color);
        color: var(--md-accent-fg-color);
      }
    </style>

    <div class="mdx-switch">
      <button data-md-color-accent="red"><code>red</code></button>
      <button data-md-color-accent="pink"><code>pink</code></button>
      <button data-md-color-accent="purple"><code>purple</code></button>
      <button data-md-color-accent="deep-purple"><code>deep purple</code></button>
      <button data-md-color-accent="indigo"><code>indigo</code></button>
      <button data-md-color-accent="blue"><code>blue</code></button>
      <button data-md-color-accent="light-blue"><code>light blue</code></button>
      <button data-md-color-accent="cyan"><code>cyan</code></button>
      <button data-md-color-accent="teal"><code>teal</code></button>
      <button data-md-color-accent="green"><code>green</code></button>
      <button data-md-color-accent="light-green"><code>light green</code></button>
      <button data-md-color-accent="lime"><code>lime</code></button>
      <button data-md-color-accent="yellow"><code>yellow</code></button>
      <button data-md-color-accent="amber"><code>amber</code></button>
      <button data-md-color-accent="orange"><code>orange</code></button>
      <button data-md-color-accent="deep-orange"><code>deep orange</code></button>
    </div>

    <script>
      var buttons = document.querySelectorAll("button[data-md-color-accent]")
      buttons.forEach(function(button) {
        button.addEventListener("click", function() {
          var attr = this.getAttribute("data-md-color-accent")
          document.body.setAttribute("data-md-color-accent", attr)
          var name = document.querySelector("#__code_2 code span.l")
          name.textContent = attr.replace("-", " ")
        })
      })
    </script>
    ```


??? quote "Tema"

    ``` html
    <div class="mdx-switch">
      <button data-md-color-scheme="default"><code>tema 'default'</code></button>
      <button data-md-color-scheme="slate"><code>tema 'slate'</code></button>
    </div>

    <script>
      var buttons = document.querySelectorAll("button[data-md-color-scheme]")
      buttons.forEach(function(button) {
        button.addEventListener("click", function() {
          document.body.setAttribute("data-md-color-switching", "")
          var attr = this.getAttribute("data-md-color-scheme")
          document.body.setAttribute("data-md-color-scheme", attr)
          var name = document.querySelector("#__code_0 code span.l")
          name.textContent = attr
          setTimeout(function() {
            document.body.removeAttribute("data-md-color-switching")
          })
        })
      })
    </script>
    ```

## Referencias

[Documentacion oficial - Changing the colors](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/)