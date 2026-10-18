El paquete `venv` ya forma parte de la biblioteca estándar de Python desde la versión 3.3. Viene habitualmente incluido en la [instalación estándar de Python en Windows](https://speakerdeck.com/player/bc729009adbc4ca78c81dfade6b9133b){ data-dialog="iframe" data-dialog-title="Instalación de Python" }, mientras que en algunas distribuciones de Linux puede requerir la instalación de un paquete por separado.

Para comprobarlo, ejecuta el siguiente comando:

=== ":fontawesome-brands-windows: Windows"

    ```bash
    python -m venv --help
    ```

=== ":fontawesome-brands-linux: Linux /:fontawesome-brands-apple: macOS"

    ```bash
    python3 -m venv --help
    ```

=== ":material-console: Output"

    ```{.plaintext .no-copy hl_lines="1" }
    python -m venv --help
    usage: python -m venv [-h] [--system-site-packages] [--symlinks |
                        --copies] [--clear] [--upgrade]
                        [--without-pip] [--prompt PROMPT]
                        [--upgrade-deps] [--without-scm-ignore-files]
                        ENV_DIR [ENV_DIR ...]

    Creates virtual Python environments in one or more target
    directories.

    positional arguments:
    ENV_DIR               A directory to create the environment in.

    options:
    -h, --help            show this help message and exit
    --system-site-packages
                            Give the virtual environment access to the
                            system site-packages dir.
    --symlinks            Try to use symlinks rather than copies, when
                            symlinks are not the default for the
                            platform.
    --copies              Try to use copies rather than symlinks, even
                            when symlinks are the default for the
                            platform.
    --clear               Delete the contents of the environment
                            directory if it already exists, before
                            environment creation.
    --upgrade             Upgrade the environment directory to use
                            this version of Python, assuming Python has
                            been upgraded in-place.
    --without-pip         Skips installing or upgrading pip in the
                            virtual environment (pip is bootstrapped by
                            default)
    --prompt PROMPT       Provides an alternative prompt prefix for
                            this environment.
    --upgrade-deps        Upgrade core dependencies (pip) to the
                            latest version in PyPI
    --without-scm-ignore-files
                            Skips adding SCM ignore files to the
                            environment directory (Git is supported by
                            default).

    Once an environment has been created, you may wish to activate it,
    e.g. by sourcing an activate script in its bin directory.
    ```

En caso de no tener instalado `venv`, puedes usar los siguientes comandos:

=== ":material-debian: Debian / Ubuntu"

    ```bash
    sudo apt update
    sudo apt install python3-venv
    ```

=== ":material-fedora: Fedora"

    ```bash
    sudo dnf install python3
    ```

Para gestionar un entorno virtual usando el paquete `venv`, ubicate en la carpeta donde quieres configurarlo y sigue los pasos según tu plataforma:

--8<-- "snippets/commands/python-venv.md"

!!! info "Nombre del entorno"

    Se recomienda utilizar `venv` o `.venv` como nombre del entorno virtual. La opción `.venv` es habitual porque se considera una carpeta oculta en sistemas Unix y ayuda a mantenerla separada del código del proyecto.
