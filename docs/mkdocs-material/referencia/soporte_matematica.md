# Soporte para Matematicas


MkDocs es compatible con dos blibliotecas para renderizar contenido matemático, llamadas MathJax y KaTex.



## Configuración



=== "MathJax"

    ``` yml
    # "mkdocs.yml"
    markdown_extensions:
    - pymdownx.arithmatex:
        generic: true

    extra_javascript:
    - javascripts/mathjax.js
    - https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js
    ```




=== "KaTex"

    ``` yml 
    # "mkdocs.yml"
    markdown_extensions:
    - pymdownx.arithmatex:
        generic: true

    extra_javascript:
    - javascripts/katex.js
    - https://unpkg.com/katex@0/dist/katex.min.js
    - https://unpkg.com/katex@0/dist/contrib/auto-render.min.js

    extra_css:
    - https://unpkg.com/katex@0/dist/katex.min.css
    ```


Nótese que ambas opciones requieren acceso a bibliotecas remotas, lo cual puede solventarse haciendo una copia local y adjhuntándola al proyecto.

Además, ambas bibliotecas requieren contenido JavaScript adicional:


=== "MathJax"

    ``` js
    // archivo "docs/javascripts/mathjax.js"
    window.MathJax = {
        tex: {
            inlineMath: [["\\(", "\\)"]],
            displayMath: [["\\[", "\\]"]],
            processEscapes: true,
            processEnvironments: true
        },
        options: {
            ignoreHtmlClass: ".*|",
            processHtmlClass: "arithmatex"
        }
        };

    document$.subscribe(() => { 
        MathJax.startup.output.clearCache()
        MathJax.typesetClear()
        MathJax.texReset()
        MathJax.typesetPromise()
        })
    ```




=== "KaTex"

    ``` js
    // archivo "docs/javascripts/katex.js"
    document$.subscribe(({ body }) =>{ 
        renderMathInElement(body, {
            delimiters: [
            { left: "$$",  right: "$$",  display: true },
            { left: "$",   right: "$",   display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
            ],
        })
    })
    ```

??? info "Notaciones recomendadas"
    Las dos notaciones recomendadas por MarkDown para crear bloques de fórmulas son el uso de `$$  $$` y de `\[  \]`. También pueden usarse delimitadores simples

    ```md title="Delimitadores de fórmula rrecomendados"
    $$  A = \pi*r^{2}  $$

    \[ A = \pi*r^{2}  \]
    ```



!!! warning "Uso de espacios con delimitadores simples"
    En caso de usar delimitadores `$` simples, MathJax es sensible a los espacios en blanco dentro de los bloques de fórmula.
    ```md title="Renderizado correcto"
    $A = \pi*r^{2}$    
    ```

    ```md title="Renderizado fallido"
    $ A = \pi*r^{2} $   
    ```


## Comparativa


### MathJax:

- Soporta una gran variedad de comandos LaTeX.
- Soporta MathML, que es legible por lectores de pantalla
- Tiene mejor compatibilidad con navegadores antiguos. 
- Es muy configurable.


### KaTex:

- Es muy rápido renderizando.