!!! example "Ejemplo: inserción exitosa con `save()`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3 4"
        from products.models import Product #(1)!

        producto = Product(name="Notebook", category="Electrónica", price=899990, stock=10) #(2)!
        producto.save() #(3)!
        ```

        1. Importamos la clase del modelo `Product`
        2. Instanciamos la clase y la almacenamos en una variable
        3. Invocamos al método `save()` para insertar el producto en la base de datos

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7 8" }
        --8<-- "snippets/outputs/django-shell.txt"
        >>> from products.models import Product
        >>>
        >>> producto = Product(name="Notebook", category="Electrónica", price=899990, stock=10)
        >>> producto.save()
        >>> exit()
        ```

<div class="grid cards" markdown>

!!! success "Resultado"

    Si al ejecutar `save()` no se muestra ningún error en la Shell de Django, significa que el registro se guardó correctamente en la base de datos.

!!! tip "Consejo"

    El método `save()` es útil cuando necesitamos **trabajar con la instancia antes de guardarla**, por ejemplo, para realizar validaciones o modificar sus valores.
    
</div>
