const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");
const logoText = document.querySelector(".logo-text");

const collapsedSidebarHeight = "56px";
const fullSidebarHeight = "calc(100vh - 32px)";

// Toggle sidebar collapse with delayed logoText
sidebarToggler.addEventListener("click", () => {
  const isCollapsed = sidebar.classList.contains("collapsed");

  // Hide logoText instantly before collapsing
  if (!isCollapsed) {
    logoText.style.opacity = "0";
    logoText.style.pointerEvents = "none";
  }

  sidebar.classList.toggle("collapsed");

  // Show logoText after expand with delay
  if (isCollapsed) {
    setTimeout(() => {
      logoText.style.opacity = "1";
      logoText.style.pointerEvents = "auto";
    },5); // adjust delay here
  }
});

// Menu toggle
const toggleMenu = (isMenuActive) => {
  sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
  menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
};

menuToggler.addEventListener("click", () => {
  toggleMenu(sidebar.classList.toggle("menu-active"));
});

// Window resize handler
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    sidebar.style.height = fullSidebarHeight;
  } else {
    sidebar.classList.remove("collapsed");
    sidebar.style.height = "auto";
    toggleMenu(sidebar.classList.contains("menu-active"));
  }
});

