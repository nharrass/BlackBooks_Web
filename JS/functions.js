const menubutton = document.getElementById("menubutton");

function togglemenu() {
    const sidebar = document.getElementById("sidebar");
    const sidebarOpen = document.getElementsByClassName("sidebar open");

    if (sidebarOpen[0]) {
        sidebar.style.display = "none";
        sidebar.classList.remove('open');
    } else {
        sidebar.style.display = "flex";
        sidebar.classList.add('open');
    }
}


menubutton.addEventListener("click", togglemenu);
