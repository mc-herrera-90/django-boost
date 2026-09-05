class ProjectGenerator extends HTMLElement {
  constructor() {
    super();

    this.platforms = {
      windows: {
        name: "Windows",
        steps: [
          {
            title: "Abrir el símbolo de sistema",
            desc:/*html*/
                `Presiona las teclas <span class="keys" id="key_1"><kbd class="key-windows">Win</kbd><span>+</span><kbd class="key-r">R</kbd></span> para abrir la ventana de "Ejecutar".<br/>
                 Escribe <strong>cmd</strong> en el campo de texto y presiona <span class="keys"><kbd class="key-enter">Enter</kbd></span> o haz clic en "Aceptar".
                 Esto abrirá la ventana de comandos de Windows (símbolo del sistema).
                `,
          },
          {
            title: "Acceder a la ubicación del proyecto",
            desc:/*html*/
                `Una vez que tengas el CMD abierto, usa el comando <code>cd</code> (cambiar directorio) para navegar a la carpeta donde deseas crear tu proyecto Django. Por ejemplo, vamos a la carpeta Documentos:<br/>
                <div class="highlight"><span class="filename">Terminal</span><pre id="__code_0"><span></span><nav class="md-code__nav"><button class="md-code__button" title="Copiar al portapapeles" data-clipboard-target="#__code_0 &gt; code" data-md-type="copy"></button></nav><code>cd %UserProfile%\Documents</code></pre></div>
                `
          },
          {
            title: "Crear una carpeta para el proyecto",
            desc: /*html*/
                `Ya en la ubicación, usamos el siguiente comando para crear la carpeta llamada app y entrar en ella:`
          },
          {
            title: "Crear el entorno virtual",
            desc: "Crea un entorno virtual de Python para el proyecto.",
          },
          {
            title: "Activar el entorno virtual",
            desc: "Activa el entorno virtual que acabas de crear.",
          },
        ],

        python: "python",
        path: "%UserProfile%\\Documents",
        createVenv: "python -m venv {project}",
        activate: ".\\{project}\\Scripts\\activate",
      },

      linux: {
        name: "Linux",

        steps: [
          {
            title: "Abrir la terminal",
            desc: "Abre una terminal para ejecutar los comandos necesarios.",
          },
          {
            title: "Acceder a la carpeta de documentos",
            desc: "Dirígete a la carpeta Documents de tu usuario.",
          },
          {
            title: "Crear el entorno virtual",
            desc: "Crea un entorno virtual de Python para el proyecto.",
          },
          {
            title: "Activar el entorno virtual",
            desc: "Activa el entorno virtual que acabas de crear.",
          },
        ],

        python: "python3",
        path: "~/Documents",
        createVenv: "python3 -m venv {project}",
        activate: "source {project}/bin/activate",
      },

      macos: {
        name: "macOS",

        steps: [
          {
            title: "Abrir la terminal",
            desc: "Abre la aplicación Terminal para ejecutar los comandos necesarios.",
          },
          {
            title: "Acceder a la carpeta de documentos",
            desc: "Dirígete a la carpeta Documents de tu usuario.",
          },
          {
            title: "Crear el entorno virtual",
            desc: "Crea un entorno virtual de Python para el proyecto.",
          },
          {
            title: "Activar el entorno virtual",
            desc: "Activa el entorno virtual que acabas de crear.",
          },
        ],

        python: "python3",
        path: "~/Documents",
        createVenv: "python3 -m venv {project}",
        activate: "source {project}/bin/activate",
      },
    };

    this.swal = Swal.mixin({
      customClass: {
        popup: "md-modal",
        confirmButton: "swal-md-button",
      },
      buttonsStyling: false,
      animation: false,
    });
  }

  connectedCallback() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.innerHTML = /*html*/ `
      <button
        type="button"
        class="md-button md-button--primary project-generator__button"
      >
        Generar proyecto
      </button>

      <div class="project-generator__result"></div>
    `;
  }

  bindEvents() {
    const button = this.querySelector(
      ".project-generator__button"
    );

    button.addEventListener("click", () => {
      this.askProjectName();
    });
  }

  askProjectName() {
    this.swal
      .fire({
        title: "Proyecto nuevo",
        input: "text",
        inputLabel: "Nombre para el nuevo proyecto",
        inputPlaceholder: "Ej: mi-app-django",
        showCloseButton: true,
        confirmButtonText: "Continuar",

        inputValidator: (value) => {
          const name = value.trim();

          if (!name) {
            return "Necesitas escribir un nombre";
          }

          return undefined;
        },
      })
      .then((result) => {
        if (!result.isConfirmed) return;

        this.askPlatform(result.value.trim());
      });
  }

  askPlatform(projectName) {
    this.swal
      .fire({
        title: "Sistema operativo",
        input: "select",

        inputOptions: {
          windows: "Windows",
          linux: "Linux",
          macos: "macOS",
        },

        inputPlaceholder: "Selecciona tu S.O.",
        showCloseButton: true,
        confirmButtonText: "Generar",
      })
      .then((result) => {
        if (!result.isConfirmed) return;

        this.renderInstructions(
          projectName,
          result.value
        );
      });
  }

  renderInstructions(projectName, platformName) {
    const platform = this.platforms[platformName];

    if (!platform) return;

    const commands = [
      `cd ${platform.path}`,
      platform.createVenv.replace(
        "{project}",
        projectName
      ),
      platform.activate.replace(
        "{project}",
        projectName
      ),
    ].join("\n");

    const steps = platform.steps
      .map((step, index) => {
        return /*html*/ `
          <li>
            <h3 style='font-weight: bold'>${step.title}</h3>
            ${step.desc}
          </li>
        `;
      })
      .join("");

    const result = this.querySelector(
      ".project-generator__result"
    );

    result.innerHTML = /*html*/ `
      <details class="info" open>
        <summary>Instrucciones para ${platform.name}</summary>
        <ol>${steps}</ol>
        <p>
          Ejecuta los siguientes comandos en tu terminal:
        </p>

        <pre><code>${this.escapeHtml(commands)}</code></pre>
      </details>
    `;
  }

  escapeHtml(value) {
    const element = document.createElement("div");

    element.textContent = value;

    return element.innerHTML;
  }
}

customElements.define(
  "project-generator",
  ProjectGenerator
);
