export function initActiveNav() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            document.querySelector(".active")
                ?.classList.remove("active")

            document.querySelector(`nav a[href="#${entry.target.id}"]`)
                ?.classList.add("active");
            

        });
    }, {
        rootMargin: "-60% 0px -60px 0px",
        threshold: 0
    })

    document.querySelectorAll("[data-nav-section]").forEach(el => {
        observer.observe(el);
    });
}