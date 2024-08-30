---
tags:
#   - HTML5
  # - JavaScript
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

# Pestañas de contenido

MkDocs permite agrupar contenido alternativo en varias pestañas, de modo que el usuario pueda seleccionar una u otra.



## Configuración

Las pestañas deben ser habilitadas desde el archivo de configuración:

```yaml
# "mkdocs.yml"
markdown_extensions:
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
```

Hay una opción implementada para que todo el contenido organizado en pestañas se mueva a la misma etiqueta en simultáneo al hacerle click a una de ellas.

Esta opción se habilita en el archivo de configuración:
```yaml
# "mkdocs.yml"
theme:
  features:
    - content.tabs.link
```


## Formato de uso

Las pestañas se crean cada con la secuencia `===` y a continuación se le asigna un nombre. El contenido de las pestañas se coloca a continuación, marcado mediante tabulado.

Ejemplo: dos programas "holamundo" escritos en dos lenguajes distintos


``` md title="Formato de Pestañas" hl_lines="1 13"
=== "C" 

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```


=== "C++"   

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```
```

El resultado se ve a continuación:

=== "C" 
    <!-- Bloque de contenido -->
    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```


=== "C++"   
    <!-- Bloque de contenido -->
    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```

