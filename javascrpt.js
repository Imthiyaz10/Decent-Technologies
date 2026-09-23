// DECENT TECHNOLOGIES
// Basic smooth interaction

console.log("Decent Technologies website loaded successfully.");


// Navbar shadow while scrolling

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 30px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }

});