!!! example "Ejemplo: eliminar múltiples `Supplier`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3-5"
        from products.models import Supplier

        Supplier.objects.all() #(1)!
        Supplier.objects.all().delete() #(2)!
        Supplier.objects.all() #(3)!
        ```

        1. Consultamos los `Supplier` almacenados actualmente.
        2. Eliminamos todos los `Supplier` mediante `delete()`.
        3. Consultamos nuevamente los registros para comprobar la eliminación.

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7-12" }
        --8<-- "snippets/outputs/django-shell.txt"
        >>> from products.models import Supplier
        >>>
        >>> Supplier.objects.all()
        <QuerySet [<Supplier: TechStore>, <Supplier: ElectroMarket>]>
        >>> Supplier.objects.all().delete()
        (2, {'products.Supplier': 2})
        >>> Supplier.objects.all()
        <QuerySet []>
        >>> exit()
        ```
