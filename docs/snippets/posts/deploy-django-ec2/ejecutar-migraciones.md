=== "Comando"

    ```bash
    (.venv) python manage.py migrate
    ```

=== "Output"

    ```{.bash .no-copy hl_lines="1 3"}
    (.venv) ubuntu@ip-172-31-4-218:/var/www/proyecto-sgr-delegaciones$ python manage.py migrate
    Operations to perform:
    Apply all migrations: accounts, actividades, admin, admin_interface, auth, contenttypes, sessions
    Running migrations:
    Applying contenttypes.0001_initial... OK
    Applying contenttypes.0002_remove_content_type_name... OK
    Applying auth.0001_initial... OK
    Applying auth.0002_alter_permission_name_max_length... OK
    Applying auth.0003_alter_user_email_max_length... OK
    Applying auth.0004_alter_user_username_opts... OK
    Applying auth.0005_alter_user_last_login_null... OK
    Applying auth.0006_require_contenttypes_0002... OK
    Applying auth.0007_alter_validators_add_error_messages... OK
    Applying auth.0008_alter_user_username_max_length... OK
    Applying auth.0009_alter_user_last_name_max_length... OK
    Applying auth.0010_alter_group_name_max_length... OK
    Applying auth.0011_update_proxy_permissions... OK
    Applying auth.0012_alter_user_first_name_max_length... OK
    Applying accounts.0001_initial... OK
    Applying accounts.0002_alter_user_managers_alter_user_email... OK
    Applying accounts.0003_delegacion_user_delegacion... OK
    Applying accounts.0004_cargo_alter_delegacion_options_user_cargo... OK
    Applying accounts.0005_auto_20260914_1118... OK
    Applying accounts.0006_alter_user_first_name_alter_user_last_name... OK
    Applying accounts.0007_cargo_permisos... OK
    Applying actividades.0001_initial... OK
    Applying actividades.0002_activity_delete_actividad... OK
    Applying actividades.0003_alter_activity_options... OK
    Applying actividades.0004_alter_activity_options_alter_activity_description... OK
    Applying actividades.0005_contact_remove_activity_is_active_activity_action_and_more... OK
    Applying actividades.0006_contact_observations... OK
    Applying admin.0001_initial... OK
    Applying admin.0002_logentry_remove_auto_add... OK
    Applying admin.0003_logentry_add_action_flag_choices... OK
    Applying admin_interface.0001_initial... OK
    Applying admin_interface.0002_add_related_modal... OK
    Applying admin_interface.0003_add_logo_color... OK
    Applying admin_interface.0004_rename_title_color... OK
    Applying admin_interface.0005_add_recent_actions_visible... OK
    Applying admin_interface.0006_bytes_to_str... OK
    Applying admin_interface.0007_add_favicon... OK
    Applying admin_interface.0008_change_related_modal_background_opacity_type... OK
    Applying admin_interface.0009_add_enviroment... OK
    Applying admin_interface.0010_add_localization... OK
    Applying admin_interface.0011_add_environment_options... OK
    Applying admin_interface.0012_update_verbose_names... OK
    Applying admin_interface.0013_add_related_modal_close_button... OK
    Applying admin_interface.0014_name_unique... OK
    Applying admin_interface.0015_add_language_chooser_active... OK
    Applying admin_interface.0016_add_language_chooser_display... OK
    Applying admin_interface.0017_change_list_filter_dropdown... OK
    Applying admin_interface.0018_theme_list_filter_sticky... OK
    Applying admin_interface.0019_add_form_sticky... OK
    Applying admin_interface.0020_module_selected_colors... OK
    Applying admin_interface.0021_file_extension_validator... OK
    Applying admin_interface.0022_add_logo_max_width_and_height... OK
    Applying admin_interface.0023_theme_foldable_apps... OK
    Applying admin_interface.0024_remove_theme_css... OK
    Applying admin_interface.0025_theme_language_chooser_control... OK
    Applying admin_interface.0026_theme_list_filter_highlight... OK
    Applying admin_interface.0027_theme_list_filter_removal_links... OK
    Applying admin_interface.0028_theme_show_fieldsets_as_tabs_and_more... OK
    Applying admin_interface.0029_theme_css_generic_link_active_color... OK
    Applying admin_interface.0030_theme_collapsible_stacked_inlines_and_more... OK
    Applying admin_interface.0031_theme_form_actions_sticky... OK
    Applying admin_interface.0032_alter_theme_defaults... OK
    Applying sessions.0001_initial... OK
    ```
