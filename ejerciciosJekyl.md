# Ejercicios Jekyll

1. Identifica objetos, filtros y etiquetas en el siguiente fragmento de código e indica cuál es u finalidad.  
```html
        {% assign episodes = site.episodes | sort: 'weight' %}  
        `{% for episode in episodes limit: 6 %}  
          `<div class="grid__cell grid__cell--33">
            `{% include episode_preview.html episode=episode %}
          </div>
        {% endfor %}
```
2. Qué código html tendría tendría como salida:
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
3. Especifica los filtros, variales Jekyll, tags, y qué se consigue con el siguiente código.
```html
<footer id="footer">
    <p class="small">© Copyright {{ site.time | date: '%Y' }} {{ site.author }}</p>
</footer>
```
