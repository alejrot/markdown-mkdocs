# Bloques de Código


MkDocs soporta de forma predefinida el uso de bloques de código. Sin embargo, MkDocs incluye varias prestaciones adicionales para los bloques de código tales como el remarcado de renglones, importación de código, copia de bloques con un click, etc.



## Configuración

Hay prestaciones adicionales que se pueden habilitar, para ello se agrega al archivo de configuración:

```  yaml
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

```md title="Formato de título" 
  ``` title="Formato de título"
  contenido
  ```
```

``` title="Formato de título"
contenido
```

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


### Archivos embebidos (REVISAR)



``` title="ejemplo.py"
-8<-- ".ejemplo.py"
-8<-- "ejemplo.py"
```


<!-- 
--8<-- "ejemplo.py"
--8<-- ".ejemplo.py"
-->


EJEMPLO 1

--8<-- 
ejemplo.py
--8<-- 

EJEMPLO 2

--8<-- 
.ejemplo.py
--8<--