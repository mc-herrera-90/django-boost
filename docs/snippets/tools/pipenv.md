=== ":simple-pypi: PyPi"

    ```bash
    # Windows
    pip install --user pipenv
    # Linux
    pip3 install --user pipenv
    ```

    ???+ info "Información"
        Al instalar Pipenv con la opción `--user`, es posible que deba agregar el directorio de los ejecutables al `PATH` para poder utilizar el comando `pipenv` desde la terminal.

        En Linux y macOS, se puede consultar la ruta de instalación con:

        ```bash title="Terminal"
        python3 -m site --user-base
        # Output: /Users/mcherrera/Library/Python/3.14
        ```

        Normalmente, los ejecutables se encuentran en el directorio `bin` dentro de esa ruta. Para agregarlo al `PATH` en Bash o Zsh, ejecute:

        ```bash title="Terminal"
        echo 'export PATH="$HOME/Library/Python/3.9/bin:$PATH"' >> ~/.bashrc
        source ~/.bashrc # o .zshrc si usas zsh
        ```

        Finalmente, comprobamos que Pipenv esté disponible:

        ```bash title="Terminal"
        pipenv --version
        # Output: pipenv, version 2025.0.4
        ```

=== ":fontawesome-brands-apple: macOS"

    ```bash
    brew install pipenv
    ```

    ???+ warning "Advertencia"
        No se recomienda la instalación mediante Homebrew, ya que funciona mejor instalar pipenv usando pip en macOS.

=== ":material-ubuntu: Debian / Ubuntu"

    ```bash
    sudo apt update
    sudo apt install pipenv
    ```

=== ":material-fedora: Fedora"

    ```bash
    sudo dnf install pipenv
    ```

???- abstract "Administrar entornos con Pipenv"

    === ":fontawesome-brands-windows: Windows"

        **1. Crear un nuevo Entorno Virtual**

        ```{ .powershell .cmd .mt-0 .mb-0 }
        pipenv install
        ```

        ???+ info "Información"
            Si no existe un archivo `Pipfile` en el directorio del proyecto, Pipenv lo crea. Si ya existe, crea el entorno virtual e instala las dependencias definidas en el archivo, utilizando el archivo `Pipfile.lock` si está disponible.

        **2. Activar el Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        pipenv shell
        ```

        **3. Desactivar el Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        (.venv) exit
        ```

        **4. Limpiar la caché de dependencias**

        ```bash title="Terminal"
        pipenv --clear
        ```

        **5. Eliminar el Entorno Virtual asociado al proyecto**

        ```{ .powershell .cmd .mt-0 }
        (.venv) exit
        pipenv --rm
        ```

    === ":fontawesome-brands-linux: Linux / :fontawesome-brands-apple: macOS"

        **1. Crear un nuevo Entorno Virtual**

        ```bash title="Terminal"
        pipenv install
        ```

        **2. Activar el Entorno Virtual**

        ```bash title="Terminal"
        pipenv shell
        ```

        **3. Desactivar el Entorno Virtual**

        ```bash title="Terminal"
        (.venv) exit
        ```

        **4. Limpiar la caché de dependencias**

        ```bash title="Terminal"
        pipenv --clear
        ```

        **5. Eliminar el Entorno Virtual asociado al proyecto**

        ```bash title="Terminal"
        (.venv) exit
        pipenv --rm
        ```

???+ abstract "Administrar dependencias con Pipenv"

    **1. Instalar un paquete (se registrará en el archivo `Pipfile` y `Pipfile.lock`)**

    ```bash title="Terminal"
    pipenv install requests
    ```

    **2. Eliminar un paquete o eliminar todos los paquetes**

    ```bash title="Terminal"
    pipenv uninstall requests
    pipenv uninstall --all
    ```
