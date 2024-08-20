# Navegación



## Carga instantánea


La carga instantánea previene la recarga de la página cuando se clickea un link, haciendo que la página se comporte como una *'Single Page Application'*.


```yaml title="Carga de páginas"
# archivo 'mkdocs.yml'
theme:
  features:
    - navigation.instant            # previene recargas
    - navigation.instant.progress   # progreso de carga (conexiones lentas)
    - navigation.tracking
```



## Pestañas de contenido

Esta opcion genera el despliegue del contenido de la página justo debajo de la barra de header cuando la ventana sea mayor a 1220 pixeles de ancho.



```yaml title="Pestañas"
# archivo 'mkdocs.yml'
theme:
  features:
    - navigation.tabs
    - navigation.tabs.sticky
```

Las pestañas se ocultan automáticamente al avanzar a lo largo del documento actual. Con la opción `sticky` se previene el ocultamiento de las pestañas al avanzar a lo largo del contenido. 


## Secciones

La barra de secciones es la barra izquierda de la página, donde se muestra la lista de documentos y su organización en grupos, llamados precisamente *"secciones"*


```yaml title=""
# archivo 'mkdocs.yml'
theme:
  features:
    - navigation.sections   # Muestra títulos para los contenidos en la barra izquierda
    - navigation.expand     # Expansión - Expande la lista de contenidos por defecto
    - navigation.prune      # Poda - Quita la lista de contenidos no visibles
    - navigation.indexes    # Permite agregar varios archivos a una sección
```

Las opciones `expand` y `prune` son antagónicas e incompatibles entre sí. La primera despliega todas las subsecciones en tanto que la segunda recorta las subsecciones no visibles para facilitar la construcción.

La opción `indexes` permite agregar archivos a la secciones preestablecidas. [Ver más](https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation/#section-index-pages-with-section-index-pages).


## Integración y Anclado

La opción de integración combina la tabla de contenidos de la página actual, la cual se ubica normalmente a la izquierda, con la barra de secciones ubicada a la derecha. De esta manera se libera el margen derecho para ser usado por el contenido de la página.

```yaml title="Integración y anclado"
# archivo 'mkdocs.yml'
theme:
  features:
    - toc.follow        # ancla actual del sidebar siempre visible
    - toc.integrate   # integra barra derecha (tabla contenidos) adentro de la izquierda (secciones)
```

La opción de anclado hace que el sidebar siempre muestre el ancla actual.



## Boton de regreso

Esta opción agrega un botón emergente que aparece al desplazar (scrollear) la página actual hacia arriba. El botón ayuda a volver rápidamente al título.


```yaml title="Botón de regreso"
# archivo 'mkdocs.yml'
theme:
  features:
    - navigation.top  # boton emergente para volver al inicio  - aparece al intentar subir con el scroll

```

## Ocultamiento de sidebars


Las barras paralelas se ocultan desde el encabezamiento de cada página.

```md   title="Ocultamiento de barras laterales"
---
hide:
  - navigation
  - toc
---
```





## Referencias

[Sitio oficial - Configurando la navegación](https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation)