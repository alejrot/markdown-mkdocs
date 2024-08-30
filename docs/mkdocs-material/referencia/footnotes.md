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

# Notas al Pie (*footnotes*)


Las *footnotes* pertenecen a la sintaxis extendida de Markdown. Consisten en una anotación que aparece al final de la página a la cual se puede acceder clickeando un enlace.



## Configuración

Las notas al pie deben habilitarse para su uso:


```yaml title="Footnotes - Habilitación"
# 'mkdocs.yml'
markdown_extensions:
  - footnotes
```

## Sintaxis


Las notas al pie[^1] se crean junto después del texto donde se llaman[^2]. 

[^1]: primera referencia: renglón simple
[^2]: 
    segunda referencia: párrafo

```md title="Footnotes - Sintaxis"
Las notas al pie[^1] se crean junto después del texto donde se llaman[^2]. 

[^1]: primera referencia: renglón simple
[^2]: 
    segunda referencia: párrafo
```