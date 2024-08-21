# Navegación

## Configuración

### Carga instantánea


La carga instantánea previene la recarga de la página cuando se clickea un link, haciendo que la página se comporte como una *'Single Page Application'*.


```yaml title="Carga de páginas"
# archivo 'mkdocs.yml'
theme:
  features:
    - navigation.instant            # previene recargas
    - navigation.instant.progress   # progreso de carga (conexiones lentas)
    - navigation.tracking
```



### Pestañas de contenido

Esta opcion genera el despliegue del contenido de la página justo debajo de la barra de header cuando la ventana sea mayor a 1220 pixeles de ancho.



```yaml title="Pestañas"
# archivo 'mkdocs.yml'
theme:
  features:
    - navigation.tabs           # Contenido en pestañas
    - navigation.tabs.sticky    # Las pestañas no se ocultan
```

Las pestañas se ocultan automáticamente al avanzar a lo largo del documento actual. Con la opción `sticky` se previene el ocultamiento de las pestañas al avanzar a lo largo del contenido. 


### Secciones

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


### Integración y Anclado

La opción de integración combina la tabla de contenidos de la página actual, la cual se ubica normalmente a la izquierda, con la barra de secciones ubicada a la derecha. De esta manera se libera el margen derecho para ser usado por el contenido de la página.

```yaml title="Integración y anclado"
# archivo 'mkdocs.yml'
theme:
  features:
    - toc.follow        # ancla actual del sidebar siempre visible
    - toc.integrate   # integra barra derecha (tabla contenidos) adentro de la izquierda (secciones)
```

La opción de anclado hace que el sidebar siempre muestre el ancla actual.



### Boton de regreso

Esta opción agrega un botón emergente que aparece al desplazar (scrollear) la página actual hacia arriba. El botón ayuda a volver rápidamente al título.


```yaml title="Botón de regreso"
# archivo 'mkdocs.yml'
theme:
  features:
    - navigation.top  # boton emergente para volver al inicio  - aparece al intentar subir con el scroll

```



### Ancho de página

El ancho de página máximo se cambia con ayuda de una hoja CSS extra. 

```yaml title="Hoja CSS extra"
# archivo 'mkdocs.yml'
extra_css:
  - stylesheets/ancho_maximo.css
```

La propiedad a afectar es `max-width`.

```css title="Cambio de ancho máximo"
.md-grid {  
    /* página ampliada*/
    max-width:1800px;   
  }
```

### Teclas de navegación

MkDocs reconoce por defecto una serie de teclas de navegación que son las siguientes:

- Modo `search`: si el foco está en la caja de búsqueda:
    - ++arrow-down++ , ++arrow-up++ : Elegir resultado
    - ++esc++ , ++tab++ : Cerrar diálogo de búsqueda
    - ++enter++ : Ir a la página elegida

- Modo `global`: si el foco está fuera de la caja de búsqueda: 
    - ++f++ , ++s++ , ++slash++ : Abrir diálogo de búsqueda
    - ++p++ , ++comma++ : Ir a página previa
    - ++n++ , ++period++ : Ir a página siguiente



Para asignar nuevas teclas o funcionalidades se agrega código JavaScript extra:

```yaml title="Hoja JavaScript extra"
# archivo 'mkdocs.yml'
extra_javascript:
  - javascripts/shortcuts.js
```

En la hoja se debe indicar la tecla y el modo (`search` o `global`) dentro del handler.


``` js title="Handler para tecla X"
// archivo 'shortcuts.js'
keyboard$.subscribe(function(key) {
  if (key.mode === "global" && key.type === "x") {
    /* 
    Código agregado aquí
    */
    key.claim() 
  }
})

```
`key.claim() ` previene que la tecla pulsada afecte otros eventos.



## Uso en documentos

### Ocultamiento de sidebars


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