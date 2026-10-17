# Sistema de Gestión de Resultados

El **Sistema de Gestión de Resultados (SGR)** es una aplicación web desarrollada para apoyar la gestión y seguimiento de las actividades realizadas por las delegaciones municipales de la **Ilustre Municipalidad de La Serena**.

El sistema permite centralizar el registro de actividades, responsables, delegaciones y estados, facilitando el seguimiento de los resultados y la gestión de la información.

## Tecnologías

El proyecto utiliza:

* **Django** como framework web.
* **MySQL** como sistema de base de datos.
* **Bootstrap** para la interfaz.
* **Gunicorn** como servidor de aplicaciones.
* **Nginx** como servidor web.
* **AWS EC2** para el despliegue.

## Módulos principales

<div class="grid cards" markdown>

- :material-account-group:   ***Cuentas***

    ---
    
    Gestiona los usuarios, delegaciones, cargos y permisos de acceso al sistema.

    ---

    **Gestión de usuarios y control de acceso**

* :material-calendar-check: &nbsp; **[Actividades][serializers]**

    ---
    
    Permite registrar, gestionar y realizar seguimiento de las actividades realizadas por las delegaciones municipales.

    ---

    **Registro y seguimiento de actividades**

* :material-view-dashboard:   ****Dashboard****

  ---

  Presenta información resumida del sistema para facilitar la consulta y seguimiento de los resultados.

  ---

  ****Visualización general de la información****

* :material-shield-crown:   ****Administración****

  ---

  Proporciona herramientas para administrar los registros y configuraciones internas del sistema mediante Django Admin.

  ---

  ****Administración y configuración del sistema****

</div>


### Cuentas

Gestiona usuarios, delegaciones, cargos y permisos de acceso.

### Actividades

Permite registrar y gestionar las actividades municipales, asociándolas a una delegación y responsable.

### Dashboard

Centraliza información relevante para facilitar el seguimiento de las actividades.

### Administración

Proporciona herramientas para administrar los datos y configuraciones del sistema.

## Documentación

La documentación del proyecto se organiza en las siguientes secciones:

* [Instalación](instalacion.md)
* [Configuración](configuracion.md)
* [Desarrollo](desarrollo.md)
* [Despliegue en AWS](despliegue.md)
* [Seguridad](seguridad.md)

[serializers]: activities/
