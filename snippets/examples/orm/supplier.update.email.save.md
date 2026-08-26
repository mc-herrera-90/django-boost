!!! example "Ejemplo: actualización de un `Supplier`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3-7"
        from products.models import Supplier

        supplier = Supplier.objects.get(id=1) #(1)!
        supplier.email #(2)!
        supplier.email = "soporte@techstore.cl" #(3)!
        supplier.save() #(4)!
        supplier.email #(5)!
        ```

        1. Obtenemos el proveedor con `id=1` para trabajar con su instancia.
        2. Consultamos el correo actual.
        3. Modificamos el correo electrónico del proveedor.
        4. Guardamos los cambios en la base de datos mediante `save()`.
        5. Consultamos el correo actualizado para comprobar el cambio.

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7-13" }
        --8<-- "snippets/outputs/django-shell.txt"
        >>> from products.models import Supplier
        >>>
        >>> supplier = Supplier.objects.get(id=1)
        >>> supplier.email
        'contacto@techstore.cl'
        >>> supplier.email = "soporte@techstore.cl"
        >>> supplier.save()
        >>> supplier.email
        'soporte@techstore.cl'
        >>> exit()
        ```
