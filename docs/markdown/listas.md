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


# Listas y Viñetas


## Listas ordenadas

Las listas se crean con un número y un punto al comienzo de cada item. 
Si se agrega tabulado adelante de un ítem entonces éste pasa a ser parte de una sublista.


Ejemplo:

<div class="grid" markdown>
```md
1. Primero
2. Segundo
3. Tercero
    1. Subitem 1
    1. Subitem 2
        1. Extra 2
        1. Extra 2
        1. Extra 3
1. Cuarto
```

1. Primero  
2. Segundo  
3. Tercero  
    1. Subitem 1
    1. Subitem 2
        1. Extra 2
        1. Extra 2
        1. Extra 3
1. Cuarto  

</div>

Nótese que Markdown corrige automáticamente los números de listas mal asignados. 
Además asigna distintos caracteres para cada jerarquía:

- números arábigos;
- letras minúsculas;
- números romanos.


!!! warning "Fines de línea"

    Hay que asegurarse de dejar al menos un renglón vacío entre la lista y el párrafo previo para asegurar el correcto renderizado.



## Viñetas (listas no ordenadas)
Las viñetas se crean con guiones al comienzo de cada item. Se permite crear sublistas mediante indentación.


Ejemplo:

<div class="grid" markdown>
```md
- Primero
- Segundo
    - Subitem 1
    - Subitem 2
        - extra 1 
        - extra 2
- Tercero
```

- Primero
- Segundo
    - Subitem 1
    - Subitem 2
        - extra 1 
        - extra 2
- Tercero


</div>