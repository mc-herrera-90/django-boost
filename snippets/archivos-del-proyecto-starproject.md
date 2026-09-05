```{ .bash .no-copy title="Archivos del proyecto" hl_lines="9" }
 mi-proyecto
├──  _site
│   ├──  __init__.py #(1)!
│   ├──  asgi.py #(2)!
│   ├──  settings.py #(3)!
│   ├──  urls.py #(4)!
│   └──  wsgi.py #(5)!
├──  .venv #(6)!
└──  manage.py #(7)!
```

1. Inicializa el paquete Python del proyecto Django.
2. Configura el punto de entrada **ASGI** para servidores asíncronos.
3. Contiene la configuración principal del proyecto Django.
4. Define las rutas y URLs del proyecto.
5. Configura el punto de entrada **WSGI** para servidores web tradicionales.
6. Contiene el entorno virtual de Python del proyecto.
7. Permite administrar el proyecto mediante comandos de Django.
