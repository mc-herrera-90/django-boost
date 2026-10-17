???+ abstract "Administrar entornos con venv"

    === ":fontawesome-brands-windows: Windows"

        **1. Crear Entorno Virtual**


        ```{ .powershell .cmd .mt-0 }
        python -m venv .venv
        ```

        **2. Activar el Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        .venv\Scripts\activate.bat
        ```

        **3. Desactivar el Entorno Virtual**

        ```{ .powershell .cmd .mt-0 }
        (.venv) deactivate
        ```

        **4. Limpiar el Entorno Virtual (recrearlo desde 0)**

        ```{ .powershell .cmd .mt-0 }
        python -m venv --clear .venv
        ```

    === ":fontawesome-brands-linux: Linux /:fontawesome-brands-apple: macOS"

        **1. Crear Entorno Virtual**

        ```bash title="Terminal"
        python3 -m venv .venv
        ```

        **2. Activar el Entorno Virtual**

        ```bash title="Terminal"
        source .venv/bin/activate
        ```

        **3. Desactivar el Entorno Virtual**

        ```bash title="Terminal"
        (.venv) deactivate
        ```

        **4. Limpiar el Entorno Virtual (recrearlo desde 0)**

        ```bash title="Terminal"
        python3 -m venv --clear .venv
        ```
