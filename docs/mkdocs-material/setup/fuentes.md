

# Fuentes




## Google Fonts


Las fuentes remotas de Google se asignan fácilmente invocándolas por su nombre:


``` yaml title="Fuentes de Google - texto y enlaces"
theme:
  font:
    text: Roboto
```

``` yaml title="Fuentes de Google - bloques de código"
theme:
  font:
    code: Roboto Mono
```



## Self-Hosting

Para guardar una réplica local de las fuentes remotas de manera automática habilitar el plugin `privacy`:

``` yaml title="Self-Hosting de fuentes"
plugins:
  - privacy
```

Esto ayuda a cumplir con la Regulacion General de Protección de Datos de la Unión Europea.






## Fuentes adicionales (revisar)


``` yaml title="Fuentes adicionales  - Habilitación"
extra_css:
  - stylesheets/fuentes.css
```


```css  title="Fuentes adicionales- Agregado"
@font-face {
  font-family: "<font>";
  src: "...";
}
```


```css  title="Fuentes adicionales - Uso"
:root {
    --md-text-font: "<font>"; 
    --md-code-font: "<font>";
}
```



## Referencias


[Sitio oficial - cambio de fuentes](https://squidfunk.github.io/mkdocs-material/setup/changing-the-fonts/#additional-fonts-regular-font)