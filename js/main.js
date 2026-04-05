// Animación de barras con porcentaje progresivo
const skillsSection = document.getElementById("skills");
const bars = document.querySelectorAll(".bar div");

function animateSkills() {
    const rect = skillsSection.getBoundingClientRect();
    if(rect.top < window.innerHeight) {
        bars.forEach(bar => {
            const target = parseInt(bar.getAttribute("data-width"));
            let current = 0;

            const step = () => {
                if(current < target){
                    current++;
                    bar.style.width = current + "%";
                    bar.textContent = current + "%";
                    requestAnimationFrame(step);
                } else {
                    bar.style.width = target + "%";
                    bar.textContent = target + "%";
                }
            }

            step();
        });
        window.removeEventListener("scroll", animateSkills);
    }
}
window.addEventListener("scroll", animateSkills);

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Parallax hero
const hero = document.getElementById("hero");
window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
});

// Animaciones proyectos más suaves
const projectCards = document.querySelectorAll(".project-card");
const animateProjects = () => {
    projectCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
            card.style.transition = "all 0.8s ease-out";
        }
    });
};
window.addEventListener("scroll", animateProjects);
animateProjects();