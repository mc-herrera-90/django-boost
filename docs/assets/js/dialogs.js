
(() => {
  "use strict";

  const SELECTOR = "a[data-dialog='iframe']";
  const DIALOG_ID = "content-dialog";

  function createDialog() {
    const dialog = document.createElement("dialog");
    dialog.id = DIALOG_ID;
    dialog.className = "content-dialog";

    const header = document.createElement("header");
    header.className = "content-dialog__header";

    const title = document.createElement("h2");
    title.className = "content-dialog__title";

    const close = document.createElement("button");
    close.type = "button";
    close.className = "content-dialog__close";
    close.setAttribute("aria-label", "Cerrar diálogo");
    close.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';

    const content = document.createElement("div");
    content.className = "content-dialog__body";

    const frame = document.createElement("iframe");
    frame.title = "Contenido externo";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";

    header.append(title, close);
    content.append(frame);
    dialog.append(header, content);
    document.body.append(dialog);

    close.addEventListener("click", () => dialog.close());

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", () => {
      frame.src = "about:blank";
      document.body.classList.remove("dialog-open");
    });

    return { dialog, title, frame };
  }

  let instance;

  document.addEventListener("click", (event) => {
    const link = event.target.closest(SELECTOR);

    if (!link || event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey || event.ctrlKey ||
        event.shiftKey || event.altKey) {
      return;
    }

    const url = new URL(link.href, window.location.href);

    if (!["http:", "https:"].includes(url.protocol)) return;

    event.preventDefault();

    instance ??= createDialog();

    instance.title.textContent =
      link.dataset.dialogTitle || link.textContent.trim() || "Contenido externo";

    instance.frame.title = instance.title.textContent;
    instance.frame.src = url.href;

    document.body.classList.add("dialog-open");
    instance.dialog.showModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && instance?.dialog.open) {
      instance.dialog.close();
    }
  });
})();
