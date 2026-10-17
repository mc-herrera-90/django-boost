=== ":octicons-download-16: Instalar última versión disponible"

    ```plaintext
    (.venv) pip install django
    ```

    ```{.plaintext .no-copy .mt-0 title="Output" hl_lines="2 4 6" }
    Collecting django
      Downloading django-6.1.2-py3-none-any.whl.metadata (3.9 kB)
    Collecting asgiref>=3.9.1 (from django)
      Downloading asgiref-3.12.1-py3-none-any.whl.metadata (9.4 kB)
    Collecting sqlparse>=0.5.0 (from django)
      Downloading sqlparse-0.6.0-py3-none-any.whl.metadata (6.0 kB)
    Downloading django-6.1.2-py3-none-any.whl (8.4 MB)
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 8.4/8.4 MB 45.7 MB/s  0:00:00
    Downloading asgiref-3.12.1-py3-none-any.whl (25 kB)
    Downloading sqlparse-0.6.0-py3-none-any.whl (50 kB)
    Installing collected packages: sqlparse, asgiref, django
    Successfully installed asgiref-3.12.1 django-6.1.2 sqlparse-0.6.0

    [notice] A new release of pip is available: 25.3 -> 26.2.1
    [notice] To update, run: pip install --upgrade pip
    ```


=== ":octicons-tag-16: Instalar versión específica"

    ```plaintext
    (.venv) pip install django==3.2
    ```

    ```{.plaintext .no-copy .mt-0 title="Output" hl_lines="2 4 6 8" }
    Collecting django==3.2
      Downloading Django-3.2-py3-none-any.whl.metadata (3.9 kB)
    Collecting asgiref<4,>=3.3.2 (from django==3.2)
      Downloading asgiref-3.12.1-py3-none-any.whl.metadata (9.4 kB)
    Collecting pytz (from django==3.2)
      Downloading pytz-2026.5-py2.py3-none-any.whl.metadata (22 kB)
    Collecting sqlparse>=0.2.2 (from django==3.2)
      Downloading sqlparse-0.6.0-py3-none-any.whl.metadata (6.0 kB)
    Downloading Django-3.2-py3-none-any.whl (7.9 MB)
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 7.9/7.9 MB 37.2 MB/s  0:00:00
    Downloading asgiref-3.12.1-py3-none-any.whl (25 kB)
    Downloading sqlparse-0.6.0-py3-none-any.whl (50 kB)
    Downloading pytz-2026.5-py2.py3-none-any.whl (506 kB)
    Installing collected packages: pytz, sqlparse, asgiref, django
    Successfully installed asgiref-3.12.1 django-3.2 pytz-2026.5 sqlparse-0.6.0

    [notice] A new release of pip is available: 25.3 -> 26.2.1
    [notice] To update, run: pip install --upgrade pip
    ```
