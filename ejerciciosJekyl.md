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
4. Indicar qué scripts se están invocando con el siguiente código:
```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="{{ "/" | relative_url  }}assets/js/main.js"></script>
  <script src="{{ "/" | relative_url  }}assets/js/highlight.js"></script>
```
5.  Indica el resultado que se obtiene con el siguiente código, sabiendo que `paginas` corresponde la colección de almacenada en `_characters`, 
```html 
       <ul class="nav">
          {% assign paginas = site.paginas | sort: 'name' %}
          {% for pagina in paginas %}
            <li class="nav__item">
              <a href="{{ pagina.url }}">{{ pagina.title }}</a>
            </li>
          {% endfor %}
        </ul>
```

6. Dada una colección de documentos con el siguiente frontmatter:
```
---
title: Mi Pagina
thumbnail_url:  https://XXX
image_url: https://
---```  
Indicar qué objetivo tiene el siguiente include:
```html 
<a href="{{ character.url }}" class="character-preview">
  <img src="{{ character.thumbnail_url }}" class="character-preview__image" />
  <div class="character-preview__label">
    {{ character.title }}
  </div>
</a>
```
