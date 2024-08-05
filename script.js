const panels = document.querySelectorAll(".panel");
let currentIndex = 0;

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function activatePanel(index) {
  removeActiveClasses();
  panels[index].classList.add("active");
}

function activePanels() {
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });
}

function autoActivatePanels() {
  setInterval(() => {
    activatePanel(currentIndex);
    currentIndex = (currentIndex + 1) % panels.length;
  }, 3000);
}

activePanels();
autoActivatePanels();
