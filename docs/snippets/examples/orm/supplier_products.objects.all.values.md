???+ example "Ejemplo: obtener los valores con `values()`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3 4"
        from products.models import Supplier, Product
        
        Supplier.objects.all().values()
        Product.objects.all().values()
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7 9-11 14 16-20" }
        --8<-- "snippets/outputs/django-shell.txt"
        >>> from products.models import Supplier, Product
        >>>
        >>> Supplier.objects.all().values()
        <QuerySet [
            {'id': 1, 'name': 'TechStore', 'email': 'contacto@techstore.cl', 'product_id': 2},
            {'id': 2, 'name': 'ElectroMarket', 'email': 'ventas@electromarket.cl', 'product_id': 2},
            {'id': 3, 'name': 'Digital World', 'email': 'contacto@digitalworld.cl', 'product_id': 2}
        ]>
        >>>
        >>> Product.objects.all().values()
        <QuerySet [
            {'id': 1, 'name': 'Notebook', 'category': 'Electrónica', 'price': 899990, 'stock': 10},
            {'id': 2, 'name': 'Teclado', 'category': 'Periféricos', 'price': 34990, 'stock': 15},
            {'id': 3, 'name': 'Monitor', 'category': 'Periféricos', 'price': 159990, 'stock': 8},
            {'id': 4, 'name': 'Webcam', 'category': 'Periféricos', 'price': 45990, 'stock': 12},
            {'id': 5, 'name': 'Audífonos', 'category': 'Audio', 'price': 29990, 'stock': 20}
        ]>
        >>> exit()
        ```
