

# Anotaciones


Las anotaciones emergentes (*annotations*) son iconos con contenido emergente (1) de diverso tipo.
{.annotate}

1. Este es un ejemplo :thumbsup:


## Configuración

Las *annotations* deben habilitarse en el archivo de configuración:

``` yaml 
# "mkdocs.yml"
markdown_extensions:
  - attr_list
  - md_in_html
  - pymdownx.superfences
```


## Icono de anotaciones

El ícono que muestra el documento se puede cambiar en el archivo de configuraciones:

``` yaml 
# "mkdocs.yml"
theme:
  icon:
    annotation: material/arrow-right-circle 
```

Algunos iconos usados habitualmente en MkDocs para las anotaciones son los siguientes:

|Iconos| Código en YML|
|---|---|
|:material-plus-circle: | `material/plus-circle`|
| :material-circle-medium:| `material/circle-medium`|
| :material-record-circle:| `material/record-circle`|
| :material-arrow-right-circle:| `material/arrow-right-circle` |
| :material-arrow-right-circle-outline: | `material/arrow-right-circle-outline` |
| :material-chevron-right-circle:| `material/chevron-right-circle` |
| :material-star-four-points-circle:| `material/star-four-points-circle`|
| :material-plus-circle-outline:| `material/plus-circle-outline` |

## Uso de anotaciones

### Uso general

Se asigna un numero de anotación entre paréntesis y al finalizar la oración se pone en el renglón inmediatamente inferior `{ .annotate }`


``` md hl_lines="2"
En este texto coloco una anotación (1) desplegable. 
{ .annotate }  

El texto puede continuar aquí.

1. Contenido desplegable :palm_up_hand:
```


En este texto coloco una anotación (1) desplegable. 
{ .annotate }

El texto puede continuar aquí.

1. Contenido desplegable :palm_up_hand:


