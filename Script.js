// ===== LOADER =====
window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
