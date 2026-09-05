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

        --8<-- "snippets/steps-setup-django/step-6-instalar-django.md"
        --8<-- "snippets/steps-setup-django/step-7-generar-proyecto"
        --8<-- "snippets/steps-setup-django/step-8-archivos-del-proyecto.md"

    === ":fontawesome-brands-linux: Linux"

        !!! info "1. Abrir la terminal"
            
            Presiona las teclas ++ctrl+alt+t++ o busca **Terminal** en tu lanzador de aplicaciones para abrir una nueva Terminal.

        --8<-- "snippets/steps-setup-django/step-2-cambiarse-de-ubicacion.md"
        --8<-- "snippets/steps-setup-django/step-3-crear-y-acceder-a-carpeta.md"
        --8<-- "snippets/steps-setup-django/step-4-crear-el-entorno.md"
        --8<-- "snippets/steps-setup-django/step-5-activar-el-entorno.md"
        --8<-- "snippets/steps-setup-django/step-6-instalar-django.md"
        --8<-- "snippets/steps-setup-django/step-7-generar-proyecto"
        --8<-- "snippets/steps-setup-django/step-8-archivos-del-proyecto.md"

    === ":fontawesome-brands-apple: macOS"
        !!! info "1. Abrir la terminal de comandos"
            Presiona ++cmd+space++ para abrir **Spotlight**, luego escribe **terminal** y presiona ++enter++

        --8<-- "snippets/steps-setup-django/step-2-cambiarse-de-ubicacion.md"
        --8<-- "snippets/steps-setup-django/step-3-crear-y-acceder-a-carpeta.md"
        --8<-- "snippets/steps-setup-django/step-4-crear-el-entorno.md"
        --8<-- "snippets/steps-setup-django/step-5-activar-el-entorno.md"
        --8<-- "snippets/steps-setup-django/step-6-instalar-django.md"
        --8<-- "snippets/steps-setup-django/step-7-generar-proyecto"
        --8<-- "snippets/steps-setup-django/step-8-archivos-del-proyecto.md"
