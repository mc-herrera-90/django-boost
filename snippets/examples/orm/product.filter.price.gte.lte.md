!!! example "Ejemplo: búsqueda con `gte` y `lte`"

    === ":octicons-code-16: Python"

        ```{ .py hl_lines="3 4" }
        from products.models import Product

        Product.objects.filter(price__gte=100000)
        Product.objects.filter(stock__lte=10)
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7-10" }
        --8<-- "snippets/outputs/django-shell.txt"
        >>> from products.models import Product
        >>>
        >>> Product.objects.filter(price__gte=100000)
        <QuerySet [<Product: Notebook>, <Product: Monitor>]>
        >>> Product.objects.filter(stock__lte=10)
        <QuerySet [<Product: Notebook>, <Product: Monitor>]>
        >>> exit()
        ```
