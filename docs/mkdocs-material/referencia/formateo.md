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
  - Markdown
#   - TypeScript
  # - CSV
---


# Formateo


## Configuración

Se llaman a las extensiones  necesarias desde el archivo de configuración:


```yaml title="habilitación de formatos"
# 'mkdocs.yml'
markdown_extensions:
  - pymdownx.critic
  - pymdownx.caret
  - pymdownx.keys
  - pymdownx.mark
  - pymdownx.tilde
```


## Uso


### Remarcado de cambios


|Sintaxis| Efecto |
|:---:|:---:|
|`{--deleted--}`|{--deleted--}|
|`{++added++}`|{++added++}|
|`{~~one~>a single~~}`|{~~one~>a single~~}|
|`{==Highlighting==}`|  {==Highlighting==}|
|`{>>and comments can be added inline<<}`|{>>and comments can be added inline<<}|








### Remarcado de texto

|Sintaxis| Efecto |
|:---:|:---:|
| `==highlight==` |  ==highlight== |
| `^^underline^^` | ^^underline^^ |
| `~~strikethrough~~`| ~~strikethrough~~ |


### Subíndices y Superíndices

Rodear contenido con el signo `~` permite crear subíndices, en tanto que hacerlo con el signo `^` permite crear superíndices:


|Sintaxis| Efecto |
|:---:|:---:|
| `H~2~O` | H~2~O |
| `A^T^A` | A^T^A |


!!! hint "Atajos de teclado (español)"

    `~`: ++altgr+4++




### Combinaciones de Teclas


Se puede invocar el renderizado gráfico de combinaciones del teclado, rodeando las combinaciones entre doble signo suma (`++`). Las letras se deben indicar en minúsculas.

Ejemplos:

```md title="Combinaciones de letras - Sintaxis"
++ctrl+a++

++alt+f4++

++ctrl+alt+del++

++altgr+4++
``` 

++ctrl+a++

++alt+f4++

++ctrl+alt+del++

++altgr+4++



## Referencias

[Documentación oficial - Formatting](https://squidfunk.github.io/mkdocs-material/reference/formatting/)