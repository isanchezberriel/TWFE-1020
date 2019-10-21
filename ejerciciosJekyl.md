# Ejercicios Jekyll

Identifica objetos, filtros y etiquetas en el siguiente fragmento de código e indica cuál es u finalidad.  
`{% assign episodes = site.episodes | sort: 'weight' %}`  
        `{% for episode in episodes limit: 6 %}`   
          `<div class="grid__cell grid__cell--33">`  
            `{% include episode_preview.html episode=episode %}`
          `</div>`
        `{% endfor %}`
