[**uv**](https://docs.astral.sh/uv/getting-started){:target='_blank'} es un gestor de paquetes, proyectos y entornos de Python con alto rendimiento desarrollado en Rust.

Está diseñado como una herramienta **"todo en uno"** que busca reemplazar varias herramientas tradicionales del ecosistema Python:

- **pip** ( instalador de paquetes )
- **venv / virtualenv** ( creadores de entornos virtuales )
- **pip-tools** ( compilación y bloqueo de dependencias )
- **pipx** ( ejecución e instalación de herramientas globales )
- **pyenv** ( gestor de versiones de Python )

**uv** proporciona un instalador oficial que permite instalar la herramienta directamente en el sistema sin necesidad de instalarla mediante `pip`.

=== ":fontawesome-brands-linux: Linux / :fontawesome-brands-apple: macOS"

    ```bash
    curl -LsSf https://astral.sh/uv/install.sh | sh
    ```

=== ":fontawesome-brands-windows: Windows (PowerShell)"

    ```bash
    powershell -c "irm https://astral.sh/uv/install.ps1 | more"
    ```

???- abstract "Administrar entornos con uv"

    === ":fontawesome-brands-windows: Windows"

        **1. Crear Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        uv venv .venv
        ```

        **2. Activar el Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        .venv\Scripts\activate.bat
        ```

        **3. Desactivar el Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        deactivate
        ```

        **4. Limpiar el Entorno Virtual (recrearlo desde cero)**

        ```{ .powershell .cmd .mt-0 }
        uv venv --clear .venv
        ```

        La opción `--clear` elimina el contenido existente del directorio del entorno antes de reconstruirlo.

        **5. Eliminar el Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        deactivate
        rmdir /s /q .venv
        ```

    === ":fontawesome-brands-linux: Linux / :fontawesome-brands-apple: macOS"

        **1. Crear Entorno Virtual**

        ```bash title="Terminal"
        uv venv .venv
        ```

        **2. Activar el Entorno Virtual**

        ```bash title="Terminal"
        source .venv/bin/activate
        ```

        **3. Desactivar el Entorno Virtual**

        ```bash title="Terminal"
        deactivate
        ```

        **4. Limpiar el Entorno Virtual (recrearlo desde cero)**

        ```bash title="Terminal"
        uv venv --clear .venv
        ```

        La opción `--clear` elimina el contenido existente del directorio del entorno antes de reconstruirlo.

        **5. Eliminar el Entorno Virtual**

        ```bash title="Terminal"
        deactivate
        rm -rf .venv
        ```
