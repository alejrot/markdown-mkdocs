

# Íconos y Emojis


MkDocs-Material incluye emojis e íconos de 


- Material Design
- FontAwesome
- Octicons
- Simple Icons


## Configuración 

``` yaml
# "mkdocs.yml"
markdown_extensions:
  - attr_list
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
```

## Uso






## Referencias

[Sitio oficial de Mkdocs-Material](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/)