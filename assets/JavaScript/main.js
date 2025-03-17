document.addEventListener("DOMContentLoaded", function () {
    const menubar = document.getElementById("menubar");
    const hamburger = document.getElementById("hamburger");

    hamburger.addEventListener("click", function () {
        menubar.style.width = menubar.style.width === "0px" ? "auto" : "0px";
        menubar.style.visibility = menubar.style.visibility === "hidden" ? "unset" : "hidden";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menubar = document.getElementById("menubar");

    menubar.style.width = "0px";
    menubar.style.visibility = "hidden";
    // if(localStorage.getItem("nome"))
    // nome=localStorage.getItem("nome");
    // else nome="Username";
    document.getElementById("nome_menu").innerHTML = localStorage.getItem("nome")? localStorage.getItem("nome"): "Username";
});
