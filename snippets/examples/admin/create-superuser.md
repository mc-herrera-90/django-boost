Para acceder al panel administrativo necesitamos un **usuario con permisos de administración**.

El **superusuario** es una cuenta con **todos los permisos administrativos** del proyecto y se utiliza para iniciar sesión en el **panel de administración**. Para crear esta cuenta, ejecuta el siguiente comando:

=== "Comando"
    ```bash
    (.venv) python manage.py createsuperuser
    ```

=== "Output"

    ```bash hl_lines="2 4 5"
    (.venv) python manage.py createsuperuser
    Username (leave blank to use 'marco'): admin
    Email address: admin@admin.cl
    Password: ******
    Password (again): ******
    This password is too short. It must contain at least 8 characters.
    This password is too common.
    This password is entirely numeric.
    Bypass password validation and create user anyway? [y/N]: y
    Superuser created successfully.
    ```
