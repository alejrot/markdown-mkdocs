# Bloques de Código


MkDocs soporta de forma predefinida el uso de bloques de código. 



## Configuración

Hay prestaciones adicionales que se pueden habilitar, para ello se agrega al archivo de configuración:

``` yml
# "mkdocs.yml"
markdown_extensions:
  - pymdownx.highlight:
      anchor_linenums: true
      line_spans: __span
      pygments_lang_class: true
  - pymdownx.inlinehilite   # habilita remarcado de renglones
  - pymdownx.snippets       # habilita importar código de otros archivos
  - pymdownx.superfences    # habilita anidado de otros contenidos
```

