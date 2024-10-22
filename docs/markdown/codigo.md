---
tags:
#   - HTML5
  # - JavaScript
#   - CSS
#   - YAML
#   - MkDocs
#   - Python
#   - Docker
#   - Podman
  - Markdown
#   - TypeScript
  # - CSV
#   - Bash
---




# Bloques de Código

Los bloques de código son uno de los elementos más potentes y cómodos que proporciona Markdown. 

## Tabulación

Hay varias maneras de crear bloques de código.
Una de ellas es la **tabulación** del bloque de código:

``` md title="uso de tabulación"
    <!--Mi HTML-->
    <h1> este es mi codigo</h1>
```
Dando como resultado el siguiente bloque:

    <!--Mi HTML-->
    <h1> este es mi codigo</h1>


## Triple acento invertido

La otra opción es el uso del triple acento invertido \`\`\` antes y después del bloque de código:

```md  title="uso de triple acento invertido"
    ```
    <!--Mi HTML-->
    <h1> este es mi codigo</h1>
    ```
```

Este método permite agregar **estilos** al código, asignando el nombre del lenguaje de código justo después de la apertura del bloque. 

Por ejemplo, al indicar que el código es HTML tras los acentos:
``` md title="Bloque HTML" hl_lines="1"
    ```html
    <!--Mi HTML-->
    <h1> este es mi codigo</h1>
    ```
```

Da como resultado que el intérprete de Markdown le de color a los comentarios, palabras reservadas, etc:

```html
<!--Mi HTML-->
<h1> este es mi codigo</h1>
```

El nombre del lenguaje se indica con minúsculas. 
También pueden usarse diminutivos para indicar el lenguaje: 
`py` para Python, 
`js` para JavaScript, 
`md` para Markdown, etc.



## Segmentos de texto

Si se require marcar como código un `segmento de texto`
dentro de un párrafo se usan comillas invertidas simples para rodearlo:

```md title="segmento de texto"
Hay un poco de `código` en mi párrafo.
```

**Resultado:** Hay un poco de `código` en mi párrafo.