
# Componentes


## Header y barra anuncios


### Header automático

``` yaml title="Header - Ocultamiento automatico"
# "mkdocs.yml"
theme:
  features:
    - header.autohide
```

### Barra anuncios con cierre

``` yaml title="Header - Cierre de anuncios"
# "mkdocs.yml"
theme:
  features:
    - announce.dismiss
```



## Footer


### Habilitación


``` yaml title="Footer - Botones navegación"
# "mkdocs.yml"
theme:
  features:
    - navigation.footer
```



### Redes sociales

Agrega al *footer* enlaces a redes sociales. El formato es el siguiente:

``` yaml title="Footer - Enlaces a redes sociales"
extra:
  social:
    # enlace a Mastodon
    - icon: fontawesome/brands/mastodon 
      link: https://fosstodon.org/
      name: Ir a Mastodon
    #  enlace al correo
    - icon: fontawesome/solid/paper-plane
      link: mailto:<email-address>
      name: Enviar correo
```

Los enlaces aceptan URLs y direcciones de correo.



### Anular banner de MkDocs Material 

El banner 'Made with Material for MkDocs' se puede ocultar fácilmente:

``` yaml title="Footer - Sin promoción"
# "mkdocs.yml"
extra:
  generator: false
```

Por supuesto, los creadores del framework piden dejarlo a modo de promoción del proyecto.



### Copyright

El copyright se asigna con la propeidad `copyright`: 

``` yaml title="Footer - Copyright"
# "mkdocs.yml"
copyright: Copyright &copy; 2030 Aquiles Brinco
```







## Repositorio del proyecto



### Ruta y nombre


``` yaml title="Repositorio - Ruta y nombre"
# "mkdocs.yml"
repo_url: https://github.com/MarceloMarot/MarkDown_MKDocs
repo_name: MarkDown_MKDocs
```


!!! warning "URL real"
    Para que el botón del repositorio aparezca debe asignársele una dirección real.

### Icono

``` yaml title="Repositorio - Icono"
# "mkdocs.yml"
theme:
  icon:
    repo: fontawesome/brands/github
```


Iconos habituales:

| Símbolo | Texto |
|:---:|:---:|
| :fontawesome-brands-git:  | `fontawesome/brands/git `      |
| :fontawesome-brands-git-alt:  | `fontawesome/brands/git-alt`   |
| :fontawesome-brands-github:  | `fontawesome/brands/github`    |
| :fontawesome-brands-github-alt:  | `fontawesome/brands/github-alt`|
| :fontawesome-brands-gitlab:   | `fontawesome/brands/gitlab`    |
| :fontawesome-brands-gitkraken:   | `fontawesome/brands/gitkraken` |
| :fontawesome-brands-bitbucket:  | `fontawesome/brands/bitbucket` |
| :fontawesome-solid-trash:   | `fontawesome/solid/trash`      |


### Acciones de código


El primer paso es configurar la ruta 


``` yaml title="Repositorio - Branch"
# "mkdocs.yml"
edit_uri: edit/master/docs/   # caso rama 'master'
edit_uri: edit/main/docs/     # caso rama 'main'
```

GitHub reconoce dos acciones : `view` y `edit`. MkDocs proporciona botones para ambos al comienzo de la página, los cuales se habilitan en la página de configuración:

``` yaml title="Repositorio - Branch"
# "mkdocs.yml"
theme:
  features:
    - content.action.edit
    - content.action.view
```

Los íconos de ambos son reemplazables:

``` yaml title="Repositorio - Iconos de acciones"
# "mkdocs.yml"
theme:
  icon:
    edit: material/pencil 
    view: material/eye
```


#### Fecha de revisión


Se hace uso de un plugin extra llmamado `mkdocs-git-revision-date-localized-plugin` que agrega información de la fecha de creación y de modificación de páginas. El resultado se muestra en forma de botones cerca del pie de página.



!!! warning "Instalación"


    Este plugin **no está incorporado** en el paquete PIP ni en la imagen de Docker, por ello debe ser instalado para su uso:

    ```bash title="git-revision - Instalacion"
    pip install mkdocs-git-revision-date-localized-plugin
    ```

    
Este plugin se habilita desde la sección `plugins` del archivo YAML:


``` yaml title="Repositorio - Iconos de acciones"
# "mkdocs.yml"
plugins:
  - git-revision-date-localized:
      enabled: true               # fecha de modificación de página
      enable_creation_date: true  # fecha de creación de página
      type: date                  
      fallback_to_build_date: true
```

### Colaboradores


Mkdocs es compatible con dos plugins externos llamados *git-committers*(`mkdocs-git-committers-plugin-2`) y *git-authors* (`mkdocs-git-authors-plugin`). [Ver más información.](https://squidfunk.github.io/mkdocs-material/setup/adding-a-git-repository/#document-contributors)




## Uso


### Anular footer

Dentro de las páginas MD se puede ordenar el ocultamiento del *footer*.

```md title="Pagina actual - Excluir footer"
---
hide:
  - footer
---
```











## Referencias


[Página oficial - Header](https://squidfunk.github.io/mkdocs-material/setup/setting-up-the-header/)

[Página oficial - Footer](https://squidfunk.github.io/mkdocs-material/setup/setting-up-the-footer/)


[Página oficial - Repositorio Git](https://squidfunk.github.io/mkdocs-material/setup/adding-a-git-repository/)