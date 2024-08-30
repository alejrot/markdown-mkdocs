---
tags:
  # - HTML5
  # - JavaScript
  # - CSS
#   - YAML
#   - MkDocs
#   - Python
#   - Docker
#   - Podman
  - MarkDown
#   - TypeScript
  # - CSV
#   - Bash
---


# Fórmulas en MarkDown

## Introducción


MarkDown **no soporta** de base el uso de fórmulas matemáticas. Sin embargo, existen plugins que permiten dar soporte a MarkDown de las fórmulas escritas en lenguaje TEX y sus derivados.

A continuación se explora la sintaxis para escribir símbolos y fórmulas matemáticas.

## Sintaxis

Las fórmulas matemáticas se marcan entre simbolos de peso (`$`) antes y después de la fórmula:
```
$A = \pi*r^{2}$ 
```

$A = \pi*r^{2}$ 

El contenido de la fórmula puede repartirse en varios renglones. Sin embargo no todos los intérpretes de MarkDown lo aceptan bien. Por ejemplo el visor online de GitHub no tolera bien el reparto en varias líneas del código y lo muestra incorrectamente. Por ello es mejor abrir y cerrar con '$' en cada renglón de fórmulas.

Con doble signo (`$$`) el contenido queda centrado en la página:
```
$$A = \pi*r^{2}$$
```

$$A = \pi*r^{2}$$

Una gran ventaja del uso de esta opción es la posibilidad de repartir la secuencia de la fórmula matemática a lo largo de varios renglones. 

Ejemplo: 

<!-- 
## Ejemplo 1 : uso doble signo peso ( \$\$ )
**The Cauchy-Schwarz Inequality**

  -->
```math title="Inecuación de Cauchy-Schwarz"
$$ \left(\sum_{k=1}^n a_k b_k \right)^2 
\leq 
\left(\sum_{k=1}^n a_k^2 \right) 
\left(\sum_{k=1}^n b_k^2 \right) 
$$
```


$$ \left(\sum_{k=1}^n a_k b_k \right)^2 
\leq 
\left(\sum_{k=1}^n a_k^2 \right) 
\left(\sum_{k=1}^n b_k^2 \right) 
$$


A continuación se muestran varios ejemplos de fórmulas y su código generador


## Operadores Relacionales


|Signo | Secuencia |
|:---:|:----:|
| =  | `=` |
| > |  `>` |
| < | `<`  |
|  $\leq$  | `\leq` , `\le` |
| $\geq$ | `\geq` , `\ge`  |
| $\approx$ | `\approx` |
| $\equiv$ | `\equiv` |
| $\neq$ | `\neq` |





## Operadores Aritméticos

|Signo | Secuencia |
|:---:|:----:|
|$\times$|`\times`|
|$\cdot$|`$\cdot`|
|$\ast$|`\ast`|
|$\div$|`$\div$`|
|$\pm$|`\pm`|
|$\circ$ |`\circ`|
|$\bigotimes$ |`\bigotimes` |
|$\bigoplus$|`\bigoplus`|
|$\bigodot$|`\bigodot`|
|$\mid$|`\mid`|




### Espacios en Blanco
Los espacios en blanco se crean con virgulillas (`~`):
```
$a_i \ge 0 ~~~~~~\forall i$
```
$a_i \ge 0 ~~~~~~\forall i$

### Subíndices y Superíndices
```
$x_i$
$x_{i,j}$ 
$x^2$ 
$x^3_{i,j}$ 
$x^{3,4}_{i,j}$
```
$x_i  ~~~~~~~~~$
$x_{i,j}  ~~~~~~~~$
$x^2  ~~~~~~~~$
$x^3_{i,j}  ~~~~~~~~$
$x^{3,4}_{i,j}$

### Fracciones
```
${x}/{y}$ 
$\frac{x}{y}$
```
${x}/{y}  ~~~~~~~~$ 
$\frac{x}{y}$

### Potencias
```
$x^{2/3}$
$a^{ \frac{X}{Y} }$
```

$x^{2/3}  ~~~~~~~~$
$a^{ \frac{X}{Y} }$

### Raices:
```
$\sqrt{x}$
$\sqrt[n]{x}$
```
$\sqrt{x} ~~~~~~~~$
$\sqrt[n]{x}$



$\sqrt[n]{  \frac{x}{y}}$



## Operatorias

### Sumatoria
```
$\sum_{i=1}^{n} X^2_i$
```
$\sum_{i=1}^{n} X^2_i$

### Productoria
```
$n!=\prod_{k=1}^n k$
```
$n!=\prod_{k=1}^n k$

### Unión
```
$\bigcup_{i=1}^{2} R_i$
```
$\bigcup_{i=1}^{2} R_i$

### Intersección
```
$\bigcap_{i=1}^{2} R_i$
```
$\bigcap_{i=1}^{2} R_i$


## Análisis matemático

### Límites
```
$\lim_{n \to +\infty} \frac{1}{(n+1)}$	
```
$\lim_{n \to +\infty} \frac{1}{(n+1)}$	

### Derivada
```
$\left({e^{ax}} \right)^`=ae^{ax}\quad$
$\frac{d}{dx}e^{ax}=ae^{ax}\quad$
```


$\left({e^{ax}} \right)^`=ae^{ax}\quad$

$\frac{d}{dx}e^{ax}=ae^{ax}\quad$


### Integrales
```
$F(s) = \int_0^\infty f(t) e^{-st}dt$
```
$F(s) = \int_0^\infty f(t) e^{-st}dt$

Más símbolos:


|Signo | Secuencia |
|:---:|:----:|
| $\int  $ |`\int `|
| $\iint $ |`\iint` |
| $\iiint$ |`\iiint` |
| $\oint$  |`\oint` |





## Función Partida
```
$n!=\begin{cases} n(n-1)! &\text{if } n \ge 1 \\ 1 &\text{caso contrario }\end{cases}$
```

$n!=\begin{cases} n(n-1)! &\text{if } n \ge 1 \\ 1 &\text{caso contrario }\end{cases}$

















## Matrices 
```
$\begin{array} {} 1 & 2  \\ 3 & 4 \end{array}$
```
$\begin{array} {} 1 & 2  \\ 3 & 4 \end{array}$

## Paréntesis Ampliables
Los paréntesis ampliables se crean con las palabras **\\left** y **\\right** y a continuación de cada una el paréntesis deseado:  
```
$\left[ \begin{array} {} 1 \\ 2 \end{array} \right]$ 
$\left( \begin{array} {} 1 \\ 2 \end{array} \right)$ 
$\left\{ \begin{array} {} 1 \\ 2 \end{array} \right\}$ 
```
$\left[ \begin{array} {} 1 \\ 2 \end{array} \right] ~~~~~~$
$\left( \begin{array} {} 1 \\ 2 \end{array} \right) ~~~~~~$
$\left\{ \begin{array} {} 1 \\ 2 \end{array} \right\}$ 


## Marcas en las expresiones
### LLaves
```
$\underbrace{a+b}_{sample}$ $\overbrace{c+d}^{sample}$
```
$\underbrace{a+b}_{sample} ~~~~~~~~~~$
$\overbrace{c+d}^{sample}$

### Flechas encima
```
$\overleftarrow{a+b}$
$\overrightarrow{c+d}$
$\overleftrightarrow{e+f}$
```
$\overleftarrow{a+b} ~~~~~~~~~~$
$\overrightarrow{c+d} ~~~~~~~~~~$
$\overleftrightarrow{e+f}$

### Flechas debajo
```
$\underleftarrow{a+b}$
$\underrightarrow{c+d}$
$\underleftrightarrow{e+f}$
```
$\underleftarrow{a+b} ~~~~~~~~~~$
$\underrightarrow{c+d} ~~~~~~~~~~$
$\underleftrightarrow{e+f}$

### Línea
```
$\overline{a+b}$
$\underline{c+d}$
```
$\overline{a+b} ~~~~~~~~~~$
$\underline{c+d}$







<!-- 
## Ejemplo 2 : uso bloque 'math' (NO ANDA) REVISAR
**The Cauchy-Schwarz Inequality**

```math
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
``` -->




## Referencias

[Programador Clic - Markdown fórmulas y símbolos matemático](https://programmerclick.com/article/9139292621/)



[R Users Group - Ecuador - Guía completa markdown y su integración con R](http://rusersgroup.com/blog/rmarkdown/)