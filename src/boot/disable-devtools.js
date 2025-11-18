export default () => {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "F12") {
      e.preventDefault();
      e.stopPropagation();
    }

    if (
      e.ctrlKey &&
      e.shiftKey &&
      ["I", "J", "C"].includes(e.key.toUpperCase())
    ) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (e.ctrlKey && e.key.toUpperCase() === "U") {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
};
