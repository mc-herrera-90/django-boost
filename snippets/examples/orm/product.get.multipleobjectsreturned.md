!!! failure "Ejemplo: error MultipleObjectsReturned"

    === ":octicons-code-16: Código Python"

        ```{ .py hl_lines="3" } 
        from products.models import Supplier

        Supplier.objects.get(product_id=2) #(1)!
        ```

        1. La consulta coincide con **3 proveedores** asociados al producto con `id=2`, por lo que `get()` genera la excepción `MultipleObjectsReturned`.

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7-16" }
        --8<-- "snippets/outputs/django-shell.txt"
        >>> from products.models import Supplier
        >>>
        >>> Supplier.objects.get(product_id=2)
        Traceback (most recent call last):
        File "<input>", line 1, in <module>
            Supplier.objects.get(product_id=2)
        File "/home/mcherrera/.venv/lib/python3.12/site-packages/django/db/models/manager.py", line 87, in manager_method
            return getattr(self.get_queryset(), name)(*args, **kwargs)
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        File "/home/mcherrera/.venv/lib/python3.12/site-packages/django/db/models/query.py", line 686, in get
            raise self.model.MultipleObjectsReturned(
        products.models.Supplier.MultipleObjectsReturned: get() returned more than one Supplier -- it returned 3!
        >>> exit()
        ```
