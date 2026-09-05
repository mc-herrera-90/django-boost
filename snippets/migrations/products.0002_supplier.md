=== "Comandos"

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

=== "Output"

    ```{ .plaintext .no-copy hl_lines="1 5" }
    (.venv) ➜ python manage.py makemigrations
    Migrations for 'products':
    products/migrations/0002_supplier.py
        + Create model Supplier
    (.venv) ➜ python manage.py migrate
    Operations to perform:
    Apply all migrations: admin, auth, contenttypes, products, sessions
    Running migrations:
    Applying products.0002_supplier... OK
    ```
