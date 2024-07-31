# Matematicas


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


Ambas bibliotecas requieren contenido JavaScript adicional:


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