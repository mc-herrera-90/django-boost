<div class="grid first-grid cards" markdown>

<div class="mt-0" markdown>

```py title="urls.py" linenums="17" hl_lines="4-6"
from django.contrib import admin
from django.urls import path

admin.site.site_header = "Mi sitio web" # (1)!
admin.site.site_title = "Portal de mi web" # (2)!
admin.site.index_title = "Bienvenido" # (3)!

urlpatterns = [
    path("admin/", admin.site.urls),
]
```

1. `admin.site.site_header`: Título que se muestra en la parte superior del panel
2. `site_title`: Título en la pestaña del navegador
3. `index_title`: Título en la página principal del panel

</div>

```{ .plaintext .no-copy hl_lines="6" title="Abrir el archivo urls" }
 ...
├──  _site
│   ├──  __init__.py
│   ├──  asgi.py
│   ├──  settings.py
│   ├──  urls.py
│   └──  wsgi.py
├──  .venv
└──  manage.py
```

</div>
