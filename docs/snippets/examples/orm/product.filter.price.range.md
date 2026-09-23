!!! example "Ejemplo: búsqueda con `range`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3 4"
        from products.models import Product

        Product.objects.filter(price__range=(30000, 100000))
        Product.objects.filter(price__range=(30000, 200000))
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7-10" }
        --8<-- "snippets/outputs/django-shell.txt"
        >>> from products.models import Product
        >>>
        >>> Product.objects.filter(price__range=(30000, 100000))
        <QuerySet [<Product: Teclado>, <Product: Webcam>]>
        >>> Product.objects.filter(price__range=(30000, 200000))
        <QuerySet [<Product: Teclado>, <Product: Monitor>, <Product: Webcam>]>
        >>> exit()
        ```
