https://programmerclick.com/article/9139292621/

http://rusersgroup.com/blog/rmarkdown/


# Simbolos


# Fórmulas en MarkDown

Las fórmulas matemáticas se marcan entre simbolos de peso (**\$**) antes y después de la fórmula:
```
$A = \pi*r^{2}$ 
```
$A = \pi*r^{2}$ 

El contenido de la fórmula puede repartirse en varios renglones. Sin embargo no todos los intérpretes de MarkDown lo aceptan bien. Por ejemplo el visor online de GitHub no tolera bien el reparto en varias líneas del código y lo muestra incorrectamente. Por ello es mejor abrir y cerrar con '$' en cada renglón de fórmulas.

Con doble signo (\$\$) el contenido queda centrado en la página:
```
$$A = \pi*r^{2}$$
```
$$A = \pi*r^{2}$$

A continuación se muestran varios ejemplos de fórmulas y su código generador

## Espacios en Blanco
Los espacios en blanco se crean con virgulillas (**~**):
```
$a_i \ge 0 ~~~~~~\forall i$
```
$a_i \ge 0 ~~~~~~\forall i$

## Subíndices y Superíndices
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

## Fracciones
```
${x}/{y}$ 
$\frac{x}{y}$
```
${x}/{y}  ~~~~~~~~$ 
$\frac{x}{y}$

## Potencias
```
$x^{2/3}$
$a^{ \frac{X}{Y} }$
```

$x^{2/3}  ~~~~~~~~$
$a^{ \frac{X}{Y} }$

## Raices:
```
$\sqrt{x}$
$\sqrt[n]{x}$
```
$\sqrt{x} ~~~~~~~~$
$\sqrt[n]{x}$


## Sumatoria
```
$\sum_{i=1}^{n} X^2_i$
```
$\sum_{i=1}^{n} X^2_i$

## Productoria
```
$n!=\prod_{k=1}^n k$
```
$n!=\prod_{k=1}^n k$

## Union
```
$\bigcup_{i=1}^{2} R_i$
```
$\bigcup_{i=1}^{2} R_i$

## Interseccion
```
$\bigcap_{i=1}^{2} R_i$
```
$\bigcap_{i=1}^{2} R_i$


## Límites
```
$\lim_{n \to +\infty} \frac{1}{(n+1)}$	
```
$\lim_{n \to +\infty} \frac{1}{(n+1)}$	

## Derivada, notación Leibniz
```
$\frac{d}{dx}e^{ax}=ae^{ax}\quad$
```
$\frac{d}{dx}e^{ax}=ae^{ax}\quad$

## Integrales
```
$F(s) = \int_0^\infty f(t) e^{-st}dt$
```
$F(s) = \int_0^\infty f(t) e^{-st}dt$

Más símbolos:
```
$\int$
$\iint$  
$\iiint$ 
$\oint$
```
$\int   ~~~~~~~~$
$\iint  ~~~~~~~~$
$\iiint ~~~~~~~~$
$\oint$



## Función Partida
```
$n!=\begin{cases} n(n-1)! &\text{if } n \ge 1 \\ 1 &\text{caso contrario }\end{cases}$
```

$n!=\begin{cases} n(n-1)! &\text{if } n \ge 1 \\ 1 &\text{caso contrario }\end{cases}$



## Operadores Relacionales

### Igual ,Mayor o Menor
Estos símbolos se colocan directamente 
```
=     ,   >   ,   <
```
=     ,   >   ,   <

### Mayor o Igual
```
$\ge , \geq$
```
$\ge , \geq$

### Menor o Igual
```
$\leq , \le$
```
$\leq , \le$

### Aproximadamente
```
$\approx$
```
$\approx$

### Equivalente a
```
$\equiv$
```
$\equiv$

### No Igual
```
$\neq$
```
$\neq$


## Operadores Aritméticos

### Multiplicacion
```
$\times$ , $\cdot$ , $\ast$
```
$\times$ $~~~~~~~~$ $\cdot$ $~~~~~~~~$ $\ast$

### Division
```
$\div$
```
$\div$

### Plus Minus
```
$\pm$
```
$\pm$

### Otros
```
$\circ$ , $\bigotimes$ , $\bigoplus$ , $\bigodot$ ,$\mid$
```
$\circ$ $~~~~~~~~$  $\bigotimes$ $~~~~~~~~$  $\bigoplus$ $~~~~~~~~$  $\bigodot$ $~~~~~~~~$ $\mid$







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





## Ejemplo 1 : uso doble signo peso ( \$\$ )

**The Cauchy-Schwarz Inequality**
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$


    **The Cauchy-Schwarz Inequality**
    $$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$


## Ejemplo 2 : uso bloque 'math' (NO ANDA) REVISAR
**The Cauchy-Schwarz Inequality**

```math
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
```