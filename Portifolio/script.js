// --- Fade-in ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});
document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// --- Voltar ao topo ---
const btn = document.createElement("button");
btn.id = "backToTop";
btn.textContent = "↑";
document.body.appendChild(btn);

window.addEventListener("scroll", () => {
    btn.style.opacity = window.scrollY > 300 ? "1" : "0";
});

btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- MODAL DE PROJETOS ---
const modalBg = document.getElementById("modal-bg");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");

document.querySelectorAll(".open-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        modalTitle.textContent = btn.dataset.title;
        modalDesc.textContent = btn.dataset.desc;
        modalBg.style.display = "flex";
    });
});

document.getElementById("close-modal").addEventListener("click", () => {
    modalBg.style.display = "none";
});

modalBg.addEventListener("click", (e) => {
    if (e.target === modalBg) modalBg.style.display = "none";
});
