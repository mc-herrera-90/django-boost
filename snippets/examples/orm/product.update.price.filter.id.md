!!! example "Ejemplo: actualización de un `Product`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3-5"
        from products.models import Product

        Product.objects.get(id=2).price #(1)!
        Product.objects.filter(id=2).update(price=39990) #(2)!
        Product.objects.get(id=2).price #(3)!
        ```

        1. Consultamos el precio actual del producto.
        2. Actualizamos el precio del producto a `39990`.
        3. Consultamos nuevamente el precio para comprobar la actualización.

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7-12" }
        --8<-- "snippets/outputs/django-shell.txt"
        >>> from products.models import Product
        >>>
        >>> Product.objects.get(id=2).price
        34990
        >>> Product.objects.filter(id=2).update(price=39990)
        1
        >>> Product.objects.get(id=2).price
        39990
        >>> exit()
        ```
