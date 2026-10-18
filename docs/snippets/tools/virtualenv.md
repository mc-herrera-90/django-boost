`virtualenv` es una herramienta alternativa a `venv` que permite crear y gestionar entornos virtuales aislados de Python. A diferencia de `venv`, que viene incluido en Python desde la versión 3.3, `virtualenv` se instala por separado y ofrece la creación más rápida de entornos.

Para instalarlo, ejecuta el siguiente comando:

=== ":simple-pypi: PyPi"

    ```bash
    # Windows
    pip install virtualenv
    # Linux
    pip3 install virtualenv
    ```

=== ":fontawesome-brands-apple: macOS"

    ```bash
    brew install virtualenv
    ```

=== ":material-ubuntu: Debian / Ubuntu"

    ```bash
    sudo apt update
    sudo apt install python3-virtualenv
    ```

=== ":material-fedora: Fedora"

    ```bash
    sudo dnf install python3-virtualenv
    ```

???- abstract "Administrar entornos con virtualenv"

    === ":fontawesome-brands-windows: Windows"

        **1. Crear Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        virtualenv .venv
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
        virtualenv --clear .venv
        ```

        La opción `--clear` elimina el contenido existente del directorio del entorno antes de reconstruirlo.

        **5. Eliminar el Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        (.venv) deactivate
        rmdir /s /q .venv
        ```

    === ":fontawesome-brands-linux: Linux / :fontawesome-brands-apple: macOS"

        **1. Crear Entorno Virtual**

        ```bash title="Terminal"
        virtualenv .venv
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
        virtualenv --clear .venv
        ```

        La opción `--clear` elimina el contenido existente del directorio del entorno antes de reconstruirlo.


        **5. Eliminar el Entorno Virtual**

        ```bash title="Terminal"
        rm -rf .venv
        ```
