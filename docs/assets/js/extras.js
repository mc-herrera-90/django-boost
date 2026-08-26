document$.subscribe(() => {
  const title = document.querySelector(".md-content h1");

  if (!title || title.dataset.animated) return;

  title.dataset.animated = "true";

  title.addEventListener(
    "animationend",
    () => {
      title.classList.add("typing-complete");
    },
    { once: true }
  );
});

document$.subscribe(() => {

  const postContent = document.querySelector(".md-content--post");

  if (!postContent) return;

  const focusButton = postContent.querySelector("#focus-mode");
  const resetButton = document.querySelector("#reset-view");

  focusButton?.addEventListener("click", () => {

    const active = postContent.classList.toggle("focus-mode");

    focusButton.setAttribute(
      "aria-pressed",
      String(active)
    );

  });

  resetButton?.addEventListener("click", () => {

    postContent.classList.remove("focus-mode");

    focusButton?.setAttribute(
      "aria-pressed",
      "false"
    );

  });

});

document$.subscribe(() => {

  const tocButton = document.querySelector("#toc-mode");
  const toc = document.querySelector(".md-nav--secondary");

  if (!tocButton || !toc) return;

  tocButton.onclick = () => {

    const compact = toc.classList.toggle("toc-compact");

    tocButton.setAttribute(
      "aria-pressed",
      String(compact)
    );

  };

});

keyboard$.subscribe(function(key) {
    if (key.mode === "global" && key.type === "c") {
      /* Add custom keyboard handler here */
      const bodyElement = document.querySelector("body");
      let colorScheme = bodyElement.dataset.mdColorScheme;
      const scheme = colorScheme === 'default' ? 'slate' : 'default';
      bodyElement.dataset.mdColorScheme = scheme;
    }
})
