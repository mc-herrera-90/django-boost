(() => {
  const MIN = 0.8;
  const MAX = 1.5;
  const STEP = 0.1;
  const DEFAULT = 1;

  function getZoom() {
    return Number(localStorage.getItem("post-zoom")) || DEFAULT;
  }

  function setZoom(value) {
    value = Math.max(MIN, Math.min(MAX, value));

    localStorage.setItem("post-zoom", value);

    document.documentElement.style.setProperty(
      "--post-zoom",
      value
    );
  }

  function initFontControls() {
    const post = document.querySelector(".md-content--post");

    if (!post) return;

    setZoom(getZoom());

    const decrease = document.getElementById("font-decrease");
    const reset = document.getElementById("font-reset");
    const increase = document.getElementById("font-increase");

    if (decrease) {
      decrease.onclick = () => {
        setZoom(getZoom() - STEP);
      };
    }

    if (reset) {
      reset.onclick = () => {
        setZoom(DEFAULT);
      };
    }

    if (increase) {
      increase.onclick = () => {
        setZoom(getZoom() + STEP);
      };
    }
  }

  document.addEventListener("DOMContentLoaded", initFontControls);

  if (typeof document$ !== "undefined") {
    document$.subscribe(initFontControls);
  }
})();