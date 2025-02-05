document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY + window.innerHeight / 2;
        
        sections.forEach((section) => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });

    // Button hover effect
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#666";
        });

        link.addEventListener("mouseleave", () => {
            link.style.color = "#fff";
        });
    });
});
