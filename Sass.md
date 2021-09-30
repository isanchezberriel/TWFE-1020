# Introducción a Sass
* CSS más limpio y flexible, facilita el mantenimiento.
* Reduce la repetición, es más productivo que CSS
* Características para especificar estilos de forma modular.
* No son reconocidos por el navegador, necesitamos instalar el procesador y generarlo antes del despliegue.

Usaremos la sintaxis SCSS

## Instalación:

```ruby
sudo apt-get install ruby

$ sudo gem install sass

$ sass -v
 ```

## Variables
```ruby 
$nombre: valor
 ```
 ## Operadores
* Matemáticos: 
```ruby 
+, -, *, /, %
 ``` 
* Referencia a su elemento padre.
```ruby
&: 
```
 ## Anidamiento

Simplificar sintaxis de propiedades con el mismo prefijo mediante anidamiento. Sass permite anidar selectores como en HTML
```ruby
prefijo
{
	sufijo1: valor1
	sufijo2: valor2
}
```
## Organización del código:

### Mixings
Crear fragmentos de código
```ruby
@mixin name {
  property: value;
  property: value;
  ...
} 
```
Se utilizan con ```@include```

### Import
Se utiliza para recursos css: ``` @import ```

### Herencia
Se usa para estilos que son compartidos, en su mayoría, y que se aplican con alguna diferencia según qué elemento:
* Declarar el estilo base 
* Incorporarlo en el estilo que hereda con ``` @extend ```
* También se puede usar con ```%nombre_estilo```

## Funciones
* Color: set, get o manipulación
```ruby
rgb(red, green, blue), rgba(red, green, blue, alfa), 
hsl(hue, saturation, lightness), hsla(hue, saturation, lightness, alpha), 
grayscale(color), 
mix(color1, color2, weight), adjust-color(color, red, green, blue, hue, saturation, lightness, alpha), … 
```
* Cadenas:
``` ruby 
quote(string), str-length(string), str-index(string, substring), to-lower-case(string), ... 
```
 * Números:
```ruby
abs(number), ceil(number), comparable(num1, num2), max(number...), ...
```

## Ejercicios

1. Instalar Sass en la máquina del pool TWFE

```
$ sudo apt-get install ruby

$ sudo gem install sass

$ sass -v
```
