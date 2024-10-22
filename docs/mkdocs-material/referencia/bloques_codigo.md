---
tags:
#   - HTML
#   - JavaScript
  # - CSS
  - YAML
  - MkDocs
  - Python
#   - Docker
#   - Podman
  - Markdown
#   - TypeScript
---

# Bloques de Código


MkDocs soporta de forma predefinida el uso de bloques de código. Sin embargo, MkDocs incluye varias prestaciones adicionales para los bloques de código tales como el remarcado de renglones, importación de código, copia de bloques con un click, etc.



## Configuración

Hay prestaciones adicionales que se pueden habilitar, para ello se agrega al archivo de configuración:

```  yaml title="Bloques de código - Configuración"
# "mkdocs.yml"
theme:
  features:
    # prestaciones de código
    - content.code.copy         # botón de copia 
    - content.code.annotate     # botones de anotaciones emergentes

markdown_extensions:
  - pymdownx.highlight:
      anchor_linenums: true
      line_spans: __span
      pygments_lang_class: true
  - pymdownx.inlinehilite   # habilita remarcado de renglones
  - pymdownx.snippets       # habilita importar código de otros archivos
  - pymdownx.superfences    # habilita anidado de otros contenidos
```  

## Uso


### Titulo de bloques



Es usa la propiedad `title`  para asignar titulos a los bloques:

```txt title="Formato de título" 
    ```txt title="Título de bloque"
    contenido
    ```
```



```txt title="Título de bloque"
contenido
```


!!! warning "Formato de datos"

    MkDocs obliga a asignar un formato para el bloque (`txt`, `md`, `py`, `js`, etc) para poder usar las propiedades del bloque , incluyendo `title`.




### Remarcado y numeración de líneas

El remarcado de renglones específicos se hace con la propiedad `hl_lines`, en tanto que la numeración automática se activa mediante `linenums`:

```md title="Remarcado y numeración de líneas" 
  ```py title="Ej: funciones en Python" hl_lines="1-3 6"  linenums="1"
  def suma(a, b):
      """Una suma sencilla"""
      return a + b


  valor = suma(2, 3)
  ```
```
En el ejemplo, se especifica que deben remarcarse los renglones entre 1 y 3 , 

```py title="Ej: funciones en Python" hl_lines="1-3 6"  linenums="1"
def suma(a, b):
    """Una suma sencilla"""
    return a + b


valor = suma(2, 3)
```
Observaciones:  

- `linenums` permite elegir el Nº de renglón inicial;
- `hl_lines` permite remarcar tanto rangos de renglones mediane guiones como renglones aislados separados por espacios.


!!! warning "Numeración requerida"

    Tanto `hl_lines` como `linenums` exigen especificar al menos un numero


### Anotaciones

Las anotaciones tienen su propia sintaxis para su uso dentro de bloques de código.

``` md  title="Formato de anotaciones" hl_lines="2 5"
  ``` yaml
  # (1)!
  ```

  1.  El contenido emergente va aquí.
```

``` yaml title="Formato de anotaciones" 
# (1)!
```

1.  El contenido emergente va aquí.


### Bloques en linea


Usando un *shebang* (`#!`) seguido de la abreviación de lenguaje se puede asignar un estilo a los bloques de código en línea embebidos en texto.

``` md title="Inline code blocks"
Ejemplo: la función `#!py range()` se usa para generar una secuencia de números.
```

Ejemplo: la función `#!py range()` se usa para generar una secuencia de números.


### Archivos embebidos 

Con ayuda del plugin ***snippets*** MkDocs es capaz de renderizar archivos de texto dentro de los bloques de código. Para ello se escribe la secuencia `--8<--` y  continuación la ruta del archivo a renderizar entre comillas:

`--8<-- "ruta_archivo"`


Al ubicar la secuencia adentro del bloque de códigos MkDocs lo incorpora completo:


```py title="Archivo embebido - ejemplo"
--8<-- "docs/mkdocs-material/referencia/ejemplo.py"
```

*snippets* soporta el renderizado selectivo de renglones, agregando los números de línea tras la ruta. Notaciones:

|Secuencia| Uso|
|:---|:---|
|`--8<-- "ruta_archivo:n "`| Sólo renglón `n`|
|`--8<-- "ruta_archivo::n "`| Hasta renglón `n`|
|`--8<-- "ruta_archivo:n:m "`| Renglones desde `n` hasta `m`|


Ejemplo: 

```py title="Archivo embebido - seleccion renglones"
--8<-- "docs/mkdocs-material/referencia/ejemplo.py:3:5"
```

Además se admite la selección de un bloque específico del archivo, el cual debe estar delimitado con las secuencias  `--8<-- [start:nombre_seccion]` y `--8<-- [end:nombre_seccion]`. Para invocar el segmento solamente debe agregarse el nombre de la sección a la secuencia:

`--8<-- "ruta_archivo:nombre_seccion"`


Ejemplo: renderizado de la sección `funcion`


<div class="grid" markdown>
```py title="Archivo embebido - marcado sección" hl_lines="2 5"
# (archivo fuente)
# --8<-- [start:funcion]
def mi_funcion(x):
    pass
# --8<-- [end:funcion]
```

```py title="Archivo embebido - renderizado"
--8<-- "docs/mkdocs-material/referencia/ejemplo_seccion.py:funcion"
```
</div>




!!! warning "Ruta desde raíz"

    La ruta de archivo debe ser relativa al directorio raiz del repositorio, de otra forma no lo encuentra. Por ejemplo, si el archivo a renderizar se llama `ejemplo.py` y está ubicado en la ruta `docs/mkdocs-material/referencia/` entonces la secuencia para el renderizado será:

    `--8<-- "docs/mkdocs-material/referencia/ejemplo.py"`




## Referencias

[Sitio oficial - Code Blocks](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/)


[PymDown Extensions - Snippets](https://facelessuser.github.io/pymdown-extensions/extensions/snippets/)

