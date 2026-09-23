// Decent Technologies
// Basic website interactions

console.log("Decent Technologies website loaded successfully.");


// Navbar background on scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5, 7, 10, 0.95)";
    } else {
        navbar.style.background = "rgba(5, 7, 10, 0.85)";
    }

});