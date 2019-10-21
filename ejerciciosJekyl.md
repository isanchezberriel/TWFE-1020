# Ejercicios Jekyll
       
       {% assign episodes = site.episodes | sort: 'weight' %}  
        {% for episode in episodes limit: 6 %}  
          <div class="grid__cell grid__cell--33">  
            {% include episode_preview.html episode=episode %}  
          </div>
        {% endfor %}  
