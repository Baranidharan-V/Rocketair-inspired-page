document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".navbar", { duration: 1, y: "-100%", ease: "bounce" });
    gsap.from(".footer", { duration: 1, y: "100%", ease: "bounce" });

    window.onscroll = function () {
        var navbar = document.getElementById("navbar");
        var footer = document.getElementById("footer");
        if (window.scrollY > 50) {
            gsap.to(navbar, { duration: 0.3, y: "-100%", opacity: 0 });
            gsap.to(footer, { duration: 0.3, y: "100%", opacity: 0 });
        } else {
            gsap.to(navbar, { duration: 0.3, y: "0", opacity: 1 });
            gsap.to(footer, { duration: 0.3, y: "0", opacity: 1 });
        }
    };
});
