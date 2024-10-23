---
tags:
  - HTML
  # - JavaScript
  - CSS
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


# Estilos


Markdown permite algunas formas básicas de remarcado de texto y de asignación de estilos.


## Marcado de texto

El marcado de texto se realiza rodendo el texto con símbolos o secuencias específicos.

Las opciones más habituales son:

### Negrita y Cursiva


|Caracteres| Efecto |
|:---|:---|
|`*`| Cursiva (*italic*)|
|`**`|Negrita (*bold*)|
|`***`|Negrita y Cursiva|

Ejemplos de uso:


<div class="grid" markdown>


```
*Texto en cursiva*  
**Texto en negrita**  
***Texto en cursiva y negrita***   
```

*Texto en cursiva*    
**Texto en negrita**     
***Texto en cursiva y negrita***      

</div>


El uso de asteriscos puede reemplazarse por guiones bajos; 
sin embargo esta opción es menos versátil 
y por ello es menos usada.


|Caracteres| Efecto |
|:---|:---|
|`_`| Cursiva (*italic*)|
|`__`|Negrita (*bold*)|
|`___`|Negrita y Cursiva|

Ejemplos:

<div class="grid" markdown>
```
_Texto en cursiva_
__Texto en negrita__
___Texto en cursiva y negrita___
```

_Texto en cursiva_    
__Texto en negrita__   
___Texto en cursiva y negrita___    
</div>


### Tachado de texto (*strike*)

Para tachar rodear con dos virguillas seguidas (~):

```md title="tachado"
~~Este texto está tachado.~~
```

**Resultado:** ~~Este texto está tachado.~~




## Texto en color

Markdown **no incluye por sí mismo** opciones de color, sin embargo algunos lectores de Markdown aceptan el coloreo de texto insertando código HTML o propiedades CSS. Algunas opciones posibles:

### Insertar código HTML y CSS:

Markdown admite la inclusión de **etiquetas HTML**
para delimitar partes del texto 
y en ellas incorporar **propiedades de CSS**.

Ejemplos:
```html title="Etiquetas HTML - Propiedades CSS"
Markdown con <font color='red'>Texto en *rojo*</font>
```
Resultado: Markdown con <font color='red'>Texto en *rojo*</font>
```html
Markdown con <span style="color:green">algo de texto en *verde*</span>.
```
Resultado: Markdown con <span style="color:green">algo de texto en *verde*</span>.

### Definir etiquetas

Se crean etiquetas personalizadas  de HTML para rodear el texto a colorear. 

Por ejemplo, se puede insertar un bloque de CSS para definir nuevas etiquetas que asignarán estilos:
```css title="tags de estilo - definición"
<style>
r { color: Red } 
o { color: Orange }
g { color: Green }
Y { background: Yellow }
</style>
```
Y estas etiquetas se aplican al texto siguiente 
con la notación de HTML:
```html  title="tags de estilo - uso"
<r>ROJO</r>
<o>VERDE</o> 
<g>NARANJA</g> 
<Y><r>remarcado</r></Y> 
```
El resultado es:
<style>
r { color: Red } 
o { color: Orange }
g { color: Green }
Y { background: Yellow }
</style>
<r>ROJO</r>
<o>VERDE</o> 
<g>NARANJA</g> 
<Y><r>remarcado</r></Y>   



## Referencias

[Markdown Guide.org - Emphasis](https://www.markdownguide.org/basic-syntax/#emphasis)