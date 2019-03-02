const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appnd(highlight);

function highlightLink() {}
triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
//# sourceMappingURL=script.js.map