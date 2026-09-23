## Para trabajar con este proyecto

Este proyecto usa **MkDocs Material** para la documentación.

Todo se ejecuta mediante Docker, por lo que no es necesario instalar Python, MkDocs ni Material for MkDocs.

### Requisitos

* Docker
* Git

### 1. Clonar el proyecto

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

### 2. Levantar la documentación

Desde la raíz del proyecto:

```bash
docker run --rm -it \
  -p 8000:8000 \
  -u "$(id -u):$(id -g)" \
  -v "${PWD}:/docs" \
  squidfunk/mkdocs-material
```

### 3. Abrir la documentación

En el navegador:

```text
http://localhost:8000
```

### 4. Trabajar en la documentación

Los archivos Markdown se encuentran en:

```text
docs/
```

La configuración del sitio está en:

```text
mkdocs.yml
```

Los cambios se actualizan automáticamente mientras el servidor esté ejecutándose.

### 5. Detener el servidor

Presiona:

```text
Ctrl+C
```

El contenedor se elimina automáticamente al detenerlo.

> El parámetro `-u "$(id -u):$(id -g)"` evita problemas de permisos con los archivos del proyecto al ejecutar Docker.
