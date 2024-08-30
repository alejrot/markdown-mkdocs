---
tags:
#   - HTML5
#   - JavaScript
  # - CSS
  - YAML
  - MkDocs
#   - Python
#   - Docker
#   - Podman
  - MarkDown
#   - TypeScript
  # - CSV
---


# Grids

Las grillas o grids son conjuntos de bloques agrupados.



## Configuración

Las grids deben habilitarse en el archivo de configuración:

```yaml title="Habilitacion de grillas"
markdown_extensions: 
  - attr_list
  - md_in_html
```


## Grillas de tarjetas


### Sintaxis de lista (elementos simples)

La forma más elemental del uso de *card grids* consiste en rodear una lista dentro de un objeto `div` especial, de esta manera cada item se convierte en un bloque animado al renderizarse:


```md hl_lines="1 6-7" title="Grilla - Elementos simples"
<div class="grid cards" markdown>
- :fontawesome-brands-html5: __HTML__ para contenido y estructura
- :fontawesome-brands-js: __JavaScript__ para interactividad
- :fontawesome-brands-css3: __CSS__ para estilos

> :fontawesome-brands-internet-explorer: __Internet Explorer__ ... para qué?
</div>
```

Con el símbolo `>` se crean bloques con la animación anulada.

El resultado es el mostrado a continuación:


<div class="grid cards" markdown>
- :fontawesome-brands-html5: __HTML__ para contenido y estructura
- :fontawesome-brands-js: __JavaScript__ para interactividad
- :fontawesome-brands-css3: __CSS__ para estilos

> :fontawesome-brands-internet-explorer: __Internet Explorer__ ... para qué?
</div>

### Sintaxis de lista (elementos compuestos)

Los bloques admiten múltiple contenido el cual puede separarse con  la secuencia `---`:


```md title="Grilla - Elementos compuestos"
<div class="grid cards" markdown>

-   :material-clock-fast:{ .lg .middle } __Instala en 5 minutos__

    ---

    Instala [`mkdocs-material`](#) con [`pip`](#) y ejecuta en minutos

    [:octicons-arrow-right-24: Comenzando](#)

-   :fontawesome-brands-markdown:{ .lg .middle } __Es sólo Markdown__

    ---

    Enfóquese en su contenido  y genere un sitio estático adaptable y consultable

    [:octicons-arrow-right-24: Referencia](#)

-   :material-format-font:{ .lg .middle } __Hecho a medida__

    ---

    Cambia los colores, fuentes, lenguaje, íconos, logo  y más con unas pocas líneas

    [:octicons-arrow-right-24: Personalización](#)

-   :material-scale-balance:{ .lg .middle } __Código abierto, MIT__

    ---

    Material for MkDocs se distribuye bajo licencia MIT y está disponible en [GitHub](https://github.com/squidfunk/mkdocs-material)

    [:octicons-arrow-right-24: Licencia](#)

</div>
```

El resultado queda así:

<div class="grid cards" markdown>

-   :material-clock-fast:{ .lg .middle } __Instala en 5 minutos__

    ---

    Instala [`mkdocs-material`](#) con [`pip`](#) y ejecuta en minutos

    [:octicons-arrow-right-24: Comenzando](#)

-   :fontawesome-brands-markdown:{ .lg .middle } __Es sólo Markdown__

    ---

    Enfóquese en su contenido  y genere un sitio estático adaptable y consultable

    [:octicons-arrow-right-24: Referencia](#)

-   :material-format-font:{ .lg .middle } __Hecho a medida__

    ---

    Cambia los colores, fuentes, lenguaje, íconos, logo  y más con unas pocas líneas

    [:octicons-arrow-right-24: Personalización](#)

-   :material-scale-balance:{ .lg .middle } __Código abierto, MIT__

    ---

    Material for MkDocs se distribuye bajo licencia MIT y está disponible en [GitHub](https://github.com/squidfunk/mkdocs-material)

    [:octicons-arrow-right-24: Licencia](#)

</div>




### Sintaxis de bloques


Con la clase CSS `card` se pueden crear bloques de contenido. De estas se puede anular la animación anteponiendo el símbolo `>`



```md title="Tarjetas (cards)" hl_lines="1 12 14"
<div class="grid" markdown>

:fontawesome-brands-html5: __HTML__ para contenido y estructura
{ .card }

:fontawesome-brands-js: __JavaScript__  para interactividad
{ .card }

:fontawesome-brands-css3: __CSS__ para configurar estilos
{ .card }

> :fontawesome-brands-internet-explorer: __Internet Explorer__ ... para qué?

</div>
```

Así se ven las tarjetas creadas:

<div class="grid" markdown>

:fontawesome-brands-html5: __HTML__ para contenido y estructura
{ .card }

:fontawesome-brands-js: __JavaScript__  para interactividad
{ .card }

:fontawesome-brands-css3: __CSS__ para configurar estilos 
{ .card }

> :fontawesome-brands-internet-explorer: __Internet Explorer__ ... para qué?
<!-- { .card } -->

</div>


## Grillas genéricas

Las *grids* permiten englobar con facilidad contenidos distintos. En el ejemplo, se adjuntan dos bloques: uno se ubica a la izquierda y contiene pestañas con listas, mientras el otro contiene el código del bloque izquierdo y se ubica a la derecha.

```md title="Grillas genéricas" hl_lines="1 3-4 9 14-15 25 27"
<div class="grid" markdown>

    <!--  Bloque izquierdo: pestañas -->
    === "Lista desordenada"
            * Inciso A
            * Inciso B
            * Inciso C

    === "Lista ordenada"
        1. Primero
        2. Segundo
        3. Tercero

    <!-- Bloque derecho: bloque de código -->
    ``` title="Contenido de pestañas"
    === "Lista desordenada"
        * Inciso A
        * Inciso B
        * Inciso C

    === "Lista ordenada"
        1. Primero
        2. Segundo
        3. Tercero
    ```

</div>
```
El resultado es el siguiente:
 
<div class="grid" markdown>

=== "Lista desordenada"
    * Inciso A
    * Inciso B
    * Inciso C

=== "Lista ordenada"
    1. Primero
    2. Segundo
    3. Tercero

``` title="Contenido de pestañas"
=== "Lista desordenada"
    * Inciso A
    * Inciso B
    * Inciso C

=== "Lista ordenada"
    1. Primero
    2. Segundo
    3. Tercero
```

</div>




## Referencias



[Sitio oficial - Grids](https://squidfunk.github.io/mkdocs-material/reference/grids/)































