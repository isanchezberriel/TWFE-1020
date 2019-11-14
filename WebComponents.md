# Web Components
## Custom Elements
## Plantillas
```html
<template id="plantilaPrincipal">		
    <h1>Mi plantilla</h1>
	<template id="platilla2">
	    <p></p>
	</template>
</template>```

Con Java Script generamos el contenido con el que se rellena la plantilla.  

```javascript

var libros = ["Cien Años de Soledad ", "La conjura de los necios"];

var template = document.querySelector('#platillaPrincipal').content; 
var p = template.querySelector("tplantilla2").content.querySelector("p");
libros.forEach(function(libro){
	var parrafo = p.cloneNode(true);
	parrafo.textContent = libro;
	template.appendChild(parrafo);
});
var clone = document.importNode(template, true);
document.body.appendChild(clone);```


## Importar HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Importar webcomponent</title>
	<link rel="import" href="mi-etiqueta.html">
</head>
<body>
	<mi-etiqueta></mi-etiqueta>
</body>
</html>```
