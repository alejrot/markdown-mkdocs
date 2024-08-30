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

# Analíticas


## Google Analytics

MkDocs incluye integración con Google Analytics, el cual genera estadísticas de visitas del sitio web. Para incorporar el tracking de Google al proyecto agregar al archivo de configuración: 

``` yaml title="Logo de página - ícono" hl_lines="4-6"
# "mkdocs.yml"
extra:
  # habilitar Google Analytics
  analytics:
    provider: google
    property: G-XXXXXXXXXX      # clave de sitio
    # encuesta emergente (opcional)
    feedback:
      title: Was this page helpful?
      ratings:
        # voto positivo
        - icon: material/emoticon-happy-outline
          name: This page was helpful
          data: 1
          note: >-
            Thanks for your feedback!
        # voto negativo
        - icon: material/emoticon-sad-outline
          name: This page could be improved
          data: 0
          note: >- 
            Thanks for your feedback! Help us improve this page by
            using our <a href="..." target="_blank" rel="noopener">feedback form</a>.
```

La encuesta es opcional y permite al usuario votar el contenido. El resultado es recibido por Google Analytics. A la encuesta se le pueden adjuntar formularios tanto internos al proyecto como externos.

Los íconos más habituales para la encuesta son:

|Iconos | claves |
|:---:|:----|
  :material-emoticon-happy-outline: + :material-emoticon-sad-outline: |`material/emoticon-happy-outline` + `material/emoticon-sad-outline`|
 :material-thumb-up-outline: + :material-thumb-down-outline: | `material/thumb-up-outline` + `material/thumb-down-outline` |
 | :material-heart: + :material-heart-broken: | `material/heart` + `material/heart-broken` |










## Uso


Las encuestas pueden ser ocultadas en págias especificas con ayuda del encabezamiento:


``` md title="Excluir Encuesta "
<!-- Header para el archivo MD -->
---
hide:
  - feedback
---
<!-- Contenido -->
# Titulo
```





## Referencias

[Sitio oficial - Setting analytics](https://squidfunk.github.io/mkdocs-material/setup/setting-up-site-analytics/)