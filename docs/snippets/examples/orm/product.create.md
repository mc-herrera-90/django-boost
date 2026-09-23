???+ example "Ejemplo: inserción exitosa con `create()`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3"
        from products.models import Product

        Product.objects.create(name="Teclado", category="Periféricos", price=34990, stock=15)
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7 8" }
        --8<-- "snippets/outputs/django-shell.txt"
        >>> from products.models import Product
        >>>
        >>> Product.objects.create(name="Teclado", category="Periféricos", price=34990, stock=15)
        <Product: Teclado>
        >>> exit()
        ```
