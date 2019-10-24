# Práctica de intoducción a Jekyll

Jekyll es un generador de sitios estáticos. Tiene soporte específico para la construcción de Blogs. El contenido se puede generar en markdown, que Jekyll lo transforma a html, pero tambié es válido para contenido html. Jekyll constituye una herramienta para la modularización en el desarrollo del sitio. Podemos usar includes, plantillas, automatizar generación de contenidos con controll de flujos de Liquid, tiene soporte para generar estilos con Sass y CoffeeSprit.  
Jekyll da acceso a numerosas variables que permiten programar las plantillas, además también admite variables definidas por el usuario. Los ficheros incorporan un encabezado **front matter** en formato YAML en el que especificaremos los valores que vamos a asignarles para ese contenido, e incluiremos nuestras propias variables. Las variables Jekyll pueden ser globales, de sitio, de página, de paginación.
Otra opción característica de Jekyll es que permite la definición de permalinks, con lo que podremos indicar en qué dirección se debe publicar una determinada página o posts.

En general la estructura del proyecto se corresponde con:
- **_includes**: Definen parciales que se pueden incluir en las plantillas
- **_layouts**: constituyen las plantillas en sí. En el front matter pueden especificarse qué layout usar, heredando la plantilla actual todas las características de la que se invoca.
- **_posts**
- **_sass**
En el directorio raíz del proyecto se incluirán el archivo index.html y aquellos que no corresponden a parciales ni layouts, pudiéndose poner aquí páginas html, markdown, directorios, etc.

# Comandos Jekyll:
- `jekyll build` : construye el sitio estático. Esto genera el directorio _site con todo el contenido que se genera: html, directorio de estilos _css, index.html, etc. Los archivos sin frontmatter simplemente se copian, no se transforman.

- `jekyll serve`: construye el sitio estático del mismo modo que en el punto anterior, pero además lanza un servidor local. Cada vez que se actualiza un fichero se actualiza el sitio sin necesidad de volver a lanzar el servidor. 
- El comando `ps aux |grep jekyll |awk '{print $2}' | xargs kill -9` puede ser útil si necesitamos automatizar una tarea en la que se pare el proceso del servidor lanzado.

# Ejercicios:
1. Analizaremos el proyecto Jekyll básico en el repositorio: [Proyecto Básico en Jekyll](https://github.com/jekyll/example).
  - Añade dos página adicionales al proyecto, y haz que se muestren junto con la página About.
  - Añade otro post al proyecto, y haz que se muestre en la página index.html
2. Identifica objetos, filtros y etiquetas en el siguiente fragmento de código e indica cuál es u finalidad.  
```html
        {% assign episodes = site.episodes | sort: 'weight' %}  
        `{% for episode in episodes limit: 6 %}  
          `<div class="grid__cell grid__cell--33">
            `{% include episode_preview.html episode=episode %}
          </div>
        {% endfor %}
```
3. Qué código html tendría tendría como salida:
```html
<html>   
        <head>  
           <title>{{ page.title }} -Ejemplo Jekyll </title>
        </head>
        <body>  
           {% include nav.html %}` 
           {{ content }}
        </body>  
</html> 
```
4. Especifica los filtros, variales Jekyll, tags, y qué se consigue con el siguiente código.
```html
<footer id="footer">
    <p class="small">© Copyright {{ site.time | date: '%Y' }} {{ site.author }}</p>
</footer>
```
4. Indicar qué scripts se están invocando con el siguiente código:
```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="{{ "/" | relative_url  }}assets/js/main.js"></script>
  <script src="{{ "/" | relative_url  }}assets/js/highlight.js"></script>
```


