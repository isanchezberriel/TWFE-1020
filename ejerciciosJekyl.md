# Ejercicios Jekyll

1. Identifica objetos, filtros y etiquetas en el siguiente fragmento de código e indica cuál es u finalidad.  
`{% assign episodes = site.episodes | sort: 'weight' %}`  
        `{% for episode in episodes limit: 6 %}`   
          `<div class="grid__cell grid__cell--33">`  
            `{% include episode_preview.html episode=episode %}`
          `</div>`
        `{% endfor %}`
2. Qué código html tendría tendría como salida:

`<html>'   
'<head>`  
    `title>{{ page.title }} -Ejemplo Jekyll </title>`  
`/head>`  
`body>`  
    `{% include nav.html %}`  
    `{{ content }}`  
`</body>`  
`</html>`  
