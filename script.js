window.onload = function () {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
  
    // Manually toggle sidebar
    closeBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      updateMenuIcon();
    });
  
    function updateMenuIcon() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
  
    // ✅ Set correct icon on initial load
    updateMenuIcon();
  };
  