---
tags:
#   - HTML
  # - JavaScript
#   - CSS
#   - YAML
#   - MkDocs
#   - Python
#   - Docker
#   - Podman
  - Markdown
#   - TypeScript
  # - CSV
#   - Bash
---


# Notas al pie


Las notas al pie (*footnotes*) son notas explicativas 
que aparecen al final del documento 
y que se referencian con un vínculo integrado.
Los *footnotes* se crean en dos pasos:

- Se crea un *tag* rodeado por la secuencia `[^ ]` 
dentro del texto a expandir;
- Se repite la secuencia con el *tag* más abajo, 
se le agregan dos puntos 
y a su derecha se coloca el texto del pie.
- Si se necesita agregar más contenido a la nota 
éste es indentado y agregado a continuación.



``` md title="Footnotes - ejemplo"
Aquí va la primera nota al pie [^1], y aquí está la nota ampliada [^ampliada].

[^1]: Esta es la primera nota al pie.

[^ampliada]: Esta es otra nota al pie con múltiples párrafos y contenido.

    Indentar contenidos para incluirlos en la nota al pie.

    Ejemplo Nº1: código SQL

    ``` sql
    SELECT SupplierID, ROUND(AVG(Price),2) as promedio FROM Products 
    -- WHERE filtra por registros
    WHERE SupplierID IS NOT NULL
    GROUP BY SupplierID
    ORDER BY promedio
    ```

    Ejemplo Nº2: imagen miniatura.

    ![Imagen desde Lorem Picsum](https://picsum.photos/256/256?0)

```

**Resultado:** Aquí va la primera nota al pie [^1], y aquí está la nota ampliada [^ampliada].

[^1]: Esta es la primera nota al pie.

[^ampliada]: Esta es otra nota al pie con múltiples párrafos y contenido.

    Indentar contenidos para incluirlos en la nota al pie.

    Ejemplo Nº1: código SQL

    ``` sql
    SELECT SupplierID, ROUND(AVG(Price),2) as promedio FROM Products 
    -- WHERE filtra por registros
    WHERE SupplierID IS NOT NULL
    GROUP BY SupplierID
    ORDER BY promedio
    ```

    Ejemplo Nº2: imagen miniatura.

    ![Imagen desde Lorem Picsum](https://picsum.photos/256/256?0)





## Referencias

[Markdown Guide.org - Footnotes](https://www.markdownguide.org/extended-syntax/#footnotes)