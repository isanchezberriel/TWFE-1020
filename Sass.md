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
 
 ## Anidamiento

Simplificar sintaxis de propiedades con el mismo prefijo mediante anidamiento. Sass permite anidar selectores como en HTML
```ruby
prefijo
{
	sufijo1: valor1
	sufijo2: valor2
}
```
