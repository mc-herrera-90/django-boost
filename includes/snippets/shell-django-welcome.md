=== ":octicons-terminal-16: Shell python"
    ```{ .plaintext .no-copy hl_lines="1 6" }
    python manage.py shell -i python
    Python 3.9.2 (default, Feb 28 2021, 17:03:44) 
    [GCC 10.2.1 20210110] on linux
    Type "help", "copyright", "credits" or "license" for more information.
    (InteractiveConsole)
    >>>
    ```
    !!! info "Python intérprete estándar"
        Intérprete estándar de Python, utilizado por Django por defecto.

=== ":octicons-terminal-16: Shell bpython"
    ```{ .python .no-copy hl_lines="1 2" }
    python manage.py shell -i bpython
    >>>
    Welcome to bpython! Press <F1> for help.
    ```
    !!! info "bpython intérprete alternativo y ligero"
        Intérprete interactivo ligero, con autocompletado y una interfaz más amigable.

        Instalar IPython con pip:
        ```bash title="Terminal"
        pip install bpython
        ```

=== ":octicons-terminal-16: Shell ipython"
    ```{ .python .no-copy hl_lines="1 6" }
    python manage.py shell -i ipython
    Python 3.9.2 (default, Feb 28 2021, 17:03:44)
    Type 'copyright', 'credits' or 'license' for more information
    IPython 8.18.1 -- An enhanced Interactive Python. Type '?' for help.

    In [1]:
    ```

    !!! info "IPython intérprete avanzado"
        Intérprete interactivo avanzado, con autocompletado, resaltado de sintaxis y otras herramientas.

        Instalar IPython con pip:
        ```bash title="Terminal"
        pip install ipython
        ```
