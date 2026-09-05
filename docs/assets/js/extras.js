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

function initCodeVariables() {
  document.querySelectorAll(".code-variable").forEach((editor) => {
    if (editor.dataset.initialized) {
      return;
    }

    editor.dataset.initialized = "true";

    const variable = editor.dataset.variable;
    const code = getNextCode(editor);

    if (!code) {
      return;
    }

    replaceAllPlaceholders(
      code,
      variable,
      editor.textContent
    );

    editor.addEventListener("input", () => {
      const value = editor.textContent;

      code
        .querySelectorAll(
          `.code-placeholder[data-variable="${variable}"]`
        )
        .forEach((placeholder) => {
          placeholder.textContent = value;
        });
    });

    editor.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });

    editor.addEventListener("beforeinput", (event) => {
      if (
        event.inputType === "insertParagraph" ||
        event.inputType === "insertLineBreak"
      ) {
        event.preventDefault();
      }
    });
  });
}


function getNextCode(element) {
  const codes = document.querySelectorAll("code");

  for (const code of codes) {
    const position = element.compareDocumentPosition(code);

    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
      return code;
    }
  }

  return null;
}

function replaceAllPlaceholders(code, variable, value) {
  while (true) {
    const result = findPlaceholder(code, variable);

    if (!result) {
      break;
    }

    const range = document.createRange();

    range.setStart(
      result.startNode,
      result.startOffset
    );

    range.setEnd(
      result.endNode,
      result.endOffset
    );

    range.deleteContents();

    const placeholder = document.createElement("span");

    placeholder.className = "code-placeholder";
    placeholder.dataset.variable = variable;
    placeholder.textContent = value;

    range.insertNode(placeholder);
  }
}


function findPlaceholder(code, variable) {
  const walker = document.createTreeWalker(
    code,
    NodeFilter.SHOW_TEXT
  );

  const nodes = [];
  let text = "";

  while (walker.nextNode()) {
    const node = walker.currentNode;

    if (node.parentElement?.closest(".code-placeholder")) {
      continue;
    }

    nodes.push({
      node,
      start: text.length,
      end: text.length + node.textContent.length
    });

    text += node.textContent;
  }

  const search = `//${variable}//`;
  const start = text.indexOf(search);

  if (start === -1) {
    return null;
  }

  const end = start + search.length;

  let startNode = null;
  let endNode = null;
  let startOffset = 0;
  let endOffset = 0;

  for (const item of nodes) {
    if (
      startNode === null &&
      start >= item.start &&
      start < item.end
    ) {
      startNode = item.node;
      startOffset = start - item.start;
    }

    if (
      end > item.start &&
      end <= item.end
    ) {
      endNode = item.node;
      endOffset = end - item.start;
      break;
    }
  }

  if (!startNode || !endNode) {
    return null;
  }

  return {
    startNode,
    startOffset,
    endNode,
    endOffset
  };
}


document$.subscribe(() => {
  initCodeVariables();
});
