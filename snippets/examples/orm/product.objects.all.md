???+ example "Ejemplo: consulta con `all()`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3 4"
        from products.models import Supplier, Product
        
        Supplier.objects.all()
        Product.objects.all()
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7 9" }
        --8<-- "snippets/outputs/django-shell.txt"
        >>> from products.models import Supplier, Product
        >>>
        >>> Supplier.objects.all()
        <QuerySet [<Supplier: TechStore>, <Supplier: ElectroMarket>, <Supplier: Digital World>]>
        >>> Product.objects.all()
        <QuerySet [<Product: Notebook>, <Product: Teclado>, <Product: Monitor>, <Product: Webcam>, <Product: Audífonos>]>
        >>> exit()
        ```
