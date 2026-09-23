---
date: 2026-09-11
title: Autenticación y cierre de sesión en Django
description: "Cómo habilitar la autenticación de usuarios y el cierre de sesión utilizando las herramientas integradas de Django"
tags: ["autenticacion", "formularios"]
categories:
    - Formularios
authors:
    - mcherrera
---


!!! abstract "En resumen"

    Django proporciona un sistema de autenticación integrado que permite gestionar el inicio y cierre de sesión de los usuarios mediante sus vistas, formularios y URLs.

<!-- more -->

## Instrucciones: nuevo proyecto

--8<-- "snippets/nuevo-proyecto.md"

## Habilitar la autenticación

Django proporciona vistas y funcionalidades listas para utilizar en las operaciones de autenticación, como iniciar y cerrar sesión. Estas forman parte de la aplicación `django.contrib.auth`, que viene incluida por defecto en un proyecto Django:

```{. py .no-copy title="_site/settings.py" hl_lines="3" linenums="33" }
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]
```

!!! info "Migraciones"

    El sistema de autenticación utiliza modelos y tablas propias de Django. Por esta razón, debemos ejecutar las migraciones antes de utilizarlo:

    ```bash title="Terminal"
    (.venv) python manage.py migrate
    ```

## Configurar las URLs de autenticación

Podemos incluirlas directamente en las URLs del proyecto:

```py title="_site/urls.py" linenums="1" hl_lines="22"
"""
URL configuration for _site project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls'))
]
```

Con esto, Django habilita las URLs correspondientes a las operaciones de autenticación, incluyendo el inicio y cierre de sesión.

| URL                          | Vista                          |
| ---------------------------- | ------------------------------ |
| `/accounts/login/`           | Inicio de sesión               |
| `/accounts/logout/`          | Cierre de sesión               |
| `/accounts/password_change/` | Cambio de contraseña           |
| `/accounts/password_reset/`  | Restablecimiento de contraseña |

## Crear el formulario de inicio de sesión

Las vistas de autenticación de Django utilizan un formulario propio para solicitar las credenciales del usuario.

Debemos crear la siguiente estructura dentro de nuestra aplicación:

```text
core/
└── templates/
    └── registration/
        └── login.html
```

Luego podemos crear el formulario de inicio de sesión:

{% raw %}
```html title="core/templates/registration/login.html"
<form method="post">
    {% csrf_token %}

    {{ form.as_p }}

    <button type="submit">
        Iniciar sesión
    </button>
</form>
```
{% endraw %}

El formulario proporcionado por Django contiene los campos necesarios para autenticar al usuario.

## Configurar la página de inicio

Por defecto, después de iniciar sesión podemos definir la página a la que será dirigido el usuario mediante `LOGIN_REDIRECT_URL`:

```py title="_site/settings.py"
LOGIN_REDIRECT_URL = '/'
```

De esta forma, cuando la autenticación sea exitosa, Django redirigirá al usuario hacia la página principal.

## Mostrar el usuario autenticado

Una vez iniciada la sesión, podemos acceder al usuario autenticado mediante `request.user`.

En una plantilla también podemos utilizar directamente `user`:

{% raw %}
```html
{% if user.is_authenticated %}
    <p>Bienvenido, {{ user.username }}</p>
{% endif %}
```
{% endraw %}

La propiedad `is_authenticated` permite comprobar si existe un usuario autenticado en la sesión actual.

## Habilitar el cierre de sesión

Django también proporciona una vista para cerrar la sesión del usuario mediante la URL:

```text
/accounts/logout/
```

Podemos agregar un formulario en nuestra plantilla para ejecutar el cierre de sesión:

{% raw %}
```html
<form method="post" action="{% url 'logout' %}">
    {% csrf_token %}

    <button type="submit">
        Cerrar sesión
    </button>
</form>
```
{% endraw %}


!!! warning "Método POST"

```
El cierre de sesión se realiza mediante una solicitud `POST`, por lo que debemos utilizar un formulario y agregar {% raw %}`{% csrf_token %}`{% endraw %}.
```

## Configurar la redirección después del cierre de sesión

Podemos indicar la página a la que será enviado el usuario después de cerrar sesión mediante `LOGOUT_REDIRECT_URL`:

```py title="_site/settings.py"
LOGOUT_REDIRECT_URL = '/'
```

Así, después de cerrar la sesión, Django redirigirá automáticamente al usuario hacia la página principal.

## Proteger contenido para usuarios autenticados

También podemos restringir determinadas vistas para que solamente puedan acceder usuarios que hayan iniciado sesión.

Para ello, podemos utilizar el decorador `login_required`:

```py
from django.contrib.auth.decorators import login_required
from django.shortcuts import render


@login_required
def dashboard(request):
    return render(request, 'dashboard.html')
```

Si un usuario no autenticado intenta acceder a esta vista, Django lo redirigirá hacia la página de inicio de sesión.
