---
tags:
  - HTML5
  # - JavaScript
  # - CSS
  - YAML
  - MkDocs
#   - Python
#   - Docker
#   - Podman
  # - MarkDown
#   - TypeScript
  # - CSV
#   - Bash
---


# Sobreescritura y Personalización

## Configuración

Se indica la carpeta que contendrán los componentes a agregar o modificar. 


``` yaml title="Directorio de sobreescritura"        hl_lines="4"
# "mkdocs.yml"
theme:
  name: material
  custom_dir: overrides
```

Esta carpeta es llamada típicamente `overrides` (*"anula", "invalida"*).



## Estructura del tema

Los componentes a modificar se cargan en archivos de la carpeta indicada respetando la organización original del tema usado.

En el caso de Material, la organización es:

```bash title="Estructura del tema Material"
.
├─ .icons/                             # Bundled icon sets
├─ assets/
│  ├─ images/                          # Images and icons
│  ├─ javascripts/                     # JavaScript files
│  └─ stylesheets/                     # Style sheets
├─ partials/
│  ├─ integrations/                    # Third-party integrations
│  │  ├─ analytics/                    # Analytics integrations
│  │  └─ analytics.html                # Analytics setup
│  ├─ languages/                       # Translation languages
│  ├─ actions.html                     # Actions
│  ├─ alternate.html                   # Site language selector
│  ├─ comments.html                    # Comment system (empty by default)
│  ├─ consent.html                     # Consent
│  ├─ content.html                     # Page content
│  ├─ copyright.html                   # Copyright and theme information
│  ├─ feedback.html                    # Was this page helpful?
│  ├─ footer.html                      # Footer bar
│  ├─ header.html                      # Header bar
│  ├─ icons.html                       # Custom icons
│  ├─ language.html                    # Translation setup
│  ├─ logo.html                        # Logo in header and sidebar
│  ├─ nav.html                         # Main navigation
│  ├─ nav-item.html                    # Main navigation item
│  ├─ pagination.html                  # Pagination (used for blog)
│  ├─ palette.html                     # Color palette toggle
│  ├─ post.html                        # Blog post excerpt
│  ├─ progress.html                    # Progress indicator
│  ├─ search.html                      # Search interface
│  ├─ social.html                      # Social links
│  ├─ source.html                      # Repository information
│  ├─ source-file.html                 # Source file information
│  ├─ tabs.html                        # Tabs navigation
│  ├─ tabs-item.html                   # Tabs navigation item
│  ├─ tags.html                        # Tags
│  ├─ toc.html                         # Table of contents
│  ├─ toc-item.html                    # Table of contents item
│  └─ top.html                         # Back-to-top button
├─ 404.html                            # 404 error page
├─ base.html                           # Base template
├─ blog.html                           # Blog index page
├─ blog-archive.html                   # Blog archive index page
├─ blog-category.html                  # Blog category index page
├─ blog-post.html                      # Blog post page
└─ main.html                           # Default page
```

## Sobreescribir componentes


Para esto se crea un archivo con el nombre y la ruta relativa correspondiente al componente y se le asigna el contenido deseado. El componente original se borra por completo.

```bash title="Ejemplo - Borrar footer" hl_lines="4"
.                       # Ruta raiz del proyecto
├─ overrides/           
│  └─ partials/
│     └─ footer.html    # archivo vacío
└─ mkdocs.yml 
```

## Sobreescribir bloques


```bash title="Agregar renderizado de bloques" hl_lines="3"
.                       # Ruta raiz del proyecto
├─ overrides/
│  └─ main.html         # Archivo con plantilla
└─ mkdocs.yml
```

Al archivo `main.html` se le agregan las templates con los elementos a agregar o reemplazar. Por ejemplo, para agregar una barra de anuncios:


``` html title="Renderizado - Agregando anuncio" hl_lines="1 3 5"
{% extends "base.html" %}

{% block announce %}
  <p>(El anuncio va justo arriba del navbar).</p>
{% endblock %}
```


Los bloques reescribibles de esta manera son:



| nombre de bloque	| Propósito|
|:---:|:---|
| `analytics`	| Wraps the Google Analytics integration|
| `announce`	| Wraps the announcement bar|
| `config`	| Wraps the JavaScript application config|
| `container`	| Wraps the main content container|
| `content`	| Wraps the main content|
| `extrahead`	| Empty block to add custom meta tags|
| `fonts`	| Wraps the font definitions|
| `footer`	| Wraps the footer with navigation and copyright|
| `header`	| Wraps the fixed header bar|
| `hero`	| Wraps the hero teaser (if available)|
| `htmltitle`	| Wraps the `<title>` tag|
| `libs`	| Wraps the JavaScript libraries (header)|
| `outdated`	| Wraps the version warning|
| `scripts`	| Wraps the JavaScript application (footer)|
| `site_meta`	| Wraps the meta tags in the document head|
| `site_nav`	| Wraps the site navigation and table of | contents|
| `styles`	| Wraps the style sheets (also extra sources)|
| `tabs`| Wraps the tabs navigation (if available)|






## Referencias


[Sitio oficial - Personalización](https://squidfunk.github.io/mkdocs-material/customization/)