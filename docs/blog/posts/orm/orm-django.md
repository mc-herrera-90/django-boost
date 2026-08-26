---
date: 2024-05-15
title: Shell de Django, ORM y QuerySets
description: "El Shell De Django, una herramienta que es fundamental en la etapa de desarrollo y depuración"
tags: ["orm", "querysets"]
categories:
  - Orm
  - Modelos
authors:
  - mcherrera
---

!!! abstract "En resumen"

    El **Shell de Django** es una herramienta esencial durante la etapa de desarrollo y depuración de tus proyectos. Permite acceder directamente al ORM y a los QuerySets para realizar consultas y trabajar con la base de datos.
<!-- more -->

## ¿Qué es Django Shell?

El **shell de Django** es una interfaz de línea de comandos interactiva que combina el intérprete de Python con las funcionalidades de Django. Al iniciarlo, carga automáticamente la configuración del proyecto, permitiendo trabajar directamente con sus aplicaciones y modelos.

Una de sus principales ventajas es el acceso al **ORM (Object-Relational Mapper)** de Django, que permite **consultar, crear, modificar y eliminar datos** de la base de datos utilizando Python, sin necesidad de escribir directamente consultas SQL.

Django utiliza **Python** como intérprete interactivo por defecto. Sin embargo, también puedes utilizar [**IPython**](https://ipython.org/){target="_blank" rel="noopener"} o [**bpython**](https://bpython-interpreter.org/){target="_blank" rel="noopener"} como alternativas, siempre que estén instalados en el entorno virtual del proyecto.

## Accediendo al Shell de Django

Para acceder al shell de Django, solo necesitas ejecutar el comando `shell` en un proyecto de Django. Es necesario tener un proyecto de Django configurado y en marcha, si quieres comenzar a configurar un proyecto desde cero, sigue las instrucciones para **la plataforma** correspondiente.

## Nuevo proyecto

--8<-- "snippets/nuevo-proyecto.md"

Una vez generado el proyecto, tendrás disponible el archivo `manage.py` en el proyecto:

--8<-- "snippets/archivos-del-proyecto-starproject.md"

Ahora, podemos ejecutar el siguiente comando para ingresar al shell de Django:

```bash title="Terminal"
python manage.py shell
```

Podemos observar como entra en modo interactivo, invitandonos a escribir nuevas instrucciones.

--8<-- "includes/snippets/shell-django-welcome.md"

???+ info
    Para salir del modo interactivo, debes escribir `exit()` o con la combinación de teclas ++ctrl+d++

## ¿Qué es un ORM?

Un **ORM (Object-Relational Mapping)** es una técnica que permite interactuar con bases de datos relacionales mediante objetos y código del lenguaje de programación, evitando escribir SQL directamente. **Django ORM** implementa este enfoque en Python, permitiendo **crear, consultar, actualizar y eliminar** registros mediante modelos y métodos.

Sus componentes principales son:

**Modelos :material-table:**
:   Clases de Python que representan las tablas de la base de datos. Sus atributos representan las columnas y heredan de `models.Model`.

**Managers :material-cog:**
:   Interfaces que permiten acceder a los modelos y construir consultas sobre sus datos. El manager predeterminado es `objects`.

**QuerySets :material-filter:**
:   Representan consultas sobre los datos de un modelo y permiten **filtrar, ordenar y manipular** registros. Son **perezosos**: métodos como `filter()` construyen la consulta sin ejecutarla inmediatamente. Esta se ejecuta cuando el `QuerySet` es evaluado, por ejemplo, al **iterarlo o convertirlo en una lista**.

???- info "Funcionamiento del ORM de Django"
    ```mermaid
    --8<-- "snippets/diagramas/funcionamiento-del-orm-de-django.mmd"
    ```

## Crear una aplicación

Antes de profundizar en el **Shell de Django** y los **QuerySets del ORM**, debemos crear una aplicación que nos permita definir modelos y realizar operaciones sobre la base de datos.

Asumiendo que ya tienes el proyecto generado siguiendo las [instrucciones](#nuevo-proyecto), podemos crear la aplicación `products` utilizando el archivo `manage.py`:

```bash title="Terminal"
python manage.py startapp products
```

Esto creará la estructura inicial de la aplicación, donde posteriormente definiremos nuestro modelo y comenzar a trabajar con él desde el Shell de Django.

## Crear un modelo

Ahora podemos definir un modelo abriendo el archivo `products/models.py` y definir el siguiente modelo:

<div class="grid first-grid cards" markdown>

```py title="products/models.py" linenums="1"
from django.db import models


class Product(models.Model):

    name = models.CharField(max_length=50)
    category = models.CharField(max_length=30)
    price = models.IntegerField()
    stock = models.IntegerField(default=0)

    def __str__(self):
        return self.name
```

```{ .plaintext .no-copy hl_lines="8" title="Abrir el Modelo" }
 ...
├──  _site
└──  products/
    ├──  migrations/
    ├──  __init__.py
    ├──  admin.py
    ├──  apps.py
    ├──  models.py
    ├──  tests.py
    └──  views.py
```

</div>

## Registrar la aplicación

Luego debemos abrir el archivo `_mysite/settings.py` y registrar la app generada:

<div class="grid first-grid cards" markdown>

```py title="_site/settings.py" hl_lines="8" linenums="33"
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'products'
]
```

```{ .plaintext .no-copy hl_lines="5" title="Abrir el archivo settings" }
 ...
└──  _site
    ├──  __init__.py
    ├──  asgi.py
    ├──  settings.py
    ├──  urls.py
    └──  wsgi.py
```

</div>

Con esto, Django reconocerá `products` como una aplicación perteneciente al proyecto.

## Aplicar las migraciones

Luego generamos una nueva migración con el comando `makemigrations` y corremos las migraciones pendientes con el comando `migrate`:

=== "Comandos"
    ```bash
    python manage.py makemigrations #(1)!
    python manage.py migrate #(2)!
    ```

    1. Genera una nueva migración que incluirá al modelo `Product` definido anteriormente.
    2. Ejecuta las migraciones pendiente y crea las tablas en la base de datos.

=== "Output"

    ```{ .plaintext .no-copy hl_lines="1 5" }
    --8<-- "snippets/outputs/products.0001_initial.txt"
    ```

Con esto, Django crea en **SQLite** la tabla correspondiente al modelo `Product`, dejándola lista para trabajar.

## Operaciones ORM en el shell

Ahora podemos comenzar a realizar operaciones con el modelo `Product` desde el **Shell de Django**:

=== "Comando"
    ```bash title="Terminal"
    python manage.py shell
    ```

=== "Output"
    --8<-- "includes/snippets/shell-django-welcome.md"

### :octicons-diff-added-16: Insertar

En Django, una **clase definida como modelo** que **hereda de `models.Model`** representa una tabla de la base de datos una vez que se han aplicado las migraciones, mientras que una instancia de esa clase representa un registro particular dentro de ella. Al crear y guardar una instancia, estamos realizando una operación equivalente a una sentencia [`INSERT`](https://en.wikipedia.org/wiki/Insert_%28SQL%29) en SQL.

El ORM de Django proporciona **dos métodos principales para insertar registros de forma individual**. Uno permite crear y guardar el registro mediante una **instancia del modelo**, mientras que el otro utiliza el **manager `objects`** para crearlo directamente.

#### :octicons-check-circle-16: Método `save()`

Podemos crear un registro **instanciando la clase del modelo** y proporcionando los valores mediante argumentos de palabras clave. Luego, debemos llamar al método `save()` para guardar la instancia y confirmar el nuevo registro en la base de datos.

En el siguiente ejemplo, veremos cómo agregar un nuevo registro al modelo `Product`:

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
        --8<-- "snippets/outputs/product.save.txt"
        ```

<div class="grid cards" markdown>

!!! success "Resultado"

    Si al ejecutar `save()` no se muestra ningún error en la Shell de Django, significa que el registro se guardó correctamente en la base de datos.

!!! tip "Consejo"

    El método `save()` es útil cuando necesitamos **trabajar con la instancia antes de guardarla**, por ejemplo, para realizar validaciones o modificar sus valores.
    
</div>

#### :octicons-plus-circle-16: Método `create()`

Otra forma de insertar un registro en el modelo `Product` es mediante el método `create()` de su **manager `objects`**. Este método crea y guarda directamente el registro en la base de datos, por lo que no es necesario llamar a `save()` por separado.

El siguiente ejemplo muestra su uso:

!!! example "Ejemplo: inserción exitosa con `create()`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3"
        from products.models import Product

        Product.objects.create(name="Teclado", category="Periféricos", price=34990, stock=15)
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7 8" }
        --8<-- "snippets/outputs/product.objects.create.txt"
        ```

<div class="grid cards" markdown>

!!! success "Resultado"

    Si observamos el resultado en la Shell, `create()` retorna la **instancia de `Product`** que acabamos de insertar. En este caso, `<Product: Teclado>` corresponde al objeto creado.

!!! tip "Consejo"

    El método `create()` es útil cuando queremos **crear y guardar un registro directamente**, sin necesidad de instanciar el modelo y llamar a `save()` por separado.

</div>

### :octicons-stack-16: Insertar múltiples registros

Ahora veremos cómo insertar **varios registros relacionados con `Product`**. Para ello, crearemos un nuevo modelo `Supplier` que nos permitirá representar los proveedores de los productos.

Creamos la clase `Supplier` dentro de :octicons-file-code-16: `models.py` en la aplicación:

<div class="grid first-grid cards" markdown>

```{ .py title="products/models.py" linenums="15" }
class Supplier(models.Model):

    name = models.CharField(max_length=50)
    email = models.EmailField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
```

```{ .plaintext .no-copy hl_lines="8" title="Abrir el Modelo" }
 ...
├──  _site
└──  products/
    ├──  migrations/
    ├──  __init__.py
    ├──  admin.py
    ├──  apps.py
    ├──  models.py
    ├──  tests.py
    └──  views.py
```

</div>

En la nueva clase `Supplier`, hemos definido los campos necesarios para representar a un proveedor y la hemos relacionado con el modelo `Product` mediante una llave foránea. De esta forma, cada proveedor queda asociado a un producto determinado. Además, definimos el método `__str__()` para representar el proveedor mediante su nombre.

Generamos una nueva migración y la aplicamos a la base de datos con el comando `migrate`:

=== "Comandos"

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

=== "Output"

    ```{ .plaintext .no-copy hl_lines="1 5" }
    --8<-- "snippets/outputs/products.0002_supplier.txt"
    ```

#### :octicons-plus-circle-16: Método `bulk_create()`

Ahora podemos volver a la Shell de Django e insertar múltiples registros en el modelo `Supplier` utilizando el método `bulk_create()`. Como el campo `product` es obligatorio, primero obtenemos el producto al que estarán asociados los proveedores y luego creamos todos los registros en una sola operación.

!!! example "Ejemplo: insertar múltiples `Supplier` con `bulk_create()`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="4-22"
        from products.models import Product, Supplier  # (1)!

        product = Product.objects.get(name="Teclado")  # (2)!
        Supplier.objects.bulk_create(  # (3)!
            [
                Supplier(
                    name="TechStore",
                    email="contacto@techstore.cl",
                    product=product
                ),
                Supplier(
                    name="ElectroMarket",
                    email="ventas@electromarket.cl",
                    product=product
                ),
                Supplier(
                    name="Digital World",
                    email="contacto@digitalworld.cl",
                    product=product
                )
            ]
        )
        ```

        1. Importamos los modelos `Product` y `Supplier` que utilizaremos para realizar la inserción.
        2. Obtenemos el producto `Teclado` que utilizaremos para asociarlo a los proveedores.
        3. Utilizamos `bulk_create()` para insertar múltiples proveedores en una sola operación.

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7-27" }
        --8<-- "snippets/outputs/supplier.objects.bulk_create.txt"
        ```

También podemos utilizar `bulk_create()` directamente con el modelo `Product` para insertar varios productos en una sola operación. En este caso, no necesitamos obtener previamente ningún objeto relacionado, ya que los campos definidos en `Product` son suficientes para crear cada registro.

!!! example "Ejemplo: inserción múltiples `Product` con `bulk_create()`"

    === ":octicons-code-16: Código Python"

        ```py
        from products.models import Product

        Product.objects.bulk_create(
            [
                Product(
                    name="Monitor",
                    category="Periféricos",
                    price=159990,
                    stock=8
                ),
                Product(
                    name="Webcam",
                    category="Periféricos",
                    price=45990,
                    stock=12
                ),
                Product(
                    name="Audífonos",
                    category="Audio",
                    price=29990,
                    stock=20
                )
            ]
        )
        ```

    === ":octicons-terminal-16: Shell Django"
        ```{ .python .no-copy hl_lines="1 5 7-29" }
        --8<-- "snippets/outputs/product.object.bulk_create.txt"
        ```

Ahora que ya hemos guardado objetos en la base de datos, vamos a continuar con la operación de obtener esos registros.

### :octicons-list-unordered-16: Listar

Para **consultar registros** en el ORM de Django utilizamos el **manager `objects`** del modelo. Sus métodos de consulta retornan un **`QuerySet`**, que representa una colección de objetos obtenidos desde la base de datos. A continuación, veremos los principales métodos para listar registros.

#### :octicons-check-circle-16: Método `all()`

El método `all()` nos permite obtener **todos los objetos** del modelo `Supplier` y retorna un `QuerySet` que contiene los registros almacenados en la base de datos:

!!! example "Ejemplo: consulta con `all()`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3 4"
        from products.models import Supplier, Product
        
        Supplier.objects.all()
        Product.objects.all()
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7 9" }
        --8<-- "snippets/outputs/supplier_products.objects.all.txt"
        ```

<div class="grid cards" markdown>

!!! success "Resultado"

    Si observamos el resultado en la Shell, `all()` retorna un **`QuerySet`** con los objetos de `Product` y `Supplier` almacenados en la base de datos. Cada objeto se muestra mediante su nombre, definido en el método `__str__()` de ambos modelos.

!!! tip "Consejo"

    El método `all()` es útil cuando necesitamos **obtener todos los registros de un modelo** sin aplicar filtros. El `QuerySet` obtenido puede utilizarse posteriormente para recorrer, inspeccionar o realizar otras operaciones sobre los objetos recuperados.

</div>

Como observamos en el resultado de `all()`, obtenemos un **`QuerySet`** con las instancias de los modelos. Para visualizar directamente los **campos y valores** de los registros contenidos en este `QuerySet`, podemos utilizar el método `values()`, que retorna los datos en forma de diccionarios.

!!! example "Ejemplo: obtener los valores con `values()`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3 4"
        from products.models import Supplier, Product
        
        Supplier.objects.all().values()
        Product.objects.all().values()
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7 9-11 14 16-20" }
        --8<-- "snippets/outputs/supplier_products.objects.all.values.txt"
        ```

#### :octicons-check-circle-16: Método `get()`

Si queremos recuperar un solo registro, podemos utilizar el método `get()`. Sin embargo, si la consulta coincide con más de un registro, se producirá un error `MultipleObjectsReturned`.

!!! failure "Ejemplo: error MultipleObjectsReturned"

    === ":octicons-code-16: Código Python"

        ```{ .py hl_lines="3" } 
        from products.models import Supplier

        Supplier.objects.get(product_id=2)  # (1)!
        ```

        1. La consulta coincide con **3 proveedores** asociados al producto con `id=2`, por lo que `get()` genera la excepción `MultipleObjectsReturned`.

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="3 12" }
        --8<-- "snippets/outputs/supplier.objects.get.multipleobjectsreturned.txt"
        ```

El método `get()` es más apropiado cuando buscamos utilizando campos con valores únicos, como la llave primaria. En el siguiente ejemplo, utilizaremos el campo **`id`** para obtener un único objeto del modelo `Product`:

!!! example "Ejemplo: consulta exitosa con `get()`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3"
        from products.models import Product

        Product.objects.get(id=2)
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7" }
        --8<-- "snippets/outputs/product.objects.get(id=2).txt"
        ```

### :octicons-search-16: Búsquedas

En el ORM de Django podemos **filtrar los registros de un `QuerySet`** utilizando búsquedas sobre los campos del modelo. Para especificar el tipo de búsqueda, utilizamos **dos guiones bajos (`__`)** entre el nombre del campo y el operador.

Por ejemplo, `name__contains` indica que queremos buscar en el campo `name` utilizando el operador `contains`.

Estas búsquedas permiten especificar condiciones que, internamente, son equivalentes a operadores utilizados en la cláusula `WHERE` de SQL.

Algunas de las búsquedas más utilizadas son:

<div class="grid cards search-operators" markdown>

- **ORM — `contains`**

    **SQL — `LIKE`**

    Busca registros cuyo campo **contenga** un determinado texto.

- **ORM — `range`**

    **SQL — `BETWEEN`**

    Busca registros cuyo valor se encuentre **dentro de un intervalo**.

- **ORM — `gte`**

    **SQL — `>=`**

    Busca registros cuyo valor sea **mayor o igual** al valor indicado.

- **ORM — `lte`**

    **SQL — `<=`**

    Busca registros cuyo valor sea **menor o igual** al valor indicado.

</div>

Los siguientes ejemplos muestran cómo utilizar estas búsquedas para **filtrar registros de los modelos `Product` y `Supplier`** desde la Shell de Django.

#### :octicons-check-circle-16: Operador - `contains`

Podemos buscar productos cuyo nombre contenga una determinada palabra o parte del texto utilizando el operador `contains`. Por ejemplo, busquemos los productos cuyo nombre incluya la palabra **"Tecl"**:

!!! example "Ejemplo: búsqueda exitosa con `contains`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3"
        from products.models import Product

        Product.objects.filter(name__contains="Tecl")
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7" }
        --8<-- 'snippets/outputs/product.objects.filter(name__contains="Tecl").txt'
        ```

#### :octicons-check-circle-16: Operadores `gte` y `lte`

Podemos utilizar `gte` y `lte` para filtrar registros según el valor de un campo numérico. `gte` permite obtener valores **mayores o iguales**, mientras que `lte` permite obtener valores **menores o iguales**.

Por ejemplo, podemos buscar productos cuyo precio sea mayor o igual a `100000` y productos cuyo stock sea menor o igual a `10`:

!!! example "Ejemplo: búsqueda con `gte` y `lte`"

    === ":octicons-code-16: Python"

        ```py
        from products.models import Product

        Product.objects.filter(price__gte=100000)
        Product.objects.filter(stock__lte=10)
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7-10" }
        --8<-- "snippets/outputs/product.objects.filter_gte_lte.txt"
        ```

#### :octicons-check-circle-16: Operador `range`

El operador `range` permite filtrar registros cuyo valor se encuentre **dentro de un intervalo determinado**. Por ejemplo, podemos utilizarlo para buscar productos cuyo precio esté entre `30000` y `100000`, o entre `30000` y `200000`:

!!! example "Ejemplo: búsqueda con `range`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3 4"
        from products.models import Product

        Product.objects.filter(price__range=(30000, 100000))
        Product.objects.filter(price__range=(30000, 200000))
        ```

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7-10" }
        --8<-- "snippets/outputs/product.objects.filter(price__range=(start,end)).txt"
        ```

### :octicons-sync-16: Actualizar

En el ORM de Django podemos **actualizar los registros de un modelo de distintas formas**, dependiendo de si necesitamos modificar directamente los datos en la base de datos o trabajar primero con una instancia del modelo.

Las dos formas principales son:

- **`update()`**: permite actualizar directamente uno o varios registros a partir de un `QuerySet`.
- **`save()`**: permite modificar una instancia del modelo y luego guardar los cambios en la base de datos.

A continuación, veremos cada una de estas formas utilizando los modelos `Product` y `Supplier`.

#### :octicons-check-circle-16: Método `update()`

El método `update()` permite modificar directamente los campos de los registros que coincidan con una consulta realizada mediante `filter()`.

En el siguiente ejemplo, actualizaremos el **precio del producto con `id=2`**, correspondiente a `Teclado`:

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
        --8<-- "snippets/outputs/product.objects.filter(id).update(price).txt"
        ```

#### :octicons-check-circle-16: Método `save()` para actualizar`

El método `save()` permite modificar una instancia del modelo y guardar los cambios realizados en la base de datos.

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
        --8<-- "snippets/outputs/supplier.update.email.save.txt"
        ```

### :octicons-trash-16: Eliminar

El ORM de Django proporciona el método `delete()` para **eliminar registros** de la base de datos. Al igual que las operaciones anteriores, podemos utilizarlo sobre una instancia específica o sobre un `QuerySet`, dependiendo de si queremos eliminar uno o varios registros.

#### :octicons-check-circle-16: Método `delete()` (eliminar un registro)

Para eliminar un registro específico, podemos obtener primero la instancia mediante `get()` y luego utilizar `delete()`. En el siguiente ejemplo, eliminaremos el `Supplier` con `id=3`:

!!! example "Ejemplo: eliminación de un `Supplier`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3-5"
        from products.models import Supplier

        Supplier.objects.all() #(1)!
        Supplier.objects.get(id=3).delete() #(2)!
        Supplier.objects.all() #(3)!
        ```

        1. Consultamos los `Supplier` almacenados actualmente.
        2. Obtenemos y eliminamos el `Supplier` con `id=3`.
        3. Consultamos nuevamente los registros para comprobar la eliminación.

    === ":octicons-terminal-16: Shell Django"

        ```{ .python .no-copy hl_lines="1 5 7-12" }
        --8<-- "snippets/outputs/supplier.objects.get.delete.txt"
        ```

#### :octicons-check-circle-16: Método `delete()` (eliminar múltiples registros)

El método `delete()` también puede utilizarse sobre un `QuerySet` para eliminar **varios registros a la vez**. Al utilizarlo junto con `all()`, se eliminan todos los registros del modelo. En este caso, eliminaremos los `Supplier` que aún permanecen en la base de datos:

!!! example "Ejemplo: eliminar múltiples `Supplier`"

    === ":octicons-code-16: Código Python"

        ```py hl_lines="3 5 7"
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
