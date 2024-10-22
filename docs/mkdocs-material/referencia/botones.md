---
tags:
#   - HTML
#   - JavaScript
  # - CSS
  - YAML
  - MkDocs
  # - Python
#   - Docker
#   - Podman
  - Markdown
#   - TypeScript
---

# Botones

Los enlaces de Markdown se pueden convertir en botones gráficos agregando unas pocas propiedades CSS predefinidas.



## Configuración

Los botones se habilitan con el plugin *Attribute Lists*:

```  yaml title="Botones - Habilitación"
# "mkdocs.yml"
markdown_extensions:
  - attr_list
```  

## Uso

### Boton vacío

El botón se crea agregando la propiedad CSS `.md-button` a continuación del enlace MD:

``` md title="Botón vacío"
[Texto botón](ruta_enlace){.md-button}
```

``` md title="Botón vacío"
[Texto botón](#){.md-button}
```

[Texto botón](#){.md-button}

La propiedad CSS debe rodearse entre corchetes para funcionar.


### Botón primario (relleno)

El relleno se le agrega al botón con ayuda de la propiedad CSS `.md-button--primary`:

``` md title="Botón primario"
[Texto botón](#){.md-button .md-button--primary}
```

[Texto botón](#){.md-button .md-button--primary}


La clase `.md-button` debe incluirse; de otro modo el enlace se verá como un texto remarcado:

``` md title="Botón primario - clase faltante"
[Texto botón](#){ .md-button--primary}
```

[Texto botón](#){ .md-button--primary}

### Iconos internos

Los íconos y emojis se agregan como parte del texto del enlace:

``` md title="Botones con íconos"
[Texto botón :fontawesome-brands-whatsapp:](#){.md-button}
[Texto botón :fontawesome-solid-paper-plane:](#){.md-button .md-button--primary}
```

[Texto botón :fontawesome-brands-whatsapp:](#){.md-button}
[Texto botón :fontawesome-solid-paper-plane:](#){.md-button .md-button--primary}

Los iconos se manejan con la notación habitual de MkDocs. 
[Más sobre el uso de íconos y emojis](iconos_emojis.md)


## Referencias

[Sitio oficial - Buttons](https://squidfunk.github.io/mkdocs-material/reference/buttons/)
