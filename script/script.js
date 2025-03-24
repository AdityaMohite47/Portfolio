function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById("profile").addEventListener("click", function() {
    document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
});