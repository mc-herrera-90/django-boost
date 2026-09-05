???+ example "Ejemplo: inserción múltiples `Product` con `bulk_create()`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3-24"
        from products.models import Product

        Product.objects.bulk_create(
            [
                Product(
                    name="Monitor",
                    category="Periféricos",
                    price=159990,
                    stock=8
                ),
                Product(
                    name="Webcam",
                    category="Periféricos",
                    price=45990,
                    stock=12
                ),
                Product(
                    name="Audífonos",
                    category="Audio",
                    price=29990,
                    stock=20
                )
            ]
        )
        ```

    === ":octicons-terminal-16: Shell Django"
        ```{ .python .no-copy hl_lines="1 5 7-29" }
        (.venv) ➜  python manage.py shell
        Python 3.12.3 (main, Jun 19 2026, 12:46:00) [GCC 13.3.0] on linux
        Type "help", "copyright", "credits" or "license" for more information.
        (InteractiveConsole)
        >>> from products.models import Product
        >>> 
        >>> Product.objects.bulk_create(
        ...     [
        ...         Product(
        ...             name="Monitor",
        ...             category="Periféricos",
        ...             price=159990,
        ...             stock=8
        ...         ),
        ...         Product(
        ...             name="Webcam",
        ...             category="Periféricos",
        ...             price=45990,
        ...             stock=12
        ...         ),
        ...         Product(
        ...             name="Audífonos",
        ...             category="Audio",
        ...             price=29990,
        ...             stock=20
        ...         )
        ...     ]
        ... )
        [<Product: Monitor>, <Product: Webcam>, <Product: Audífonos>]
        >>>
        ```
