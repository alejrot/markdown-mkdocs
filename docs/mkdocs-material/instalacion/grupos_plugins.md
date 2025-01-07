---
tags:
#   - HTML
  # - JavaScript
  # - CSS
  - YAML
  - MkDocs
#   - Python
#   - Docker
#   - Podman
  # - Markdown
#   - TypeScript
  # - CSV
  - Bash
  - Plugins
---



# Grupos de plugins


Mkdocs incluye preinstalado un plugin llamado `group`, el cual permite ordenar los otros plugins en grupos y habilitarlos o ignorarlos en función de variables de entorno del sistema anfitrión.

El uso de este plugin proporciona algunas ventajas:

- Minimizar los tiempos de deploy y de construcción en entornos que no requieren todas las funcionalidades incluidas en el proyecto;

- Evita el uso de multiples archivos de configuración y también evita su edición en el contexto del despliegue;

- Permite usar distintas dependencias en función del sistema anfitrión, evitando la instalación obligatoria de todos los plugins en todos los sistemas. 



## Configuración

El plugin `group` funciona agrupando los plugins cuyo uso será condicional. 

``` yaml title="Agrupamiento de plugins" 
# archivo "mkdocs.yml"
plugins:
  ....
  - group
    enabled: !ENV VARIABLE_ENTORNO
    plugins:
      - plugin_1
          opciones:
            ....
      - plugin_2
          opciones:
            ....
``` 

El grupo creado está deshabilitado de manera predeterminada. 
Sólo si la variable de entorno elegida existe y además tiene valor `true` se habilitarán y configurarán los plugins listados internamente.


Es posible crear varios grupos de plugins en el mismo proyecto, cada uno dependiente de una variable de entorno distinta:

``` yaml title="Agrupamiento de plugins - múltiples grupos" 
# archivo "mkdocs.yml"
plugins:
  # grupo A
  - group
    enabled: !ENV VARIABLE_1
    plugins:
      - plugin_1
          opciones:
            ....
      - plugin_2
          opciones:
            ....
  # grupo B
  - group
    enabled: !ENV VARIABLE_2
    plugins:
      - plugin_3
          opciones:
            ....
      - plugin_4
          opciones:
            ....
``` 



## Uso

Supóngase que se requiere hacer el despliegue local (comando `serve`).
Para crear la variable de entorno desde BASH y habilitar la ejecución del grupo se hace:

```bash title="Variable de entorno - Habilitación"
export VARIABLE_ENTORNO=true
mkdocs serve
```

En tanto que para deshabilitarla se le cambia el valor:


```bash title="Variable de entorno - Deshabilitación"
export VARIABLE_ENTORNO=false
mkdocs serve
```

La consulta del valor actual de dicha variable se hace desde la misma terminal:

```bash title="Variable de entorno - Consulta"
echo $VARIABLE_ENTORNO
```

Una alternativa es crear la variable de manera temporal:

```bash title="Variable de entorno - Habilitación temporal"
VARIABLE_ENTORNO=true mkdocs serve
```

Estos métodos sirven también para la construcción del sitio (comando `build`).


## Ejemplo aplicado: integración continua y exportacion a PDF

!!! example "Integración continua (CI) y exportacion a PDF"

    ``` yaml title="Configuración de grupos"
    # archivo "mkdocs.yml"
    plugins:
      # habilitacion por grupo 
      # grupo Nº1: servidor remoto ('Continuous Integration')
      - group:
          enabled: !ENV CI
          plugins:
            # soporte para RSS
            - rss:
                match_path: "blog/posts/.*"
                date_from_meta:
                  as_creation: date.created
                  as_update: date.updated
            # fechas de repositorio
            - git-revision-date-localized:
                enabled: true
                enable_creation_date: true
                type: date        # fecha
                fallback_to_build_date: true
            # Tarjetas PNG automáticas 
            - social:
                cards_layout_options:
                  background_color: "#9966CC"  
      # grupo Nº2: entorno local , conversion del sitio a PDF
      - group:  
          # creacion de documento PDF del sitio
          enabled: !ENV PDF_EXPORT
          plugins:
            - pdf-export:
                verbose: true                      # reporte largo por terminal 
                media_type: print                  # estilo CSS para impresión
                combined: true                     # renderizar todas las paginas del  proyecto
    ``` 

    ```bash title="Integración Continua (servidor remoto)"
    CI=true mkdocs serve
    ```

    ```bash title="Exportación a PDF (local)"
    PDF_EXPORT=true mkdocs build
    ```
    Más información de los plugins usados:

    [`rss`](../setup/rss.md) 
    [`git-revision-date-localized`](../setup/componentes.md) 
    [`pdf-export`](./guardado_pdf.md)



## Referencias

[Material for MkDocs - Group plugin](https://squidfunk.github.io/mkdocs-material/plugins/group/)