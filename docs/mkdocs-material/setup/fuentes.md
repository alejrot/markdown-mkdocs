

# Fuentes




## Google Fonts


Las fuentes remotas de Google se asignan fácilmente invocándolas por su nombre:


``` yaml title="Fuentes de Google - texto y enlaces"
# "mkdocs.yml"
theme:
  font:
    text: Roboto
```

``` yaml title="Fuentes de Google - bloques de código"
# "mkdocs.yml"
theme:
  font:
    code: Roboto Mono
```



## Self-Hosting

Para guardar una réplica local de las fuentes remotas de manera automática habilitar el plugin `privacy`:

``` yaml title="Self-Hosting de fuentes"
# "mkdocs.yml"
plugins:
  - privacy
```

Esto ayuda a cumplir con la Regulacion General de Protección de Datos de la Unión Europea.






## Fuentes adicionales (revisar)


``` yaml title="Fuentes adicionales  - Habilitación"
# "mkdocs.yml"
extra_css:
  - stylesheets/fuentes.css
```


```css  title="Fuentes adicionales- Agregado"
/* "fuentes.css" */
@font-face {
  font-family: "<font>";
  src: "...";
}
```


```css  title="Fuentes adicionales - Uso"
  /* "fuentes.css" */
:root {
    --md-text-font: "<font>"; 
    --md-code-font: "<font>";
}
```



## Referencias


[Sitio oficial - cambio de fuentes](https://squidfunk.github.io/mkdocs-material/setup/changing-the-fonts/#additional-fonts-regular-font)