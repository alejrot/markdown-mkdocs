# mkdocs-static-i18n

Se intentó probar el plugin para habilitar  múltiples lenguajes
llamado `mkdocs-static-i18n`.

[Sitio oficial de `mkdocs-static-i18n`](https://ultrabug.github.io/mkdocs-static-i18n/)

[Resumen](../../docs/mkdocs-material/setup/static-i18n.md)


## Ejecutar (contenedores)

Ejecutar según corresponda:

```bash
docker-compose up
podman-compose up
```


## Links locales

[Ordenamiento: modo carpeta (`folder`)](http://localhost:8000/home/)

[Ordenamiento: modo sufijo (`suffix`)](http://localhost:8001/home/)

[Sobreescritura de texto y estilos`Override`](http://localhost:8002/home/)

[Búsqueda](http://localhost:8003/home/)


## Resultados

- Modo carpeta (`folder`): **EXITO**
- Modo sufijo (`suffix`): **EXITO**
- `override`: **EXITO**

- Búsqueda: **FALLIDO** (aparecen resultados en ambos idiomas)
