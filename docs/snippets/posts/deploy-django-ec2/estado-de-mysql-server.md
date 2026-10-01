=== "Comando"

    ```bash
    sudo systemctl status mysql
    ```

=== "Output"

    ```{ .bash .no-copy hl_lines="1 4" }
    ubuntu@ip-172-31-4-218:~$ sudo systemctl status mysql
    ● mysql.service - MySQL Community Server
        Loaded: loaded (/usr/lib/systemd/system/mysql.service; enabled; preset: enabled)
        Active: active (running) since Sat 2026-09-26 20:51:51 UTC; 8min ago
    Invocation: f48554ae73a143d6bda51841dbd7f67f
        Process: 2977 ExecStartPre=/usr/share/mysql/mysql-systemd-start pre (code=exited, status=0/SUCC>
    Main PID: 2987 (mysqld)
        Status: "Server is operational"
        Tasks: 34 (limit: 627)
        Memory: 479.2M (peak: 484.6M)
            CPU: 4.762s
        CGroup: /system.slice/mysql.service
                └─2987 /usr/sbin/mysqld

    Sep 26 20:51:49 ip-172-31-4-218 systemd[1]: Starting mysql.service - MySQL Community Server...
    Sep 26 20:51:51 ip-172-31-4-218 systemd[1]: Started mysql.service - MySQL Community Server.
    ```
