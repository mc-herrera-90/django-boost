---
date: 2026-07-11
title: "DRF Conceptos Básicos"
---

[Django REST Framework](https://www.django-rest-framework.org/){:target='_blank'} (DRF) es un framework ampliamente utilizado para crear API RESTful con Django.

<!-- more -->

DRF se integra con las características principales de Django (modelos, vistas y URL), lo que agiliza la creación de una API RESTful.

Django REST Framework (DRF) se compone de varios componentes que trabajan en conjunto para construir APIs RESTful:

<div class="grid cards" markdown>

-   :material-swap-horizontal: &nbsp; **[Serializadores (Serializers)][serializers]**

    ---

    Los serializadores permiten convertir instancias de modelos y QuerySets de Django a formatos como JSON (**serialización**) y convertir los datos recibidos desde una API en estructuras que Django puede procesar (**deserialización**). También permiten validar los datos de entrada.

    ---

    __Transformación y validación de datos entre Django y la API__

-   :material-eye: &nbsp; __Vistas y ViewSets__

    ---

    Las vistas gestionan las solicitudes HTTP y generan las respuestas de la API. Los **ViewSets** permiten agrupar en una sola clase las operaciones de un recurso, como listar, crear, actualizar y eliminar registros.

    ---

    __Gestionan las operaciones y la lógica de los recursos de la API__

-   :material-router: &nbsp; __Routers (Enrutadores)__

    ---

    Los routers generan automáticamente las rutas URL asociadas a los ViewSets, simplificando la configuración de los endpoints y manteniendo una estructura RESTful.

    ---

    __Generación automática y consistente de las rutas de la API__

-   :material-shield-lock: &nbsp; __Autenticación y permisos__

    ---

    DRF proporciona mecanismos para identificar a los usuarios y controlar qué recursos y operaciones puede utilizar cada uno. Esto permite proteger los endpoints y establecer diferentes niveles de acceso.

    ---

    __Control de acceso y protección de los recursos de la API__

-   :material-message-arrow-right: &nbsp; __Solicitudes y respuestas__

    ---

    DRF proporciona herramientas para procesar las solicitudes HTTP y construir respuestas con datos, formatos de representación y códigos de estado HTTP adecuados.

    ---

    __Comunicación estructurada entre el cliente y la API__

</div>

[serializers]: serializadores.md
