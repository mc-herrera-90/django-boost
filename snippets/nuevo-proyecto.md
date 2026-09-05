A continuación, selecciona tu plataforma y sigue los pasos indicados para configurar el nuevo proyecto.

???- abstract "Ver Instrucciones"

    === ":fontawesome-brands-windows: Windows"
        !!! info "1. Abrir el símbolo de sistema"

            Presiona ++win+r++ para abrir la ventana **Ejecutar**.
            Escribe `cmd` y presiona ++enter++ para abrir el **Símbolo del sistema (CMD)**.

        !!! info "2. Ir a la ubicación deseada"

            Una vez que tengas el CMD abierto, usa el comando `cd` para navegar a la carpeta donde deseas crear tu proyecto. Por ejemplo, si deseas ir a la carpeta Documentos:

            ```powershell title="CMD"
            cd %UserProfile%\Documents #(1)!
            ```

            1. Ingresa a la carpeta **Documentos** del usuario actual.

        !!! info "3. Crear la carpeta del proyecto y acceder a ella"

            Ejecuta el siguiente comando reemplazando <span class="code-variable" contenteditable="plaintext-only" data-variable="PROJECT" role="textbox" spellcheck="false" aria-label="Nombre del proyecto">mi-proyecto</span> por el nombre deseado:

            ```{ .powershell title="CMD" }
            mkdir //PROJECT// #(1)!
            cd //PROJECT// #(2)!
            ```

            2. Crea la carpeta del proyecto
            3. Ingresa a la carpeta creada anteriormente

        !!! info "4. Crear el entorno virtual"

            Ejecuta el siguiente comando para crear un entorno virtual en la carpeta del proyecto:

            ```powershell title="CMD"
            python -m venv .venv #(1)!
            ```

            4. Crea un entorno virtual de Python llamado `.venv`.

        !!! info "5. Activar el entorno virtual"

            ```powershell title="CMD"
            .\.venv\Scripts\activate
            ```

            Una vez activado, deberías ver `(.venv)` al comienzo de la línea de comandos.

            ![Activar venv en CMD](../assets/activar-venv-cmd.webp){:.bordered-image}


        !!! info "6. Instalar Django en el entorno virtual"
            
            Una vez que el entorno virtual está activado, instala Django con el siguiente comando:

            ```powershell title="CMD"
            pip install django
            ```

        !!! info "7. Generar un nuevo proyecto de django"

            ```powershell title="CMD"
            django-admin startproject _site . #(1)!
            ```

            1. Crea la estructura base del proyecto Django. `_site` puede tener cualquier nombre y contiene la configuración global del proyecto.


    === ":fontawesome-brands-linux: Linux"

        !!! info "1. Abrir la terminal"
            
            Presiona las teclas ++ctrl+alt+t++ o busca **Terminal** en tu lanzador de aplicaciones para abrir una nueva Terminal.

        !!! info "2. Navegar a la ubicación deseada"
            
            Una vez que tengas la terminal abierta, usa el comando `cd` para navegar a la carpeta donde deseas crear el proyecto Django. Por ejemplo, ir a __Documentos__:

            ```bash title="Terminal"
            cd ~/Documents
            ```

        !!! info "3. Crear la carpeta del proyecto"

            Ejecuta el siguiente comando reemplazando <span class="code-variable" contenteditable="plaintext-only" data-variable="PROJECT" role="textbox" spellcheck="false" aria-label="Nombre del proyecto">mi-proyecto</span> por el nombre que deseas:

            ```powershell title="Terminal"
            mkdir //PROJECT// #(1)!
            cd //PROJECT// #(2)!
            ```

            1. Crea la carpeta del proyecto
            2. Ingresa a la carpeta creada anteriormente

        !!! info "4. Crear el entorno virtual"

            ```bash title="Terminal"
            python3 -m venv .venv
            ```

        !!! info "5. Activar el entorno virtual"

            ```bash title="Terminal"
            source .venv/bin/activate
            ```

            Una vez activado, deberías ver `(.venv)` al comienzo de la terminal.

        !!! info "6. Instalar Django en el entorno virtual"
            
            Una vez que el entorno virtual está activado, instala Django con el siguiente comando:

            ```powershell title="Terminal"
            pip install django
            ```

    === ":fontawesome-brands-apple: macOS"
        !!! info "1. Abrir la terminal de comandos"
            Presiona ++cmd+space++ para abrir **Spotlight**, luego escribe **terminal** y presiona ++enter++

        !!! info "2. Navegar a la ubicación deseada"
            Una vez que tengas la terminal abierta, usa el comando `cd` para navegar a la carpeta donde deseas crear el proyecto Django. Por ejemplo, ir a __Documentos__:

            ```bash title="Terminal"
            cd ~/Documents
            ```

        !!! info "3. Crear la carpeta del proyecto"

            Ejecuta el siguiente comando reemplazando <span class="code-variable" contenteditable="plaintext-only" data-variable="PROJECT" role="textbox" spellcheck="false" aria-label="Nombre del proyecto">mi-proyecto</span> por el nombre que deseas:

            ```powershell title="Terminal"
            mkdir //PROJECT// #(1)!
            cd //PROJECT// #(2)!
            ```

            3. Crea la carpeta del proyecto
            4. Ingresa a la carpeta creada anteriormente

        !!! info "4. Crear el entorno virtual"

            ```bash title="Terminal"
            python3 -m venv .venv
            ```

        !!! info "5. Activar el entorno virtual"

            ```bash title="Terminal"
            source .venv/bin/activate
            ```

            Una vez activado, deberías ver `(.venv)` al comienzo de la terminal.
