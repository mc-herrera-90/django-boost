!!! example "Ejemplo: insertar múltiples `Supplier` con `bulk_create()`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="4-22"
        from products.models import Product, Supplier  # (1)!

        product = Product.objects.get(name="Teclado")  # (2)!
        Supplier.objects.bulk_create(  # (3)!
            [
                Supplier(
                    name="TechStore",
                    email="contacto@techstore.cl",
                    product=product
                ),
                Supplier(
                    name="ElectroMarket",
                    email="ventas@electromarket.cl",
                    product=product
                ),
                Supplier(
                    name="Digital World",
                    email="contacto@digitalworld.cl",
                    product=product
                )
            ]
        )
        ```

        1. Importamos los modelos `Product` y `Supplier` que utilizaremos para realizar la inserción.
        2. Obtenemos el producto `Teclado` que utilizaremos para asociarlo a los proveedores.
        3. Utilizamos `bulk_create()` para insertar múltiples proveedores en una sola operación.

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7-27" }
        --8<-- "snippets/outputs/django-shell.txt"
        >>> from products.models import Product, Supplier
        >>>
        >>> product = Product.objects.get(name="Teclado")
        >>> Supplier.objects.bulk_create(
        ...     [
        ...         Supplier(
        ...             name="TechStore",
        ...             email="contacto@techstore.cl",
        ...             product=product
        ...         ),
        ...         Supplier(
        ...             name="ElectroMarket",
        ...             email="ventas@electromarket.cl",
        ...             product=product
        ...         ),
        ...         Supplier(
        ...             name="Digital World",
        ...             email="contacto@digitalworld.cl",
        ...             product=product
        ...         )
        ...     ]
        ... )
        [<Supplier: TechStore>, <Supplier: ElectroMarket>, <Supplier: Digital World>]
        >>>
        ```
