<div class="grid first-grid cards" markdown>

<div class="mt-0" markdown>

```py title="settings.py" linenums="54" hl_lines="4"
TEMPLATES = [
    {
        # ...
        "DIRS": [BASE_DIR / "templates"],  # (1)!
        # ...
    },
]
```

1. `DIRS`: Define los directorios donde Django buscará las plantillas del proyecto.

</div>

```{ .plaintext .no-copy hl_lines="5" title="Abrir el archivo setting" }
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
