[**Poetry**](https://python-poetry.org/docs/){:target='_blank'} es una herramienta de Python que gestiona dependencias, entornos virtuales y empaqueta proyectos.

???+ info "Información"
    Su diferencia principal con **Pipenv** es que **Poetry** permite construir y publicar librerías directamente en PyPI, mientras que Pipenv solo sirve para administrar dependencias de aplicaciones locales.

Poetry proporciona un instalador oficial que instala la herramienta en un entorno virtual independiente y administra su propio entorno.

En Linux, macOS y Windows mediante [WSL](https://mcherrera.dev/posts/wsl-introduccion/){data-iframe="}, ejecuta el siguiente comando:

```bash title="Terminal"
curl -sSL https://install.python-poetry.org | python3 -
```

???+ info
    Si el comando `poetry` no se reconoce, se debe agregar el directorio de instalación al `PATH`.

    En Linux y macOS, normalmente puedes utilizar:

    ```bash title="Terminal"
    export PATH="$HOME/.local/bin:$PATH"
    ```

    Para conservar el cambio, añade esa línea al archivo `~/.bashrc` o `~/.zshrc`, según la terminal que utilices:

    ```bash title="Terminal"
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
    ```

    Verificar la instalación:

    ```bash title="Terminal"
    poetry --version
    # Output: Poetry (version 2.5.1)
    ```

    Documentación oficial: [Instalación de Poetry](https://python-poetry.org/docs/#installation){:target='_blank'}.

???- abstract "Administrar entornos con Poetry"

    === ":fontawesome-brands-windows: Windows"

        **1. Inicializar el proyecto**

        ```{ .powershell .cmd .mt-0 }
        poetry init --no-interaction
        ```

        Genera el archivo `pyproject.toml`, donde se define la configuración del proyecto y sus dependencias. Si ya existe este archivo, puedes omitir este paso.

        ???+ info

            Agrega `package-mode = false` a la sección `[tool.poetry]` del archivo `pyproject.toml` para indicarle a Poetry que no trate tu proyecto como un paquete Python que debe instalarse, sino que lo utilice únicamente para gestionar sus dependencias. Por ejemplo:

            ```ini title="pyproject.toml" hl_lines="13 14" linenums="1"
            [project]
            name = "tuto-django"
            version = "0.1.0"
            description = ""
            authors = [
                {name = "Your Name",email = "you@example.com"}
            ]
            requires-python = ">=3.12"
            dependencies = [
                "django (>=6.1.2,<7.0.0)"
            ]

            [tool.poetry]
            package-mode = false 

            [build-system]
            requires = ["poetry-core>=2.0.0,<3.0.0"]
            build-backend = "poetry.core.masonry.api"
            ```

        **2. Crear el Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        poetry env use python3.12
        ```

        Selecciona el intérprete de Python que utilizará Poetry. Si el entorno virtual no existe, Poetry lo creará cuando sea necesario, por ejemplo, al ejecutar `poetry install`.

        **3. Activar el Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        poetry env activate
        ```

        Poetry mostrará un comando, copia y ejecuta el comando que te devuelva Poetry para activar el entorno virtual.

        **4. Agregar e instalar un paquete (se agrega al `pyproject.toml`)**

        ```{ .powershell .cmd .mt-0 }
        poetry add django
        ```

        Poetry instala Django en el entorno virtual del proyecto, independientemente de que esté activado en tu terminal.

        **5. Eliminar el Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        (.venv) deactivate
        poetry env remove python3.12
        ```

        Esto elimina el entorno virtual asociado a Python 3.12, pero **no elimina las dependencias declaradas en `pyproject.toml` ni el archivo `poetry.lock`**.

    === ":fontawesome-brands-linux: Linux / :fontawesome-brands-apple: macOS"

        **1. Inicializar el proyecto**

        ```bash title="Terminal"
        poetry init
        ```

        Genera el archivo `pyproject.toml`, donde se define la configuración del proyecto y sus dependencias. Si ya existe este archivo, puedes omitir este paso.

        ???+ info

            Agrega `package-mode = false` a la sección `[tool.poetry]` del archivo `pyproject.toml` para indicarle a Poetry que no trate tu proyecto como un paquete Python que debe instalarse, sino que lo utilice únicamente para gestionar sus dependencias. Por ejemplo:

            ```ini title="pyproject.toml" hl_lines="13 14" linenums="1"
            [project]
            name = "tuto-django"
            version = "0.1.0"
            description = ""
            authors = [
                {name = "Your Name",email = "you@example.com"}
            ]
            requires-python = ">=3.12"
            dependencies = [
                "django (>=6.1.2,<7.0.0)"
            ]

            [tool.poetry]
            package-mode = false 

            [build-system]
            requires = ["poetry-core>=2.0.0,<3.0.0"]
            build-backend = "poetry.core.masonry.api"
            ```

        **2. Crear el Entorno Virtual**

        ```bash title="Terminal"
        poetry env use python3.12
        ```

        **3. Activar el Entorno Virtual**

        ```bash title="Terminal"
        eval "$(poetry env activate)"
        ```

        **4. Agregar e instalar un paquete (se agrega al `pyproject.toml`)**

        ```{ .powershell .cmd .mt-0 }
        poetry add django
        ```

        Poetry instala Django en el entorno virtual del proyecto, independientemente de que esté activado en tu terminal.

        **5. Eliminar el Entorno Virtual**

        ```bash title="Terminal"
        poetry env remove python3.12
        ```

        Esto elimina el entorno virtual asociado a Python 3.12, pero **no elimina las dependencias declaradas en `pyproject.toml` ni el archivo `poetry.lock`**.
