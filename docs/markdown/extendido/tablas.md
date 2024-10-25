---
tags:
#   - HTML
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


# Tablas

Markdown permite trazar tablas de una manera relativamente rápida y sencilla.

## Sintaxis

El maquetado de las tablas se realiza con barras verticales (`|`) para delimitar las columnas, 
y al menos tres guiones (`---`) para delimitar los encabezamientos de tabla.

<div class="grid" markdown>
```md
| Columna 1 | Columna 2 | Columna 3 |
|------ | ------| ------|
| A      | $\alpha$ |  1     |
| B      | $\beta$  |  2     |
| C      | $\gamma$ |  3     |
```

| Columna 1 | Columna 2 | Columna 3 |
|------ | ------| ------|
| A      | $\alpha$ |  1     |
| B      | $\beta$  |  2     |
| C      | $\gamma$ |  3     |


</div>


## Alineación de columnas

Los elementos de cada columna se alinean a izquierda salvo indicación contraria. 
Esto se modifica con el uso de los dos puntos (`:`) 
en la segunda fila, 
a los lados de los guiones:

|Uso dos puntos| Alineación contenido|
|-----|----|
|`---` (sin puntos) |Izquierda (predeterminado) |
|`:---` |Izquierda  |
|`---:` |Derecha    |
|`:---:`|Centrado   |

En el ejemplo se muestra la alineación a izquierda (columna 1), centro (columna 2) y derecha (columna 3):

<div class="grid" markdown>
```md
| Columna 1 | Columna 2 | Columna 3 |
|:------ | :-------:| ------:|
| A      | $\alpha$ |  1     |
| B      | $\beta$  |  2     |
| C      | $\gamma$ |  3     |
```


| Columna 1 | Columna 2 | Columna 3 |
|:------ | :-------:| ------:|
| A      | $\alpha$ |  1     |
| B      | $\beta$  |  2     |
| C      | $\gamma$ |  3     |

</div>


## Referencias

[Markdown Guide.org - Tables](https://www.markdownguide.org/extended-syntax/#tables)